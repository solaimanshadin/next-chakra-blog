import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/Container'
import DarkModeSwitch from '../components/DarkModeSwitch'

export default function Home() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Next Chakra Blog</title>
      </Head>
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
        >
          <Heading mb={2}>Hi, I'm Solaiman Shadin</Heading>
          <Text color={colorSecondary[colorMode]}>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.

</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
