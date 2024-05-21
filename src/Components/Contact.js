import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Main.module.css';

const Contact = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles['page-content']}>
      <h1>Contact</h1>
      <button onClick={navigateToHome}>Go to Home</button>
    </div>
  );
};

export default Contact;
