import fs from 'fs';

export default async function handler(req, res) {
  const count = req.query.count;
  let files = await fs.promises.readdir('blogdata');
  files = files.slice(0, count);
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
