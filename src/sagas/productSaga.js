import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';
import { setAllProducts } from '../actions/productAction';
import { GET_ALL_PRODUCT } from '../constants/productConstants';

export default function* getAllProducts() {
  const responseBody = yield Axios.get(
    'https://api.jsoneditoronline.org/v1/docs/b48e27bd6f55413eaf796c70dc3e96eb/data'
  ).then(res => res.data);

  yield put(setAllProducts(responseBody.products));
}

export function* watchProductCommands() {
  yield takeEvery(GET_ALL_PRODUCT, getAllProducts);
}
