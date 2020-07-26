import React, { Component } from 'react';
import InputField from '../FormControls/InputField'
import './style.scss'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

    }
    upDatedValueEmail = (value) => {
        this.setState({
            email: value
        })
    }

    upDatedValuePws = (value) => {
        this.setState({
            password: value
        })
    }
    render() {
        return (
            <div className='login'>
                <div className="container">
                    <div className="form-wrapper">
                        <form className="login-form" onSubmit={this.submitHandler} >
                            <div className="login-wrapper">
                                <p>LOGIN</p>
                                <InputField type="email" name="email" upDatedValue={this.upDatedValueEmail} placeholder="Enter your email" />
                                <InputField type="password" name="password" upDatedValue={this.upDatedValuePws} placeholder="Enter password" />
                                <button type="submit" className="btn btn-primary" >CONTINUE</button>
                            </div>
                        </form>
                        <div className="register-wrapper">
                            <p>Create New Account</p>
                            <a href="#" className="">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login