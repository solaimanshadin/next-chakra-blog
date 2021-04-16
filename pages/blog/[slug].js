import hydrate from 'next-mdx-remote/hydrate';
import React from 'react';
import { getStaticProps } from '../../layout/blog';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import MDXComponent from '../../components/MDXComponent';
import BlogLayout from '../../components/BlogLayout';

const Blog = ({mdxSource, frontMatter}) => {
    const content = hydrate(mdxSource, {
        components: MDXComponent
    })
    return (
        <BlogLayout frontMatter={frontMatter}>
            {content}
        </BlogLayout>
    );
};

export const getStaticPaths = async () => {
    const posts = await getFiles('blog');

    return {
        paths : posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }

}

export const getStaticProps = async ({params}) => {
    const post = await getFileBySlug('blog', params.slug);

    return { props: post}
}

export default Blog;