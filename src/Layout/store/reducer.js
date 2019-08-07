import {fromJS} from "immutable";

const  defaultState = fromJS({
	turnTo : '1',
	TableRight_2_Init : '',
	list: []
})

export default (state=defaultState, action)=>{

	if(action.type === 'change_right_tcontent'){
		/*使用了immutable*/
		return state.set('turnTo',action.value);
	}

	if(action.type === 'TableRight_2_Init'){
		/*使用了immutable*/
		/*不要忘记 return 回去*/
		var userList = [];
		for(var i=0; i<action.value.length; i++){
			userList.push({
				key: action.value[i].name,
				name: action.value[i].name,
				age: action.value[i].age,
				address: action.value[i].addr,
			})
		}

		return state.set('TableRight_2_Init',userList);

	}

	return state;
}