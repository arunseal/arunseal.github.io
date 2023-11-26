import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getMarkDown(mdPath: string) {
  // Get the path to the markdown file
  const filePath = path.join(process.cwd(), mdPath);

  // Read the file content
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and content from the markdown file
  const { content, data } = matter(fileContent);

  return { content, data };
}
