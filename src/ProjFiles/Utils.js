import axios from "axios";

const getAllUsers = async () =>
{
    let usersArr =[];
    // Getting Name & email from USERS
    let respUsers = await axios.get("https://jsonplaceholder.typicode.com/users/")
    let allRestUsers = respUsers.data;

    allRestUsers.map(item =>
        {
            return usersArr.push({id: item.id, name: item.name, email: item.email})
        })

    // Getting data from TODOS
    let respTodos = await axios.get("https://jsonplaceholder.typicode.com/todos")
    let tasksArr = respTodos.data;
    
    usersArr.map(item =>
        {
            return item.todos = tasksArr.filter(x => x.userId == item.id);
        })

/*
    // Getting data from POSTS
    let respPosts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let allPosts = respPosts.data;

    let userPosts = allPosts.filter(item => item.userId == id);
    let [firstPost] = userPosts;*/

   usersArr[0].todos = [{userId: 1, id: 1, title: "delectus aut autem", completed: true}]
    return (usersArr);
}


export default {getAllUsers};