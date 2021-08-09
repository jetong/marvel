import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.card_wrapper}>
            <p className={classes.red}>Name: {props.name}</p>
            <p>ID: {props.id}</p>
            <img className={classes.img} src={props.img} />
        </div>
    );
};

export default Card;