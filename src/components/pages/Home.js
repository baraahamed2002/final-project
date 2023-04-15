import React from 'react'
import { meubleslist } from '../../Meubles'
import {useDispatch} from "red"

export default function Home() {

   const dispatch = useDispatch();

  return (
   
    <div className='home'>
          <div className='cards'>
     {meubleslist.map(el=><div className='card'>
     <img src={el.image} alt="" />
     <p>{el.name}</p>
     <p>{el.price}</p>
     <button
        onClick={() => {
          dispatch(
            Add({
              image: el.image,
              name: el.name,
              price: el.price,
              
              
            })
          );
        }}
      >
        AddD to cart
      </button>  </div>)}

     
       </div>
         
         

    </div>

    
   
    
  )
}
