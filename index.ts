import axios from "axios";

interface IUser {
  id: number;
  title: string;
  completed: boolean;
}

const logView = (userID: number, userTitle: string, todoStatus: boolean) => {
  console.log(`
  User ID = ${userID} 
  User Title = ${userTitle} 
  Todo Status = ${todoStatus} 
`);
};

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  const user = res.data as IUser;
  const userID = user.id;
  const userTitle = user.title;
  const todoStatus = user.completed;
  logView(userID, userTitle, todoStatus);
});
