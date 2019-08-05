import React, {Component} from 'react';
import { Layout, Breadcrumb } from 'antd';
import {connect} from "react-redux";
import TableRight_1 from "./layout_right_1";
import TableRight_2 from "./layout_right_2";
const { Header, Content, Footer } = Layout;

class RightContent extends Component{

    /* 动态显示右边内容 */
    changeConten(){

        if(this.props.rightContent.getIn(['layout','turnTo']) === '1'){
            return <TableRight_1/>;
        }
        if(this.props.rightContent.getIn(['layout','turnTo']) === '2'){
            return <TableRight_2/>;
        }
    }

    render() {
        return(
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>

                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.changeConten()}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

/*值区,在这里，创建的store会自动把值传过来*/
const mapStateToProps = (state)=> {
    return {
        rightContent : state

    }
}

/*方法区，在这里，可以直接提交action*/
const mapDispatchToProps = (dispatch)=> {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RightContent);