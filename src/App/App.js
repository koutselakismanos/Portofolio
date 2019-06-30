import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.scss';


import Home from './Home';
import Skills from "./Skills";
import Portfolio from "./Portfolio";
// import Contact from "./Contact";
import Email from "./Email";

const Header = () => {

  const renderNumbers = (height) => {
    let numbers = ""

    for (let i = 0; i < height / 30; i++) {
      numbers += `${i} `;
    }

    return numbers;
  };

  return (
    <div className="header">
      <div className="buttons">
        <div className="close"></div>
        <div className="minimize"></div>
        <div className="expand"></div>
      </div>
      <Links />
      <div className="line-numbers">
        {renderNumbers(window.innerHeight)}
      </div>
    </div>
  );
}



export default class App extends React.Component {

  componentDidMount() {
    document.title = 'Koutselakis Manos';
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/skills" component={Skills} exact />
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path="/contact" component={Email} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

class Links extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      class: 'blue'
    };
  }

  onClick = (color) => {
    switch (color) {
      case 'blue':
        this.setState({
          class: 'blue',
        })
        break;
      case 'yellow':
        this.setState({
          class: 'yellow',
        })
        break;
      case 'green':
        this.setState({
          class: 'green',
        })
        break;
      case 'red':
        this.setState({
          class: 'red',
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <NavLink onClick={() => this.onClick('blue')} className={['home', this.state.class].join(' ')} colo="red" activeClassName="active" exact to="/">Home</NavLink>
          <NavLink onClick={() => this.onClick('yellow')} className={['home', this.state.class].join(' ')} colo="blue" activeClassName="active" exact to="/skills">Skills</NavLink>
          <NavLink onClick={() => this.onClick('green')} className={['home', this.state.class].join(' ')} colo="yellow" activeClassName="active" exact to="/portfolio">Portfolio</NavLink>
        </nav>
        <nav className="navbar-right">
          <NavLink onClick={() => this.onClick('red')} className="contact" exact to="/contact">Contact</NavLink>
        </nav>
      </React.Fragment>
    )
  };

}
