import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Main.module.css";
const Blog = () => {
  const { postId } = useParams();

  return (
    <div className={styles["page-content"]}>
      <h1>Blog Post {postId}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
        excepturi minima animi assumenda tenetur veritatis numquam impedit,
        pariatur suscipit distinctio voluptas obcaecati, sunt dolorem aut?
        Earum, quas molestiae. Delectus rerum exercitationem reiciendis velit?
        Commodi voluptas ad soluta totam. Error adipisci repellat accusantium
        quos amet omnis libero reiciendis sequi ex officiis.
      </p>
    </div>
  );
};

export default Blog;
