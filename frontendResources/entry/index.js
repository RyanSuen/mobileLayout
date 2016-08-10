/**
 * Created by ryan on 16/8/4.
 */

import React, { Component } from 'react'
import { render } from 'react-dom'

class Test extends Component {

    render() {

        return (
            <div>
                <h1>Lorem ipsum dolor.</h1>
                Lorem ipsum dolor sit amet.
                <h2>1234</h2>

            </div>
        );

    }

}

render(
    <Test />,
    document.getElementById('app-container')
);