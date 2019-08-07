import React from 'react';
import 'antd/dist/antd.css'
import './layout.css'
import {connect} from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import TableRight_1 from './layout_right_1'
import TableRight_2 from "./layout_right_2";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    /* 动态显示右边内容 */
    changeConten(){

        if(this.props.rightContent === '1'){
            return <TableRight_1/>;
        }
        if(this.props.rightContent === '2'){
            return <TableRight_2/>;
        }
    }

    render() {

        return (


            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <Menu.Item key="1" onClick={()=>this.props.counts('1')}>
                            <Icon type="pie-chart" />
                            <span>账单</span>
                        </Menu.Item>

                        <Menu.Item key="2" onClick={()=>this.props.counts('2')}>
                            <Icon type="desktop" />
                            <span>所有账单</span>
                        </Menu.Item>

                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>


                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
                            }
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>


                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>

                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>

                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {/* 再次刷新右边组件*/}
                            {this.changeConten()}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>

            </Layout>
        );
    }
}

/*值区,在这里，创建的store会自动把值传过来*/
const mapStateToProps = (state)=> {
    return {
        /*获取redux里面右边栏是哪个*/
        rightContent : state.getIn(['layout','turnTo'])

    }
}

/*方法区，在这里，可以直接提交action*/
const mapDispatchToProps = (dispatch)=> {
    return {
        counts(value){

            const action = {
                type : 'change_left_tcontent',
                value : value

            }
            dispatch(action);
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);

