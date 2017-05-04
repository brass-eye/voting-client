import React from 'react';
import {Map, List} from 'immutable';

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.pair = List.of('Trainspotting', '28 Days Later');
		this.tally = Map({'Trainspotting': 5, '28 Days Later': 4});
	}

	render () {
		return React.cloneElement(this.props.children, {
			pair: this.pair,
			tally: this.tally
		});
	}

}

export default App;