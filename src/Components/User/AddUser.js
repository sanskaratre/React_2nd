import React, {useState, useRef} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErroeModal";
import Wrapper from "../../Helper/Wrapper";


const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef =useRef();

    const [error, setError] = useState('');

    const onSumbitHandler = (event) => {
        event.preventDefault();
        const storedName = nameInputRef.current.value;
        const storedAge = ageInputRef.current.value;
        const storedCollage = collegeInputRef.current.value;

        if(storedName.trim().length === 0 || storedAge.trim().length === 0 || storedCollage.trim().length === 0 ) {
            setError({title:"Invalid Input", massage:"Please Enter a valid Name, Age and college-name (Non-Empty values)."});
            return;
        }
        if(+storedAge < 1) {
            setError({title:"Invalid Age", massage:"Please valid Age (Greater then 0)."});
            return;
        }
        props.onAddUser(storedName, storedAge, storedCollage);
        nameInputRef.current.value ='';
        ageInputRef.current.value ='';
        collegeInputRef.current.value='';
        
    };

    

    const errorHandler = () => {
        setError(null);
    };

    return(
        <Wrapper>
        {error && <ErrorModal title= {error.title} massage={error.massage} onModal={errorHandler} />}
            <Card className = {classes.input}>
                <form onSubmit={onSumbitHandler}>
                     <label htmlFor="username">Username</label>
                     <input id="username" type='text' ref={nameInputRef} />
                     <label htmlFor="age">Age(Years)</label>
                     <input id="age" type='number' ref={ageInputRef}/>
                     <label htmlFor="college">College-Name</label>
                     <input id="college" type='text' ref={collegeInputRef}/>
                     <Button type="submit">Add User</Button>
                </form>
             </Card>
        </Wrapper>
        
    );
}
export default AddUser;