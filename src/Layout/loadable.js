import React from 'react';
import Loadable from 'react-loadable';

/*组件异步加载*/
const LoadableComponent = Loadable({
	loader: ()=>import('./ParamTranTest'),
	loading(){
		return <h1>正在加载</h1>
	}
});

export default ()=> <LoadableComponent/>