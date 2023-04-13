import { Container, Text , Box, Button } from '@chakra-ui/react'

const Header = () => {
    return (
        <Container
            display={'flex'}
            flexDir={'column'}
            placeItems={'center'}
            placeContent={'center'}
            minW={'fit-content'}
            padding={0}
            height={'100%'}
        >
            <Box>
                <Text fontWeight={'100'} color={'white'} fontSize='3xl'>DOMINA EL TERRENO</Text>
            </Box>
            <Box
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row' }}
                color={{ base: 'white', md: 'black' }}
                alignItems={'center'}
            >
                <Button 
                    width={{ base: '100%', md: '50%' }}
                    _hover={{backgroundColor: 'transparent'}}
                    margin={{ base: '1rem 4rem', md: '1rem 1rem' }} 
                    borderRadius={0} 
                    color={'white'} 
                    variant='outline'
                >
                    VER DETALLES
                </Button>
                <Button 
                    width={{ base: '100%', md: '50%' }}
                    margin={'1rem'} 
                    borderRadius={0}
                    variant={{ base: 'outline', md: 'solid' }}
                    _hover={{ base: {backgroundColor: 'transparent'}, md: {backgroundColor: 'white'} }}
                >
                    VER VIDEO
                </Button>
            </Box>
        </Container>
    )
}
export default Header;