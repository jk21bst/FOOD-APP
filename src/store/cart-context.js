import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item) =>{  },
    removeItem:(id)=>{}
})

export default CartContext;

// now we need to manage that context  in some component with useState or useReducerr so that the context can also change over time and update parts of the application over time
// And we could do this in the same file but we will create a new file for this and name that CartProvider.js. Because in there we want to add our cart provider componentwhich receives prop 
//and the goal of this component is to simply manage the cartcontext data and provide that context to all the components that want to access it 