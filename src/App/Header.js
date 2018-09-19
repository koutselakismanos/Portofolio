import React from 'react';
import './Header.scss';
import Laptop from './Laptop';

export default class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            final: '',
            paragraphClass: 'header-paragraph-inactive'
        };
        this.typeWriter = this.typeWriter.bind(this);
    };

    typeWriter(text, n)
    {
        if (n < text.length)
        {
            let k = text.substring(0, n + 1);
            n++;
            this.setState({ final: k });
            setTimeout(() => { this.typeWriter(text, n) }, 50);
        }
        else
        {
            this.setState({
                paragraphClass: 'header-paragraph'
            });;
        }
    }


    componentDidMount()
    {
        setTimeout(function ()
        {
            this.typeWriter("Hi, i'm Manos;\nI'm a Full-Stack Web Developer;", 0);
        }.bind(this), 300);
    }

    render()
    {
        return (
            <div className="header-background">
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
                        {/* <i>meow</i> */}
                        <a className="contact" href="/contact">Contact</a>
                    </nav>
                </div>
                <div className="line-numbers">
                    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
                    28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52
                    53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77
                </div>
                <div className="header-text">
                    {this.state.final}
                    <div className="cursor"></div>
                </div>
                <div className={this.state.paragraphClass}>
                    <p>
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the
                        1500s, when an unknown printer took a
                        galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </div>
                <Laptop className="laptop" />
                {/* <div className="footer">meow</div> */}
            </div>

        );
    };

}