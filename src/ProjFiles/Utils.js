import axios from "axios";

const getAllUsers = async () =>
{
    let usersArr =[];
    // Getting Name & email from USERS
    let respUsers = await axios.get("https://jsonplaceholder.typicode.com/users/")
    let allRestUsers = respUsers.data;

    allRestUsers.map(item =>
        {
            return usersArr.push({id: item.id, name: item.name, email: item.email, address: item.address})
        })

    // Getting data from TODOS
    let respTodos = await axios.get("https://jsonplaceholder.typicode.com/todos")
    let tasksArr = respTodos.data;
    
    usersArr.map(item =>
        {
            return item.todos = tasksArr.filter(x => x.userId === item.id).slice(0,3);        
        })


    // Getting data from POSTS
    let respPosts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let allPosts = respPosts.data;

    usersArr.map(item =>
        {
            return item.posts = allPosts.filter(x => x.userId === item.id).slice(0,2);        
        })
;
   
   return (usersArr);
}


export default {getAllUsers};