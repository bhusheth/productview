import {
  SET_PRODUCT,
  CLEAR_MODAL,
  ADD_TO_CART,
  SET_MODAL,
  SET_ALL_PRODUCTS,
  GET_ALL_PRODUCT,
  ADD_PRODUCT_TO_FAV,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_FAV
} from '../constants/productConstants';

export const setProduct = data => ({
  type: SET_PRODUCT,
  data
});

export const setModal = () => ({
  type: SET_MODAL
});

export const clearModal = () => ({
  type: CLEAR_MODAL
});

export const addToCart = data => ({
  type: ADD_TO_CART,
  data
});

export const getAllProduct = () => ({
  type: GET_ALL_PRODUCT
});

export const setAllProducts = data => ({
  type: SET_ALL_PRODUCTS,
  data
});

export const addProductToFav = (data, id) => ({
  type: ADD_PRODUCT_TO_FAV,
  data,
  id
});

export const removeProductFromFav = (data, id) => ({
  type: REMOVE_PRODUCT_FROM_FAV,
  data,
  id
});

export const removeProductFromCart = (data, id) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  data,
  id
});
