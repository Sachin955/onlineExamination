import React, { Component } from 'react'
import Login from '../../Component/Login'
import Registration from '../../Component/RegisterationPage'
// import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Login />
                <Registration />
            </div>
        )
    }
}

export default App