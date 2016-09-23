import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import '../less/index.less';

import * as headerActions from '../actions/header'

import Header from '../components/index/Header'
import Body from '../components/index/Body'

class Index extends Component {

    constructor( props ) {
        super( props );
    }

    render() {

        return (
            <section>
                <Header />
                <Body />
            </section>
        );

    }

}

function mapStateToProps( state ) {
    return {
        headerData: state.headerData
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        headerActions: bindActionCreators( headerActions, dispatch)
    };
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);