import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css'
import './layout.css'
import { Carousel } from 'antd';


class TableRight_1 extends Component{
	render(){
		return(
			<Fragment>
				<Carousel autoplay>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
				</Carousel>
			</Fragment>

		)
	}

}

export default TableRight_1;
