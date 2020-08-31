import React, {Component} from 'react';
import utils from "./Utils";
import User from "./User_Child";
import "./Proj.css";

class Parent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {users: []}
    };

    async componentDidMount()
    {
        let usersArr = await utils.getAllUsers();
        this.setState({users: usersArr, searchValue: ""});
    }

    getSearchData = (e) =>
    {
        this.setState({searchValue: e.target.value})
    }

    saveData = (obj) =>
    {
       let index = this.state.users.findIndex(item => item.id == obj.id);
       let newUsersArr = this.state.users;
       newUsersArr[index].name = obj.newName;
       newUsersArr[index].email = obj.newEmail;
       
       this.setState({users: newUsersArr})
    }

    deleteUser = (id) =>
    {
       let index = this.state.users.findIndex(item => item.id == id);
       let newUsersArr = this.state.users;
        newUsersArr.splice(index, 1);
       
       this.setState({users: newUsersArr})
    }

    render()
    {
        let users = this.state.users;
        if(this.state.searchValue)
        {
            users = this.state.users.filter(user => 
                    user.name.includes(this.state.searchValue) || user.email.includes(this.state.searchValue))
        }

        users = users.map((user) =>
            {
                return <User key = {user.id} user = {user} todos = {user.todos} 
                             callbackSave = {obj => this.saveData(obj)} callbackDelete = {id => this.deleteUser(id)}/>
            })

        return (
            <div>
                Parent Component <br/>
                Search <input type = "text" onChange = {this.getSearchData} /> &nbsp; &nbsp;
                <input className = "yellowButton" type = "button" value = "Add" />
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}

export default Parent

