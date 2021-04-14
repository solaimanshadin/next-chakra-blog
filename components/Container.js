import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex } from '@chakra-ui/layout';
import styled  from '@emotion/styled';
import NextLink from 'next/link';
import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';

const Container = ({children}) => {
    const {colorMode} = useColorMode();
    const bgColor = {
        light: "white",
        dark: "#171717"
    }

    const color = {
        light: "black",
        dark: "white"
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300'
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10,
        top: 0;
        backdrop-filter: saturated(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `;

    return (
        <>
            <StickyNav
                as="nav"
                direction="row"
                justify="space-between"
                maxWidth='800px'
                minW="356px"
                px={[2,6,6]}
                py={2}
                pt={10}
                mb={0,0,8}
                mx="auto"
                bg={bgColor[colorMode]}
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode]}}>Home</Button>
                    </NextLink>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode]}}>Blog</Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />

            </StickyNav>
            <Flex
                as="main"
                justify="center"
                direction="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0,4,4]}
                mt={[4,8,8]}
            >
                {children}
            </Flex>
        </>
    );
};

export default Container;