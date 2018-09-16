import React from 'react';
import './Loading.scss';
import Laptop from './Laptop';

export default class Loading extends React.Component
{

    render()
    {
        return (
            <div className="main">
                <div className="center">
                    <Laptop style={{ height: '20%' }} />
                </div>
            </div>

        );
    };
}