import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import styles from './Card.module.css';

const Card = ({ card, onCardClick }) => {
    const onClick = () => {
        if (card.isFound || card.isShown) return;
        onCardClick(card.uniqueId);
    };

    return (
        <div className={`${styles.container}`} onClick={onClick}>
            <div className={`${styles.card} ${card.isShown ? styles.flipped : ''}`}>
                <div className={`${styles.front} ${card.isFound ? styles.found : ''}`}></div>
                <div className={styles.back}>
                    <Image url={card.url} />
                </div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    card: PropTypes.shape({
        url: PropTypes.string.isRequired,
        isFound: PropTypes.bool.isRequired,
        isShown: PropTypes.bool.isRequired,
        uniqueId: PropTypes.number.isRequired,
    }),
    onCardClick: PropTypes.func.isRequired,
};
