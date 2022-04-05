import React from "react";
import ReactDOM from 'react-dom';
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onModal}/>
};

const ModalOverlay = (props) => {
    return (<Card className = {classes.modal}>
    <header className={classes.header}>
        <h2> {props.title} </h2>
    </header>
    <div className={classes.content}>
        <p> {props.massage} </p>
    </div>

    <footer className={classes.actions}>
        <Button onClick={props.onModal}>Okay</Button>
    </footer>
</Card>
    )
};


const ErrorModal = (props) => {
    return (
    <React.Fragment>
        {ReactDOM.createPortal (<Backdrop onModal={props.onModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal (<ModalOverlay title={props.title} massage={props.massage} onModal={props.onModal}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
    )
};

export default ErrorModal;