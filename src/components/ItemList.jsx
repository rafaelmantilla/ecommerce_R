import React from 'react'
import Item from './Item'
import { Container } from '@chakra-ui/react'


const ItemList = ({data}) => {
  return (
    <div>
      <Container>
    {data?.map((data) => (
        <Item
        key={data.id}
        id={data.id}
        marca={data.marca}
        modelo={data.modelo}
        image={data.image}
        price={data.price}
        description={data.description}
        stock={data.stock}
        category={data.category}       
        />
    ))}  
     </Container> 
    </div>
  )
}

export default ItemList