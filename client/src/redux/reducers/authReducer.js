import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.AUTH:
            localStorage.setItem("auth",JSON.stringify(action.payload))
            return action.payload;
        default:
            return state;
    }
}


export default authReducer