import React from 'react';
import './Header.scss';
import Email from "./Email";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            final: '',
            paragraphClass: 'header-paragraph-inactive'
        };
        this.typeWriter = this.typeWriter.bind(this);
    };

    typeWriter(text, n) {
        if (n < text.length) {
            let k = text.substring(0, n + 1);
            k = k.replace(/;\//i, ';<br>');
            // this.setState({ final: k });
            n++;
            this.setState({ final: k });
            this.finalRender(k);
            setTimeout(() => { this.typeWriter(text, n) }, 50);
        }
        // else {
        //     this.setState({
        //         final: "Hi, i'm <i className='meow' style='color: black;'>Manos</i><strong>;</strong><br>I'm a Full-Stack Web Developer<strong>;</strong>",
        //         final: "",
        //         paragraphClass: 'header-paragraph'
        //     });;
        // }
    }

    finalRender() {
        return (
            <div>{this.state.final}</div >
        );
    }

    componentDidMount() {
        setTimeout(function () {
            this.typeWriter("Hi, i'm Manos;/I'm a Full-Stack Web Developer;", 0);
        }.bind(this), 300);
    }

    render() {
        return (
            <div className="header-background">
                <div className="header-text">
                    {/* <div dangerouslySetInnerHTML={{ __html: this.state.final }}></div> */}
                    {this.finalRender()}
                </div>
                <div className="cursor"></div>
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
            </div>
        );
    };

}