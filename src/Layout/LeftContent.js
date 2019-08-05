import React, {Component} from 'react';
import {Icon, Layout, Menu} from "antd";
import {connect} from "react-redux";
const {  Sider } = Layout;
const { SubMenu } = Menu;

class LeftContent extends Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return(

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            {/*左上角logo*/}
            <div className="logo" >

            </div>

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
        )
    }
}

const mapStateToProps = ()=>{
    return {

    }
}

/*方法区，在这里，可以直接提交action*/
const mapDispatchToProps = (dispatch)=>{
    return{
        counts(value){

            const action = {
                type : 'change_right_tcontent',
                value : value

            }
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftContent);