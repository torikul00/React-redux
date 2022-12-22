import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initalState = {
    cart: []
}

const productReducer = (state = initalState, action) => {

    const selectedProduct = state.cart.find(product => product.id === action.payload.id)

    switch (action.type) {
        case ADD_TO_CART:
            if (selectedProduct) {
                selectedProduct.quantity = selectedProduct.quantity + 1
                const newCart = state.cart.filter(product => product.id !== selectedProduct.id)
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                selectedProduct.quantity = selectedProduct.quantity - 1
                const newCart = state.cart.filter(product => product.id !== selectedProduct.id)
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        default:
            return state;
    }

}

export default productReducer;