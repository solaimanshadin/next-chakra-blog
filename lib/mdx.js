import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import renderString from 'next-mdx-remote/render-to-string';

import MDXComponent from '../components/MDXComponent';
import { deepStrictEqual } from 'assert';


const root = process.cwd();


export const getFiles = async (type) => {
    return fs.readdirSync(path.join(root, 'data', type))
}

export const getFileBySlug = async (type, slug) => {
    const source = slug ? fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf-8')
        : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf-8');
    
    const { data, context } = matter(source);
    const mdxSource = await renderString(context, {
        components: MDXComponent
    })

    return {
        mdxSource,
        frontMatter: {
            wordCount: context.split(/\s+/gu).length,
            readingTime: readingTime(context),
            slug: slug || null,
            ...data
        }
    }

}