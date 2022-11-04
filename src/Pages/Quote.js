import { Component } from 'react';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="quotes">
        <div className='quotesInner'>
          <p className='quoteText'>Mathematics is not about numbers, equations, computations or algorithm: It is about understanding. -William Paul Thurston</p>
        </div>
      </div>
    );
  }
}

export default Quotes;