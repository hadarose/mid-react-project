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

    render()
    {
        let users = this.state.users;
        
        if(this.state.searchValue)
        {
            users = this.state.users.filter(user => user.name.includes(this.state.searchValue))
        }

        users = users.map((user) =>
            {
               return <User key = {user.id} user = {user} todos = {user.todos} />
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

