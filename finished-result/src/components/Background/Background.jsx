import React from 'react';

import styles from './Background.module.css';

const cubes = [...Array(10)];

const Background = () => (
    <div className={styles.area}>
        <ul className={styles.cubes}>
            {cubes.map((cube, i) => (
                <li key={i}></li>
            ))}
        </ul>
    </div>
);

export default Background;
