import { GET_LABTEST_DATA_FAILURE, GET_LABTEST_DATA_REQUEST, GET_LABTEST_DATA_SUCCESS } from "./action"

const initState = {
    loading: false,
    error: false,
    data: []
}


export const labTestReducer = (state = initState, action) => {

    switch (action.type) {

        case GET_LABTEST_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                data: []
            }

        case GET_LABTEST_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }

        case GET_LABTEST_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: []
            }

        default:
            return state
    }
}