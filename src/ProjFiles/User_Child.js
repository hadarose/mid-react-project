import React, {Component} from 'react';
import "./Proj.css";
import Address from "./AddressComp";
import TodosWrap from "./TodosWrapperComp";
import PostsWrap from "./PostsWrapperComp";

class User extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isOtherData: false, isSelected: false,    newName: this.props.user.name, 
                                                                newEmail: this.props.user.email, 
                                                                newStreet: this.props.user.address.street,
                                                                newCity: this.props.user.address.city,
                                                                newZipcode: this.props.user.address.zipcode}
    }

    showOtherData = () =>
    {
        this.setState({isOtherData: !this.state.isOtherData});
    }

    getInputName = (e) =>
    {
        this.setState({newName: e.target.value})
    }

    getInputEmail = (e) =>
    {
        this.setState({newEmail: e.target.value})
    }

    getAddress = (street, city, zipcode) =>
    {
        this.setState({newStreet: street, newCity: city, newZipcode: zipcode})
        this.sendData();
    }

    sendData = () =>
    {
        
        let obj =   {id: this.props.user.id, newName: this.state.newName, newEmail: this.state.newEmail,
                    newStreet: this.state.newStreet, newCity: this.state.newCity, newZipcode: this.state.newZipcode}
        this.props.callbackSave(obj);
    }

    deleteUser = () => 
    {
        this.props.callbackDelete(this.props.user.id);
    }

    showTodos = () =>
    {
        this.setState({isSelected: !this.state.isSelected})
    }

    render()
    {
        let styleName = this.props.user.todos.some(item => !item.completed) ? "redBorderComp" : "greenBorderComp";
        let addressComp;
        let todosComp;
        let postsComp;

        if (this.state.isOtherData)
        {
            addressComp = <Address  address = {this.props.user.address} 
                          callbackGetAddress = {(street, city, zipcode) => this.getAddress(street, city, zipcode)} />
        }

        if(this.state.isSelected)
        {
            styleName = styleName + " selected";
            todosComp = <TodosWrap  id = {this.props.user.id} 
                                    todos = {this.props.user.todos} 
                                    callbackComplete = {this.props.callbackComplete}
                                    callbackAddTodo = {this.props.callbackAddTask}
                                     />
            postsComp = <PostsWrap  id = {this.props.user.id} 
                                    posts = {this.props.user.posts} 
                                    
                                    callbackAddNewPost = {this.props.callbackAddPost} /> 
        }

        return ( 
        <div >
            <div className = {styleName} onClick = {this.showTodos}>
                ID: &nbsp; {this.props.user.id}<br></br>
                Name: <input className = "inputText" type = "text" defaultValue = {this.props.user.name} onChange = {this.getInputName} />
                <br/>

                Email: <input className = "inputText" type = "text"  defaultValue = {this.props.user.email} onChange = {this.getInputEmail} /> 
                <br></br>
                <br></br>

                <input type = "button" className = "grayButton" value = "Other Data" onClick = {this.showOtherData}/>
                
                  {addressComp}
                
                &nbsp; &nbsp;
                <input type = "button" className = "yellowButton" value = "Update" onClick = {this.sendData} />
                &nbsp;&nbsp;
                <input type = "button" className = "yellowButton" value = "Delete" onClick = {this.deleteUser} />
             
            </div>
            <div style = {{marginLeft: "350px", display: "flex", flexDirection: "column"}}>
                <div>{todosComp}</div>
                <div>{postsComp}</div>
            </div>
              
        </div>
        )
    }
}

export default User;