import React from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import {connect} from 'react-redux';
import { Layout } from 'antd';

import LeftContent from './LeftContent';
import RightContent from './RightContent';


class SiderDemo extends React.Component {


    render() {

        return (

            <Layout style={{ minHeight: '100vh' }}>

                {/*左边菜单栏*/}
                <LeftContent/>
                {/*右边内容区*/}
                <RightContent/>
				
            </Layout>
        );
    }
}

/*值区,在这里，创建的store会自动把值传过来*/
const mapStateToProps = (state)=> {
    return {


    }
}

/*方法区，在这里，可以直接提交action*/
const mapDispatchToProps = (dispatch)=> {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);

