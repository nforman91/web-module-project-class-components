import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
            this.state = {
                input: ''
            }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleClick = e => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    
                    type='text' 
                    name='todo'
                    onChange={this.handleChanges} 
                    placeholder='...todo'
                    value={this.state.input}
                />
                <button 
                    onClick={this.handleClick}
                >Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;