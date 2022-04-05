import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErroeModal";

const AddUser = (props) => {
   const [enteredUsername, setEnteredUsername] = useState('');
   const [enteredAge, setEnteredAge] = useState(''); 
   const [error, setError] = useState('');

    const onSumbitHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({title:"Invalid Input", massage:"Please Enter a valid Name and Age (Non-Empty values)."});
            return;
        }
        if(+enteredAge < 1) {
            setError({title:"Invalid Age", massage:"Please valid Age (Greater then 0)."});
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const addUsername = (event) => {
        setEnteredUsername(event.target.value);
    };

    const addAge = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return(
        <div>
        {error && <ErrorModal title= {error.title} massage={error.massage} onModal={errorHandler} />}
            <Card className = {classes.input}>
                <form onSubmit={onSumbitHandler}>
                     <label htmlFor="username">Username</label>
                     <input id="username" type='text' value={enteredUsername} onChange={addUsername} />
                     <label htmlFor="age">Age(Years)</label>
                     <input id="age" type='text' value={enteredAge} onChange={addAge}/>
                     <Button type="submit">Add User</Button>
                </form>
             </Card>
        </div>
        
    );
}
export default AddUser;