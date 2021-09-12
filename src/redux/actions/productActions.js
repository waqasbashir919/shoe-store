

export const setProducts = (products) =>{
    return {
        type : "SET_PRODUCTS",
        payload: products
    }
}
export const addtoCart = (products) =>{
    return {
        type : "ADD_TO_CART",
        payload: products
    }
}