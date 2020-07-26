import React, { Component } from 'react';

class InputField extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ""
        }
    }
    onChangeHandler = (event) => {
        const { upDatedValue } = this.props
        const newValue = event.target.value
        this.setState({
            inputValue: newValue

        })
        upDatedValue(newValue)
    }
    render() {
        const { name, placeholder, type } = this.props
        const { inputValue } = this.state
        return (
            <>
                <input type={type} name={name} placeholder={placeholder}
                    onChange={this.onChangeHandler}
                    value={inputValue} />
            </>
        )
    }
}
export default InputField