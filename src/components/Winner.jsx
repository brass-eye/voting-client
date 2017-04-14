import React from 'react';

class Winner extends React.component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="winner">
        The winner is {this.props.winner}!
      </div>
    );
  }
}

export default Winner;
  
