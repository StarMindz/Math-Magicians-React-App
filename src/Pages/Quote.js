import { Component } from 'react';
import axios from 'axios';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Mathematics is not about numbers, equations, computations or algorithm: It is about understanding. -William Paul Thurston',};
  }

  apiCall() {
    const randomNumber = Math.floor(Math.random() * 1000);

    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${randomNumber}/math`,
      params: {fragment: 'true', json: 'true'},
      headers: {
        'X-RapidAPI-Key': '9c2f735920msh58066bca351c9d0p10f73ejsn4bee5d5e84a0',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(response => response.data)
        .then(data => {
          const text = `Fun Fact about number ${randomNumber}:  It is ${data.text}`
          this.setState({value: text})
        })
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className="quotes">
        <div className="quotesInner">
          <div className='refresh' onClick={() => this.apiCall()}>Get New Fact</div>
          <p className="quoteText">{this.state.value}</p>
        </div>
      </div>
    );
  }
}

export default Quotes;
