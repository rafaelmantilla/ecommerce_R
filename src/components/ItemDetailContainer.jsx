import React, {useEffect} from 'react';
import Autos from "../Autos.json"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({}) => {


    const {id}=useParams()
    const [autos, setAutos] = useState([]);

    const mostrarauto =()=>{
      return new Promise ((resolve, reject)=>{
      Autos.length === 0?
      reject ("No hay productos")
      :setTimeout(()=>{
      resolve (Autos)
    },1000)
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

    useEffect(()=> {
      fetchData()
    },[id])

    return (
      <>
      <ItemDetail autos ={autos}/>
      </>
    )
}

export default ItemDetailContainer