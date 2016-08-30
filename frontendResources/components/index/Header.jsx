import React, { Component } from 'react'
import { Row, Col } from 'antd'

class Header extends Component {

    render() {

        return (
            <section>
                <Row>
                    <Col span="4">4</Col>
                    <Col span="16">16</Col>
                    <Col span="4">4</Col>
                </Row>
            </section>
        );

    }

}

module.exports = Header;