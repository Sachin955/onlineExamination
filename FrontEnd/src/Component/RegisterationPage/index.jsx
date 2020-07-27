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
            allUser: [],
            isEdit: false
        }
    }
    getAllUsers = () => {
        axios.get("http://localhost:8080/api/users/all").then((response) => {

            this.setState({
                allUser: response.data.response
            })
        }).catch(error => console.log(error, "hhhhhhhhhhhhhh"))
    }
    componentDidMount() {
        this.getAllUsers()
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
        const { isEdit } = this.state
        if (isEdit === true) {
            console.log("put call ")
            axios.put("http://localhost:8080/api/users/update", this.state)
                .then(response => {
                    console.log(response, "ggggggggggggg")
                })
                .catch((error) => {
                    console.log(error)
                })
        } else if (isEdit === false) {
            axios.post("http://localhost:8080/api/users/add", this.state)
                .then(response => {
                    console.log(response, "ggggggggggggg")
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    itemDeleteHandler = (selectedItems) => {
        console.log(selectedItems._id);
        const url = `http://localhost:8080/api/users/delete/${selectedItems._id}`
        axios.delete(url)
            .then(response => {
                console.log(response, "ggggggggggggg")
                this.getAllUsers()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    itemEditHandler = (selectedItems) => {
        console.log(selectedItems)
        this.setState({
            fistName: selectedItems.fistName,
            lastName: selectedItems.lastName,
            email: selectedItems.email,
            password: selectedItems.password,
            phoneNumber: selectedItems.phoneNumber,
            isEdit: true
        })
    }
    resetHandler = () => {
        this.setState({
            fistName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            isEdit: false
        })
    }
    render() {
        const { allUser,
            fistName,
            lastName,
            email,
            password,
            phoneNumber } = this.state
        return (
            <div className="registration">
                <div className="container">
                    <div className="form-wrapper">
                        <div className="get-user">
                            <ul>
                                {
                                    allUser.length !== 0 && allUser.map((liItems, index) => {

                                        return <li>{liItems.fistName}
                                            <button type="button"
                                                onClick={(event) => {
                                                    this.itemDeleteHandler(liItems)

                                                }} >delete</button>

                                            <button type="button" onClick={(event) => {
                                                this.itemEditHandler(liItems)

                                            }} >edit</button>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <form onSubmit={this.submitHandler}>
                            <div className="register-name">
                                <label>Name</label>
                                <InputField type="text" name="fName" placeholder="Enter you name"
                                    value={fistName} upDatedValue={this.registerFirstName} />
                                <InputField type="text" name="lName" placeholder="last name"
                                    value={lastName} upDatedValue={this.registerLastName} />

                            </div>
                            <div className="register-email">
                                <label>Email</label>
                                <InputField type="email" name="email" placeholder="email"
                                    value={email} upDatedValue={this.registerEmail} />
                            </div>
                            <div className="register-password">
                                <label>Password</label>
                                <InputField type="password" name="password" placeholder="password"
                                    value={password} upDatedValue={this.registerPassword} />
                            </div>
                            <div className="register-password">
                                <label>Phone No</label>
                                <InputField type="tel" name="number" placeholder="number"
                                    value={phoneNumber} upDatedValue={this.registerPhoneNo} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" onClick={this.resetHandler} className="btn btn-primary">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration