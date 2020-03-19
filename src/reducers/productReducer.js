import { SET_MODAL, CLEAR_MODAL, ADD_TO_CART, SET_PRODUCT, GET_ALL_PRODUCT, SET_ALL_PRODUCTS, ADD_PRODUCT_TO_FAV, REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_FAV} from '../constants/productConstants';

const initialState = {
    allProucts: [],
    isModalOpen: false,
    isModalClose: true,
    selectedProduct: null,
    cart: [],
    favList: []
}

export default function productReducer(state=initialState, action) {
    const { type, data } = action;
    switch(type){
        case GET_ALL_PRODUCT:
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                allProucts: data
            }
        case SET_PRODUCT:
            return {
                ...state,
                selectedProduct: data
            }
        case SET_MODAL: {
            return {
                ...state,
                isModalOpen: true
            }
        }
        case CLEAR_MODAL: {
            return {
                ...state,
                isModalOpen: false
            }
        }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, data]
            }
        case ADD_PRODUCT_TO_FAV:
            return {
                ...state,
                allProucts: state.allProucts.map((content) => content.id === action.id ? {...content, isFavorite: true} : content),
                favList: [...state.favList, data]
            }
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            }
        case REMOVE_PRODUCT_FROM_FAV:
            return {
                ...state,
                favList: state.favList.filter(item => item.id !== action.id)
            }
        default: {
            return state;
        }
    }
}