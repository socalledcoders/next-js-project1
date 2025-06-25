import fs from 'fs';

export default async function handler(req, res) {
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
  res.status(200).json(allBlogs);
}
