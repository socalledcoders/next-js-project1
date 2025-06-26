import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Blogs.module.css';
import fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
const blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(0);
  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/blogs?count=${count + 2}`
    );
    const data = await res.json();
    setCount(count + 2);
    setBlogs(data);
  };

  return (
    <main className={styles.container}>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.totalCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
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
      </InfiniteScroll>
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
  const totalCount = files.length;
  const allBlogs = [];
  for (let index = 0; index < 4; index++) {
    const file = files[index];
    try {
      const blogData = await fs.promises.readFile(`blogdata/${file}`, 'utf-8');
      allBlogs.push(JSON.parse(blogData));
    } catch (err) {
      console.log('error in reading blog data', err);
    }
  }
  return {
    props: { allBlogs, totalCount },
  };
}

export default blogs;
