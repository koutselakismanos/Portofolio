import React from 'react';
import Home from './Home'
import './App.scss'
import { BrowseRouter as Router } from 'react-router-dom'

function Header()
{
    return (
        <div className="header">
            <div className="buttons">
                <div className="close"></div>
                <div className="minimize"></div>
                <div className="expand"></div>
            </div>
            <nav className="navbar">
                <a className="home" href="/home">Home</a>
                <a className="skills" href="/skills">Skills</a>
                <a className="portofolio" href="/portofolio">Portofolio</a>
            </nav>
            <nav className="navbar-right">
                <a className="contact" href="/contact">Contact</a>
            </nav>
            <div className="line-numbers">
                0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
                28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52
                53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77
            </div>
        </div>
    );
}

export default class App extends React.Component
{
    render()
    {
        return (
            <div className="main">
                <Header />
                <Home />
            </div>
        );
    };
}
