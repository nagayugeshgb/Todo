import React from 'react';

/*export const TodoList = (props) => {
    return (<div>
    
        <ul className="list-group">
          {props.items.map(i=>{
              return(
                  <li key={i} className="list-group-item">{i}</li>
              )
          })
          }
          <button>Delete</button>
             </ul>
    </div>);
};*/

class TodoList extends React.Component {
    markComplete=e=>{
        e.target.style.textDecoration ="line-through";
    }
    
    render() { 
        return (
            <div>
    
            <ul className="list-group">  
              {this.props.items.map(i=>{
            return(
                      <li key={i.id} className="list-group-item">
                      <span onClick={this.markComplete}>{i.title}</span>
                     <button type="button" className="float-right" 
                     onClick={this.props.handleDelete.bind(this,i.id)}>Delete</button>
                      </li>
                  )
              })
              }


                 </ul>
        </div>

          );
    }
}
 
export default TodoList;

