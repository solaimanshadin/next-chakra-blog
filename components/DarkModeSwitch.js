import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <IconButton 
            area-label="Toggle Dark Switch" 
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon /> } 
        />
    )
}

export default DarkModeSwitch;