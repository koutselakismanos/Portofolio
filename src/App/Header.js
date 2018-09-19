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
                </div>
                <div className="line-numbers">
                    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
                    28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52
                    53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77
                    78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101
                    102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119
                    120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137
                    138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156
                    157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175
                    176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193
                    194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213
                    214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235
                    236 237 238 239 240 241 242 243 244 245 246 247 248 249
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