import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react";
import customTheme from '../styles/theme'
import { Global, css } from "@emotion/react"

const GlobalStyle = ({children}) => {
  const {colorMode} = useColorMode()
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
         
          #__next {
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
        {children}
    </>
  )
}


function MyApp({ Component, pageProps }) {

  return <>
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  </>
}

export default MyApp
