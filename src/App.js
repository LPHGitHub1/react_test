import React from 'react'
import NormalLoginForm from './Login'
import {BrowserRouter, Route} from 'react-router-dom'
import SiderDemo from "./Layout";

// 使用react-redux
import store from './store/index'
import {Provider} from 'react-redux'


class App extends React.Component{

    render(){
        return(
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Route exact path='/'  component={NormalLoginForm}/>
                        <Route exact path='/layout' component={SiderDemo}/>
                    </BrowserRouter>
                </Provider>

            </div>

        )
    }

}

export default App;