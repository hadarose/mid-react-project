import React, {Component} from 'react';
import utils from "./Utils";
import User from "./User_Child";
import "./Proj.css";
import AddUserComp from "./AddUserComp";

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
        this.setState({users: usersArr, searchValue: "", isAddUser: false});
    }

    getSearchData = (e) =>
    {
        this.setState({searchValue: e.target.value})
    }

    saveData = (obj) =>
    {
       let index = this.state.users.findIndex(item => item.id === obj.id);
       let newUsersArr = this.state.users;
       newUsersArr[index].name = obj.newName;
       newUsersArr[index].email = obj.newEmail;
       newUsersArr[index].street = obj.newStreet;
       newUsersArr[index].city = obj.newCity;
       newUsersArr[index].zipcode = obj.newZipcode;

       this.setState({users: newUsersArr})
    }

    deleteUser = (id) =>
    {
       let index = this.state.users.findIndex(item => item.id === id);
       let newUsersArr = this.state.users;
        newUsersArr.splice(index, 1);
       
       this.setState({users: newUsersArr})
    }

    markComplete = (id, taskId) =>
    {
       let userIndex = this.state.users.findIndex(item => item.id === id);
       let newUsersArr = this.state.users;
       let taskIndex = newUsersArr[userIndex].todos.findIndex(item => item.id === taskId);
       newUsersArr[userIndex].todos[taskIndex].completed = true;
       this.setState({users: newUsersArr});
    }

    addTask = (id, title) =>
    {
       let userIndex = this.state.users.findIndex(item => item.id === id);
       let newUsersArr = this.state.users;

       // Getting last task Id
       let userTasks = newUsersArr[userIndex].todos;
       let lastTaskId = userTasks[userTasks.length - 1].id;

       // Insert a new Todo
       newUsersArr[userIndex].todos.push({userId: id, id: lastTaskId + 1, title: title, completed: false});

       this.setState({users: newUsersArr});
    }

    addPost = (id, title, body) =>
    {
       let userIndex = this.state.users.findIndex(item => item.id === id);
       let newUsersArr = this.state.users;

       // Getting last post Id
       let userPosts = newUsersArr[userIndex].posts;
       let lastPostId = userPosts[userPosts.length - 1].id;

       // Insert a new Todo
       newUsersArr[userIndex].posts.push({userId: id, id: lastPostId + 1, title: title, body: body});

       this.setState({users: newUsersArr});
    }

    addUser = () =>
    {
        this.setState({isAddUser: !this.state.isAddUser})
    }

    getNewUser = (name, email) =>
    {
        let newUsersArr = this.state.users;
 
        // Getting last UserId
        let nextUserId = newUsersArr[newUsersArr.length - 1].id + 1;
 
        
        // Insert a new user
        let newUser = {
                    "id": nextUserId,
                    "name": name,
                    "email": email,
                    "address": {"street": "", "suite": "", "city": "", "zipcode": "", 
                    "geo": {
                        "lat": "",
                        "lng": ""}},
                    "todos": [],
                    "posts": []                     
        }
        newUsersArr.push(newUser);
 
        this.setState({users: newUsersArr});
    }


    render()
    {
        let users = this.state.users;
        let addNewUser;
        if(this.state.searchValue)
        {
            users = this.state.users.filter(user => 
                    user.name.includes(this.state.searchValue) || user.email.includes(this.state.searchValue))
        }

        if(this.state.isAddUser)
        {
            addNewUser = <AddUserComp callbackAddUser = {(name, email) => this.getNewUser(name, email)} />
        }

        users = users.map((user) =>
            {
                return <User key = {user.id}    user = {user} 
                                                todos = {user.todos}
                                                posts = {user.posts} 
                                                callbackSave = {obj => this.saveData(obj)} 
                                                callbackDelete = {id => this.deleteUser(id)}
                                                callbackComplete = {(id, taskId) => this.markComplete(id, taskId)}
                                                callbackAddTask = {(id, title) => this.addTask(id, title)}
                                                callbackAddPost = {(id, title, body) => this.addPost(id, title, body)}/>
            })

        return (
            <div>
                <div>
                    <h1>Hadar's first React Project</h1>
                    Search <input type = "text" onChange = {this.getSearchData} />
                    &nbsp; &nbsp;
                    <input className = "yellowButton" type = "button" value = "Add" onClick = {this.addUser} />
                </div>
                <div style = { {float: "right"} }>
                    {addNewUser}
                </div>
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}

export default Parent

