import CartContext from "./cart-context";

const CartProvider = (props) =>{

const addItemToCart =() =>{

}

const removeItemFromCart =(id) =>{
    
}

const cartContext = {
    items:[],
    total:0,
    addItem:addItemToCart,
    removeItem:removeItemFromCart
}


return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)
};
export default CartProvider;