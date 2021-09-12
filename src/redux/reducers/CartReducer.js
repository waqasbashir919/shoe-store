const initState = {
    responce : [],
}

export const CartReducer = (state = initState, action) => {
        let findProduct;
        let findIndex;
    switch(action.type){
        case "ADD_TO_CART":
            const {id,img, title,price,shoeSize,totalPrice,count} = action.payload;
            const check = state.responce.find( pr =>pr.id === action.payload.id);
            if(check){
                return state;
            }
            else{
                return{ ...state, responce : [...state.responce,{id, img, title,price,shoeSize,totalPrice,count}]}
            }
            case "INC":
            findProduct = state.responce.find(pr => pr.id === action.payload);
            findIndex = state.responce.findIndex(pr => pr.id === action.payload);
            findProduct.count += 1;
            findProduct.totalPrice += findProduct.price;
            state.responce[findIndex] = findProduct;
            return{ ...state , responce : [...state.responce]}
            
            case "DEC":
            findProduct = state.responce.find(pr => pr.id === action.payload);
            findIndex = state.responce.findIndex(pr => pr.id === action.payload);
            findProduct.count -= 1;
            findProduct.totalPrice -= findProduct.price;
            state.responce[findIndex] = findProduct;
            return{ ...state , responce : [...state.responce]}
            
        case "DELETE":
            const remove = state.responce.filter(product => product.id !== action.payload)
            return {...state, responce : remove}
        default: 
            return state;
    }
}