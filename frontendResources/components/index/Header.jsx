import React, { Component } from 'react'
import { Row, Col, Button, Icon, Menu } from 'antd'

const ButtonGroup = Button.Group;

class Header extends Component {

    render() {


        return (
            <section className="index-header">
                <Row>
                    <Col span="4">
                        <Button size="large" type="primary" icon="home">
                            可视化布局
                        </Button>
                    </Col>
                    <Col span="16">
                        <ButtonGroup>
                            <Button size="large" type="primary" icon="edit">编辑</Button>
                            <Button size="large" type="primary" icon="eye">布局编辑</Button>
                            <Button size="large" type="primary" icon="eye-o">预览</Button>
                        </ButtonGroup>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ButtonGroup>
                            <Button size="large" type="primary" icon="cloud-download">下载</Button>
                            <Button size="large" type="primary" icon="save">保存</Button>
                            <Button size="large" type="primary" icon="delete">清空</Button>
                        </ButtonGroup>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ButtonGroup>
                            <Button size="large" type="primary" icon="arrow-left">撤消</Button>
                            <Button size="large" type="primary" icon="arrow-right">重做</Button>
                        </ButtonGroup>
                    </Col>
                    <Col span="4">
                        <ButtonGroup>
                            <Button size="large" type="primary" icon="github">star</Button>
                            <Button size="large" type="primary" icon="fork">fork</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </section>
        );
    }

}

module.exports = Header;