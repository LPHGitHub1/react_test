import {combineReducers} from "redux-immutable";

import layoutReducer from '../Layout/store/reducer'

/*各部分reduce分到各自的文件，在这里汇总,这里的combineReducers为immutable加强过的，和从redux引入的不一样*/
const reducer = combineReducers({
	layout: layoutReducer

})

export default reducer;