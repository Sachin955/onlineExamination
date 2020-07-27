import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: props.value
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

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                inputValue: nextProps.value
            })
            return true
        }
        return false
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