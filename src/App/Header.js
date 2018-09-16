import React from 'react';
import './Header.scss';
import laptop from '../images/laptop.svg';
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