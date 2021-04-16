import Head from 'next/head';
import React from 'react';
import Container from '../components/Container';
import { Flex, Heading, Stack, Text } from '@chakra-ui/layout'

const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog - Solaiman Shadin</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent='center'
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    px={2}
                >
                    <Flex
                        direction="column"
                        justifyContent="flex-start"
                        size="2xl"
                    >
                        <Heading
                            letterSpacing="tight"
                            mb={2}
                            as="h1"

                        >
                            Blog
                        </Heading>
                    </Flex>
                </Stack>
            </Container>
        </>
    );
};

export default Blog;

export const getStaticProps = async () => {
    // TODO fetch blog posts

    return {
        props: { posts }
    }

}