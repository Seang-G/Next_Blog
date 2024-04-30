import { remark } from "remark";
import remarkGfm from "remark-gfm";

export default async function mdToHtml(md: string){
  const result = await remark().use(remarkGfm).process(md);
  return result.toString();
}