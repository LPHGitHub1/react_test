import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css'
import './layout.css'
import { Carousel } from 'antd';
import $ from 'jquery'


class Layout_right_1 extends Component{
	render(){
		return(
			<Fragment>
				<div  onClick={this.changePig}>
					<h1 id="dianji">点击获取验证码</h1>
					{<img id='img' src=''/>}
				</div>
				<Carousel autoplay>
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

	changePig(){

		$.ajax({
			//请求方式
			type : "GET",
			//请求的数据类型
			//contentType: "application/json;charset=UTF-8",
			//请求地址
			url : "http://localhost:8080/BASE64Test",
			//数据，json字符串
			//!*data : JSON.stringify(list),*!/
			//请求成功,在react中使用jQuery的ajax回调函数要有箭头函数才能使用react的this
			success : (data)=>{

				/*const value = [data["name"],data["age"]];*/

				var img = 'data:image/jpeg;base64,'+data;
				$('#img').attr('src', img);

				/*往标签设值*/
				$("#dianji").html('看不清？更换验证码');
			},
			//请求失败，包含具体的错误信息
			error : function(e){
				console.log(e.status);
				console.log(e.responseText);
			}
		});
	}

}

export default Layout_right_1;
