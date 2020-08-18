import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      activeIndex: 0,
    };
    this.curMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  changeIndex() {
    this.setState({activeIndex: this.state.activeIndex === 3 ? 0 : this.state.activeIndex + 1});
    document.querySelector('.app').style.backgroundColor = `rgb(${Math.floor(Math.random() * (Math.floor(180) - Math.ceil(50) + 1)) + Math.ceil(50)},${Math.floor(Math.random() * (Math.floor(180) - Math.ceil(50) + 1)) + Math.ceil(50)},${Math.floor(Math.random() * (Math.floor(180) - Math.ceil(50) + 1)) + Math.ceil(50)})`;
  }

  showVariousDate(k) {
    switch (k) {
      case 0: return this.state.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
      case 1: return this.state.date.toLocaleDateString('en-US');
      case 2: return this.curMonth[this.state.date.getMonth()] + ' ' + this.state.date.getDate() + 'th ' + this.state.date.toLocaleDateString('en-US').slice(-2);
      case 3: return this.state.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      default: return;
    }
  };

  render() {
    return (
      <div onClick={() => this.changeIndex()} className='app'>
        <h2>{this.showVariousDate(this.state.activeIndex)}</h2>
      </div>
    );
  }
}
export default App;