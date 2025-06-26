import fs from 'fs';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const files = await fs.promises.readdir('contactdata');
    const data = await fs.promises.writeFile(
      `contactdata/${files.length + 1}.json`,
      req.body
    );
    res.status(200).json('Contact saved successfully');
  } else {
    res.status(200).json(['allblogs']);
  }
}
