import React from 'react';
import './Home.scss';
import Laptop from './Laptop';

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
      n++;
      this.setState({ final: k });
      setTimeout(() => { this.typeWriter(text, n) }, 50);
    }
    else {
      this.setState({
        paragraphClass: 'header-paragraph'
      });;
    }
  }


  componentDidMount() {
    this.loadInterval = setInterval(this.loadSearches, this.props.pollInterval);

    setTimeout(function () {
      this.typeWriter("Hi, i'm Manos;\nI'm a Web Developer;", 0);
    }.bind(this), 300);
  }

  componentWillUnmount() {
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  render() {
    return (
      <div className="home-main">
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
      </div>
    );
  };
}