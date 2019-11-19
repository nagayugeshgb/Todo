import React from 'react';
import  Navbar  from './Navbar';
import  TodoForm  from './TodoForm';
import  TodoList  from './TodoList';
import axios from "axios";

/*export const App=()=>{
    return(
        <div>
      <Navbar/>
      <TodoForm/>
      <TodoList items={list}/>
      </div>
    );
    };*/
    class App extends React.Component {
       state={
        list:[]
       };
       componentDidMount(){
           axios.get("http://localhost:8080/todos").then(result=>{
               this.setState({
                   list:result.data
               })
           })
       }
       addItem=item=>{
this.setState({
    list:[...this.state.list,item]
})
       };

       handleDelete=id=>{
      // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) //es6
     axios.delete("http://localhost:8080/todos"+id)
 
      .then(sucess=>{
           this.setState({
               list:this.state.list.filter(i =>i.id!==id)
           })
       })
       //       axios.delete("https://jsonplaceholder.typicode.com/todos"+id) es5



        // this.setState({
         //   list:this.state.list.filter(i=>i.title!==item)
       // });
       };
       
        render() { 
            return ( 
                <div >
                <Navbar/>
                <TodoForm addItem={this.addItem}/>
                <TodoList items={this.state.list} handleDelete={this.handleDelete}/>
                </div>
             
             );
        }
    
    }
    export default App;
