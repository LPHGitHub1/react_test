import React, {Component, Fragment} from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'
import './layout.css'

const columns = [/*在这里加列*/
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



const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
	},
];


function onChange(pagination, filters, sorter) {
	console.log('params', pagination, filters, sorter);
}


class Layout_right_1 extends Component{
	render(){
		return(
			<Fragment>
				<h2>TableRight_1</h2>
				<Table columns={columns} dataSource={data} onChange={onChange} />
			</Fragment>

		)
	}

}

export default Layout_right_1;
