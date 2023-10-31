import rehypeFormat from "rehype-format";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";

export default async function md2html(md: string): Promise<string> {
  // convert markdown to html
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(md);

  // highlight code block
  const file = await rehype()
    .data("settings", { fragment: true })
    .use(rehypeHighlight)
    .process(content.value);

  // return html
  return file.toString();
}
