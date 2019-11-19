import React from 'react';
/*export const TodoForm = () => {
    return (<div>
        <input type="text" className="form-control"></input>
        <button className="btn btn-block btn-primary">Add Todo</button>
    </div>);
};*/
class TodoForm extends React.Component {
    state={ input:" "}
     handleInputChange=event=>{
         this.setState({
        input:event.target.value
         })
     }
     handleSubmit=item=>{
         this.props.addItem(this.state.input)
         this.setState({ input : " "})
        }

    render() { 
        return ( 
            <div>
        <input type="text" className="form-control" onChange={this.handleInputChange}
        value={this.state.input}></input>
        <button className="btn btn-block btn-primary" onClick={this.handleSubmit}>Add Todo</button>
    </div>
         );
    }
}
 
export default TodoForm;