import React from 'react';
import styles from '../styles/About.module.css';

const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}> About Us </h1>
      <div className={styles.section}>
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          possimus sapiente dignissimos eum natus, vero, atque quia quae ad
          incidunt nisi quas, libero quo nihil amet nam in. Harum, inventore!
        </p>
      </div>
      <div className={styles.section}>
        <h2>Services Offered</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum
          totam ipsam, laborum alias earum quaerat fugiat velit. Corrupti,
          nihil. Our Services are:
        </p>
        <ul>
          <li>Service1</li>
          <li>Service1</li>
          <li>Service1</li>
          <li>Service1</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Contact Us </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nam
          possimus, architecto ad sint recusandae tempore eligendi doloribus
          maiores, ut dicta! Architecto dolor dolorem quam, ducimus et
          necessitatibus. Qui, nemo.
        </p>
      </div>
    </div>
  );
};

export default about;
