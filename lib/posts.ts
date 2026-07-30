import fs from "node:fs";import path from "node:path";
export type Post={slug:string;title:string;date:string;excerpt:string;content:string};
const directory=path.join(process.cwd(),"posts");
function parse(file:string):Post{const raw=fs.readFileSync(path.join(directory,file),"utf8");const [,front="",content=raw]=raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)||[];const data=Object.fromEntries(front.split("\n").map(line=>{const i=line.indexOf(":");return i<0?[line,""]:[line.slice(0,i),line.slice(i+1).trim().replace(/^['"]|['"]$/g,"")]}));return{slug:file.replace(/\.mdx?$/,"") ,title:data.title||file,date:data.date||"",excerpt:data.excerpt||"",content}}
export function getPosts(){if(!fs.existsSync(directory))return[];return fs.readdirSync(directory).filter(f=>/\.mdx?$/.test(f)).map(parse).sort((a,b)=>b.date.localeCompare(a.date))}
export function getPost(slug:string){return getPosts().find(p=>p.slug===slug)}
export function markdownToHtml(md:string){return md.split(/\n\n+/).map(block=>{const safe=block.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(safe.startsWith("## "))return `<h2>${safe.slice(3)}</h2>`;if(safe.startsWith("# "))return `<h1>${safe.slice(2)}</h1>`;return `<p>${safe.replace(/\n/g,"<br/>")}</p>`}).join("")}
