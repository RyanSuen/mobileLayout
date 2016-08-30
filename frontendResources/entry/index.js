/**
 * Created by ryan on 16/8/4.
 */

import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Index from '../containers/Index'
import rootReducer from '../reducers/index.js'

let store = createStore( rootReducer );


 import 'antd/dist/antd.less'
//
// import { DatePicker, Switch } from 'antd'
//
//
// class Test extends Component {
//
//     render() {
//
//         return (
//             <div>
//                 <DatePicker />
//                 <Switch defaultChecked={false} onChange={(checked) => {
//                     console.log( `switch to ${checked}` );
//                 }}/>
//             </div>
//
//         );
//
//     }
//
// }
//
// render(
//     <Test />,
//     document.getElementById('app-container')
// );

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('app-container')
);