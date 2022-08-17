import axios from 'axios'

export const GET_PRODUCTS_DATA_REQUEST = "GET_PRODUCTS_DATA_REQUEST"
export const GET_PRODUCTS_DATA_SUCCESS = "GET_PRODUCTS_DATA_SUCCESS"
export const GET_PRODUCTS_DATA_FAILURE = "GET_PRODUCTS_DATA_FAILURE"


export const getProductsDataRequest = () => ({
    type: GET_PRODUCTS_DATA_REQUEST
})

export const getProductsDataSuccess = (data) => ({
    type: GET_PRODUCTS_DATA_SUCCESS,
    payload: data
})

export const getProductsDataFailure = () => ({
    type: GET_PRODUCTS_DATA_FAILURE
})

export const getProducts = () => (dispatch) => {

    dispatch(getProductsDataRequest())
    axios.get(`${process.env.REACT_APP_API_URL}/helthcareProduct`)
        .then((res) => { dispatch(getProductsDataSuccess(res.data)) })
        .catch((err) => { dispatch(getProductsDataFailure()) })
}