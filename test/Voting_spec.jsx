import React from 'react';
import ReactDOM from 'react-dom';
import {
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils';
import Voting from '../src/components/Voting.jsx';
import {expect} from 'chai';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    console.log(buttons[0].methods);

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');


  });


  it('invokes callback when button pressed', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} 
              vote={vote}/>
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(votedWith).to.equal('Trainspotting'); 
  });

});

