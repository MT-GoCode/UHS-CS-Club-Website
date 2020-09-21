import React from 'react';
import { Layout, Menu, Breadcrumb, Typography, Row, Col, Button, } from 'antd';
import { Divider } from 'antd';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography


function Landing() {
    return (
        <Layout >
            <Header style={{ backgroundColor: 'white', alignItems: 'right', position:"fixed", width: "100%"}} >
                <Row justify="end" align="middle">
                    <Col span={2}>
                        About
                    </Col>
                    <Col span={2}>
                        Projects
                    </Col>
                    <Col span={2}>
                        Events
                    </Col>
                    <Col span={2}>
                        <Button type="primary" shape="round">
                            Join
                        </Button>
                    </Col>
                </Row>


            </Header>
            <Content>
            
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default Landing;
