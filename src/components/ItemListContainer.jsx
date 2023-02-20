import React, { useEffect, useState } from 'react';
import Autos from "../Autos.json";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({}) => {

  const {category} =useParams();
  
  const [autos, setAutos]= useState([]);

  const mostrarauto =()=>{
    return new Promise((resolve, reject)=>{
      Autos.length === 0?
      reject ("No hay autos")
      : setTimeout(() => {
        resolve(Autos)
      }, 1000)
    });
  }

  async function fetchData(){
    try{
      const data = await mostrarauto();
      setAutos(data)
    } catch (err){
      console.log (err)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [category])

  const aFilter = autos.filter((p)=> p.category === category);
  return(
    <>
    {category ? <ItemList data={aFilter}/>: <ItemList data={autos}/>}
    </>
  )
}

export default ItemListContainer