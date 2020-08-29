import React, {Component} from 'react';
import utils from "./Utils";
import User from "./User_Child";

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
        this.setState({users: usersArr});
    }

    render()
    {
        let users = this.state.users.map((user) =>
        {
           return <User key = {user.id} user = {user} todos = {user.todos} />
        })

        return (
            <div>
                Parent Component
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}

export default Parent

