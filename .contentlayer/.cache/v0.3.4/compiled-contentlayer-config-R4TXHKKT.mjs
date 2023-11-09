// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import path from "path";
import readingTime from "reading-time";
import {
  extractTocHeadings,
  remarkCodeTitles,
  remarkExtractFrontmatter,
  remarkImgToJsx
} from "pliny/mdx-plugins/index.js";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCitation from "rehype-citation";
import rehypeKatex from "rehype-katex";
import rehypePresetMinify from "rehype-preset-minify";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
var root = process.cwd();
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
  },
  path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  filePath: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath
  },
  toc: { type: "string", resolve: (doc) => extractTocHeadings(doc.body.raw) }
};
var User = defineDocumentType(() => ({
  name: "User",
  filePathPattern: "user/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string" },
    occupation: { type: "string" },
    company: { type: "string" },
    email: { type: "string" },
    twitter: { type: "string" },
    linkedin: { type: "string" },
    github: { type: "string" },
    layout: { type: "string" }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/data",
  documentTypes: [User],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, "data") }],
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
      rehypePresetMinify
    ]
  }
});
export {
  User,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-R4TXHKKT.mjs.map
