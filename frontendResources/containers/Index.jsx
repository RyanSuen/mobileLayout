import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as headerActions from '../actions/header'

import Header from '../components/index/Header'

class Index extends Component {

    constructor( props ) {
        super( props );
    }

    render() {

        return (
            <section>
                <Header />
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