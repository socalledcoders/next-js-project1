import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Blogs.module.css';

const blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <main className={styles.container}>
      <h2>Popular Blogs</h2>
      {blogs.map((blog) => {
        return (
          <Link key={blog.slug} href={`/blogpost/${blog.slug}`}>
            <div className={styles.blog}>
              <h3>{blog.title}</h3>
              <p>{blog.content.substring(0, 140)}...Read More</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export async function getServerSideProps(context) {
  const data = await fetch('http://localhost:3000/api/blogs');
  const allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default blogs;
