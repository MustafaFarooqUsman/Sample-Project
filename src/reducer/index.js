const initial_state = {
    users: []
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case "GET_USERS":
            return ({
                ...state,
                users: action.payload
            })

    }
    return state;
}