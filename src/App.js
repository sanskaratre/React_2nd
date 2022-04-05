import React,{useState} from 'react';
import './App.css';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString}];
    });
  };
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users = {usersList}/>
    </div>
  );
}

export default App;
