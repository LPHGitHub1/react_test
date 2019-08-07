import React, {Component, Fragment} from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'
import './layout.css'
import {connect} from "react-redux";
import axios from 'axios'
import store from   '../store/index'
import {getTableRight_2_Init_Action} from './store/actionCreactor'


const columns = [
	{
		title: 'Name',
		dataIndex: 'name',

		// specify the condition of filtering result
		// here is that finding the name started with `value`
		onFilter: (value, record) => record.name.indexOf(value) === 0,
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ['descend'],
	},
	{
		title: 'Age',
		dataIndex: 'age',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Address',
		dataIndex: 'address',

		filterMultiple: false,
		onFilter: (value, record) => record.address.indexOf(value) === 0,
		sorter: (a, b) => a.address.length - b.address.length,
		sortDirections: ['descend', 'ascend'],
	},
];


function onChange(pagination, filters, sorter) {
	console.log('params', pagination, filters, sorter);
}

class Layout_right_2 extends Component{

	render(){
		return(
			<Fragment >
				<h2>TableRight_2</h2>
				<Table columns={columns} dataSource={this.props.TableRight_2_Init} onChange={onChange} />
			</Fragment>

		)
	}



	/*生命周期初始化组件的数据,生命周期函数写在类里*/
	componentDidMount(){
		axios.get("http://localhost:8080/listInit").then((data)=>{

			const action = getTableRight_2_Init_Action(data.data)
			store.dispatch(action);


		}).catch((data)=>{
			alert(data)
		})
	}

}

const mapStateToProps = (state)=>{
	return {
		TableRight_2_Init : state.getIn(['layout','TableRight_2_Init'])
	}
}

const mapDispathToProps = (dispatch)=>{
	return {

		}
}



export default connect(mapStateToProps, mapDispathToProps)(Layout_right_2);

