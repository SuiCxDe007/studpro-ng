const initialState={
    isAuthenticated:false,
}

const Reducer = (state=initialState,{type,payload}) =>{
    switch (type){
        case 'AUTH_USER' :
            return {isAuthenticated: true};
        case 'CLEAR_USER' :
            return {isAuthenticated: false};
        default :
            return state
    }
}

export default Reducer;