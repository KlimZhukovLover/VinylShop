import styles from './Card.module.scss';
import React from 'react';


function Card(props) {

    const [isAdded, setIsAdded] = React.useState();

    const handlePlus = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <p className={styles.image}><img width={150} height={150} src={props.img} alt="vinyl" /></p>
            <div className={styles.text}> {props.author} </div>
            <p>{props.name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.cardPrice}>
                    <span>Price: </span>
                    <b>{props.price} $</b>
                </div>
                    <img onClick={handlePlus} className={styles.plus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;
