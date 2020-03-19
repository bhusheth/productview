import { all, fork } from 'redux-saga/effects';
import { watchProductCommands } from './productSaga';


export default function* rootSaga() {
    yield all([
        fork(watchProductCommands)
    ])
}