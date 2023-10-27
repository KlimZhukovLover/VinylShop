import styles from './Card.module.scss';
import React from 'react';


function Card({onFavorite, onClickPlus , img, name, price, author}) {

    const [isAdded, setIsAdded] = React.useState();

    const handlePlus = () => {
        onClickPlus({author, name, price, img });
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite} onClick={onFavorite}>
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <p className={styles.image}><img width={150} height={150} src={img} alt="vinyl" /></p>
            <div className={styles.text}> {author} </div>
            <p>{name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.cardPrice}>
                    <span>Price: </span>
                    <b>{price} $</b>
                </div>
                    <img onClick={handlePlus} className={styles.plus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;
