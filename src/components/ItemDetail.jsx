import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, ButtonGroup, Button, Container } from '@chakra-ui/react'


const ItemDetail = ({autos}) => {

    const { id } = useParams();
    const aFilter = autos.filter((auto)=>auto.id == id);
  
  return (
    <div>
      {aFilter.map((auto)=>
      <div key={auto.id}>
          <div className='mt-4'>
            <Container>
             <Card maxW='sm'>
            <CardBody>
              <Image
                src={auto.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{auto.marca}</Heading>
                <Heading size='md'>{auto.modelo}</Heading>
                <Text>
                  {auto.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                $ {auto.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Comprar
                </Button>
                <Link to= {`/catalogo`}> 
                <Button variant='solid' colorScheme='blue'>
                  Volver
                </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Container>
          </div>
      </div>
      )}
</div>);
};

export default ItemDetail