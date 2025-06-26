import fs from 'fs';
import { useState } from 'react';
import styles from '../../styles/BlogPost.module.css';

// step 1: populate the blog post data
const blogPost = (props) => {
  function createMarkup(content) {
    return { __html: content };
  }
  const [blog, setBlog] = useState(props.blog);
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.h1}>{blog && blog.title}</h1>
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
      </main>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const slug = context.query.slug;
//   let blog;
//   try {
//     const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
//     blog = await data.json();
//   } catch (err) {
//     console.log('error in getting the blog');
//   }
//   return {
//     props: { blog },
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-react' } },
      { params: { slug: 'how-to-learn-nodejs' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const blog = await fs.promises.readFile(
    `blogdata/${context.params.slug}.json`,
    'utf-8'
  );

  return {
    props: { blog: JSON.parse(blog) },
  };
}

export default blogPost;
