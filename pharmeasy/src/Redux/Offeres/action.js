import axios from 'axios'

export const GET_OFFERES_DATA_REQUEST = "GET_OFFERES_DATA_REQUEST"
export const GET_OFFERES_DATA_SUCCESS = "GET_OFFERES_DATA_SUCCESS"
export const GET_OFFERES_DATA_FAILURE = "GET_OFFERES_DATA_FAILURE"


export const getOffersDataRequest = () => ({
    type: GET_OFFERES_DATA_REQUEST
})

export const getOffersDataSuccess = (data) => ({
    type: GET_OFFERES_DATA_SUCCESS,
    payload: data
})

export const getOffersDataFailure = () => ({
    type: GET_OFFERES_DATA_FAILURE
})

export const getOffers = () => (dispatch) => {

    dispatch(getOffersDataRequest())
    axios.get("http://localhost:3000/offers")
        .then((res) => { dispatch(getOffersDataSuccess(res.data)) })
        .catch((err) => { dispatch(getOffersDataFailure()) })
}