import { call, put, takeEvery } from 'redux-saga/effects';
import { setAllProducts } from '../actions/productAction';
import { GET_ALL_PRODUCT } from '../constants/productConstants';

export default function* getAllProducts() {

    const response = yield call(fetch, 'http://api.jsoneditoronline.org/v1/docs/b48e27bd6f55413eaf796c70dc3e96eb/data');
    const responseBody = yield response.json();
    
    yield put(setAllProducts(responseBody.products));
}

export function* watchProductCommands() {
    yield takeEvery(GET_ALL_PRODUCT, getAllProducts)
}