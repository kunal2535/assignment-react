import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
const NotFound = () => {
  return (
    <div className={styles['page-content']}>
      <h1>Page Not Found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
