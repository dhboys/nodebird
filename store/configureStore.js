import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

import reducer from '../reducers';

const configureStore = () => {
    // store는 state와 reducer를 포함한다.
    const store = createStore(reducer);
    // reducer로 전달하는 함수 (dispatch)
    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: 'dhboys123'
    });
    return store;
};

const wrapper = createWrapper(configureStore, { 
    // debug를 위함
    debug: process.env.NODE_ENV === 'development', 
});

export default wrapper;