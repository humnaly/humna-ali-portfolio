import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const read = name => fs.readFileSync(path.join(root, name), "utf8");
const page = read("app/page.tsx");
const header = read("app/components/Header.tsx");
const footer = read("app/components/Footer.tsx");
const expectedIds = ["home", "services", "work", "about", "skills", "experience", "contact"];
for (const id of expectedIds) assert(page.includes(`id="${id}"`), `Missing Section: ${id}`);
assert.equal((page.match(/<details\b/g) ?? []).length, 10, "Expandable Section Count Changed");
for (const link of [
  "https://www.linkedin.com/in/humna-ali-081a401a6/",
  "https://www.upwork.com/freelancers/~010c3e5db3c37f5319",
  "https://www.behance.net/ihzdesigner",
]) assert([page, header, footer].some(text => text.includes(link)), `Missing Profile Link: ${link}`);
for (const image of ["workspace.png", "creative.png"]) {
  assert(fs.statSync(path.join(root, "public/images", image)).size > 1000, `Missing Image: ${image}`);
}
console.log("Content Check Passed: 7 Sections, 10 Expandable Sections, 3 Profile Links, 2 Images.");
