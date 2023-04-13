import { Grid, GridItem, Stack, Skeleton } from '@chakra-ui/react';
import Header from './components/Header';
import './App.css'

function App() {

  return (
    <>
      <Grid
            h='100vh'
            w='100vw'
            gridTemplateRows={'3fr 4fr'}
            gridTemplateColumns={'1fr'}
            bg={'black'}
        >
            <GridItem
                bgSize={'cover'}
                bgPos={'center'}
                bgImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/2828962/pexels-photo-2828962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
            >
              <Header></Header>
            </GridItem>
            <GridItem marginTop={'1rem'} >
              <Stack gap={'1rem'}>
                <Skeleton height={'200px'} />
                <Skeleton height={'200px'} />
              </Stack>
            </GridItem>
        </Grid>
    </>
  )
}

export default App
