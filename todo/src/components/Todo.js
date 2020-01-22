import React, { Component } from 'react'
class Todo extends Component {
    state = {
        text: '',
        listItems: []
    }
    handleTextChange = (e) => {
        this.setState({text: e.target.value})
    }
    handleClicked = () => {
        const items = [ ...this.state.listItems]
        items.push(this.state.text)
        this.setState({ listItems: items, text: ''})
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleTextChange} value={this.state.text}/>
                <button onClick={this.handleClicked}>add task</button>
                {
                    this.state.listItems.map(value =>{
                    return <p>{value}</p>
                    }) 
                }
            </div>
        )
    }
}
export default Todo