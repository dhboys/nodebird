const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {}
    },
    post: {
        mainPosts: []
    }
};
// 액션을 생성하는 함수 사용 (action creater)
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state,
                    isLoggedIn: true,
                    user: action.data
                }
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state,
                    isLoggedIn: false,
                    user: null
                }
            };
    }
};

export default rootReducer;