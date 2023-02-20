import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const Item = ({id,marca,modelo,price,description, image}) => {
  return (
    <div className='mt-4'>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{marca}</Heading>
      <Heading size='md'>{modelo}</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link  to= {`/detail/${id}`}> 
      <Button variant='ghost' colorScheme='blue'>
      Más detalles
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Item