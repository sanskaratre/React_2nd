import React,{useState, Fragment} from 'react';
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
    <Fragment>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users = {usersList}/>
    </Fragment>
  );
}

export default App;
