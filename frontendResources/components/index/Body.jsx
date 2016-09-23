import React, { Component } from 'react'
import { Row, Col } from 'antd'

import ComponentsCollection from './ComponentsCollection'
import  ComponentsLayout from './ComponentsLayout'

class Body extends Component {

    render() {

        return (
            <section className="index-body">
                <Row>
                    <Col span="6">
                        <ComponentsCollection />
                    </Col>
                    <Col span="18">
                        <ComponentsLayout />
                    </Col>
                </Row>
            </section>
        );

    }

}

module.exports = Body;