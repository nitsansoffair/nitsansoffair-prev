const indexReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
};

export default indexReducer;
