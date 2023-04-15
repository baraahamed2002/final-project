import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[
        {
            image:"https://img.freepik.com/photos-premium/meuble-pour-tv-dans-piece-interieure-fond-mur-betondesign-minimal_41470-4985.jpg?size=626&ext=jpg&ga=GA1.1.1854655394.1678814503&semt=sph",
            name:"fiife",
            price:"12",
        }
    ]};
    export const cartSlice=createSlice({

    
  name: 'cart',
  initialState,
  reducers: {
    Add:(state,action)=>{
        state.cart=[...state.cart,action.payload];
    },
},
    
    });
  


export const { Add} = cartSlice.actions;

export default cartSlice.reducer;