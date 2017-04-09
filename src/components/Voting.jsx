import React from 'react';
import Vote from './Vote';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return <div className='voting'>
      <Vote />
      {this.props.winner? 
        <div ref="winner">Winner i {this.props.winner}!</div> :
          this.getPair().map(entry =>
            <button key={entry}
                    disabled={this.isDisabled()}
                    onClick={() => this.props.vote(entry)}>
              <h1>{entry}</h1>
              {this.hasVotedFor(entry)?
                <div className="label"> Voted </div> :
                null}
            </button>
      )}
    </div>;
  }
});
