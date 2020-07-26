import React, { Component } from 'react'
import InputField from '../FormControls/InputField'
import axios from 'axios';
import './style.scss'

class Registration extends Component {
    constructor() {
        super()
        this.state = {
            fistName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            allUser: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/users/all").then((response) => {
            this.setState({
                allUser: response.data
            })
        }).catch(error => console.log(error, "hhhhhhhhhhhhhh"))
    }

    registerFirstName = (value) => {
        this.setState({
            fistName: value
        })
    }
    registerLastName = (value) => {
        this.setState({
            lastName: value
        })

    }
    registerEmail = (value) => {
        this.setState({
            email: value
        })

    }
    registerPassword = (value) => {
        this.setState({
            password: value
        })

    }
    registerPhoneNo = (value) => {
        this.setState({
            phoneNumber: value
        })

    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/api/users/add", this.state)
            .then(response => {
                console.log(response, "ggggggggggggg")
            })
            .catch((error) => {
                console.log(error)
            })


    }
    render() {
        const { allUser } = this.state
        console.log(allUser, "allusers")
        const allUserData = allUser.map((, index)=> {
            return <li></li>
        })
    }
}

export default Registration