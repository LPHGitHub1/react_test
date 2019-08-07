import React,{Fragment} from 'react'
import {connect} from "react-redux";
/*组件异步加载时获得id数据方式有些区别*/
import {withRouter} from "react-router-dom"

class ParamTranTest extends React.Component{
	render() {
		return(
			<Fragment>
				<h2>hahaahah.....{this.props.match.params.id}</h2>
			</Fragment>
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
		counts(value){

			const action = {
				type : 'change_left_tcontent',
				value : value

			}
			dispatch(action);
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ParamTranTest));