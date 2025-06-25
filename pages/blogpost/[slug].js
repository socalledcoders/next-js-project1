import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/BlogPost.module.css';

// step 1: populate the blog post data
const blogPost = (props) => {
  // const router = useRouter();

  // const { slug } = router.query;

  const [blog, setBlog] = useState(props.blog);

  return (
    <main className={styles.container}>
      <h1>{blog && blog.title}</h1>
      <p>{blog && blog.content}</p>
    </main>
  );
};

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  let blog;
  try {
    const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
    blog = await data.json();
  } catch (err) {
    console.log('error in getting the blog');
  }
  return {
    props: { blog },
  };
}

export default blogPost;
