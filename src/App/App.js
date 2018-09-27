import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.scss';


import Home from './Home';
import Skills from "./Skills";
import Portfolio from "./Portfolio";
// import Contact from "./Contact";
import Email from "./Email";

const Header = () => {

    return (
        <div className="header">
            <div className="buttons">
                <div className="close"></div>
                <div className="minimize"></div>
                <div className="expand"></div>
            </div>
            <Links />
            <div className="line-numbers">
                0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
                28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52
                53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77
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