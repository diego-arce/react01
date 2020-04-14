import React from 'react';
import './App.css';

/* function Helloworld(props) {
  return (
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
  </div>
  )
} */

class Helloworld extends React.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
    /* if (this.state.show) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
    } */
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    } else {
      return (
        <div>
          No hay elementos
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello Diego" subtitle="Lorem ipsum" />
      Again:
      <Helloworld mytext="Hello Fernando" />
      The Last One:
      <Helloworld mytext="Hello?" subtitle="Hi!" />
    </div>
  );
}

/*
class App extends React.Component {
  render() {
    return <div>This is my class component: <Helloworld/></div>
  }
}

const App1 = () => <div>This is my new component: <Helloworld/></div>
*/
export default App;
