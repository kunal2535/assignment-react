import React from "react";
import { useParams } from "react-router-dom";
import styles from './Main.module.css';
const Blog = () => {
  const { postId } = useParams();

  return (
    <div className={styles['page-content']}>
      <h1>Blog Post {postId}</h1>
    </div>
  );
};

export default Blog;
