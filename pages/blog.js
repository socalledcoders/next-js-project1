import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Blogs.module.css';
import fs from 'fs';

const blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <main className={styles.container}>
      {blogs.map((blog) => {
        return (
          <Link key={blog.slug} href={`/blogpost/${blog.slug}`}>
            <div className={styles.blog}>
              <h3 className={styles.h3}>{blog.title}</h3>
              <p className={styles.p}>{blog.metadesc.substring(0, 140)}...</p>
              <button type='submit' className={styles.btn}>
                Read More
              </button>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

// export async function getServerSideProps(context) {
//   const data = await fetch('http://localhost:3000/api/blogs');
//   const allBlogs = await data.json();
//   return {
//     props: { allBlogs },
//   };
// }

export async function getStaticProps() {
  const files = await fs.promises.readdir('blogdata');
  const allBlogs = [];
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    try {
      const blogData = await fs.promises.readFile(`blogdata/${file}`, 'utf-8');
      allBlogs.push(JSON.parse(blogData));
    } catch (err) {
      console.log('error in reading blog data', err);
    }
  }
  return {
    props: { allBlogs },
  };
}

export default blogs;
