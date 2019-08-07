import React from 'react'
import NormalLoginForm from './Login'
import {BrowserRouter, Route} from 'react-router-dom'
import SiderDemo from "./Layout";

// 使用react-redux
import store from './store/index'
import {Provider} from 'react-redux'
import ParamTranTest from "./Layout/loadable";


class App extends React.Component{

    render(){
        return(
            <div>
                <Provider store={store}>
                    <BrowserRouter>
					
                        <Route exact path='/'  component={NormalLoginForm}/>
                        <Route exact path='/layout' component={SiderDemo}/>
                        <Route exact path='/ParamTranTest/:id' component={ParamTranTest}/>

                    </BrowserRouter>
                </Provider>

            </div>

        )
    }

}

export default App;