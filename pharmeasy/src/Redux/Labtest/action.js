import axios from 'axios'

export const GET_LABTEST_DATA_REQUEST = "GET_LABTEST_DATA_REQUEST"
export const GET_LABTEST_DATA_SUCCESS = "GET_LABTEST_DATA_SUCCESS"
export const GET_LABTEST_DATA_FAILURE = "GET_LABTEST_DATA_FAILURE"


export const getLabtestDataRequest = () => ({
    type: GET_LABTEST_DATA_REQUEST
})

export const getLabtestDataSuccess = (data) => ({
    type: GET_LABTEST_DATA_SUCCESS,
    payload: data
})

export const getLabtestDataFailure = () => ({
    type: GET_LABTEST_DATA_FAILURE
})

export const getLabtest = () => (dispatch) => {

    dispatch(getLabtestDataRequest())
    axios.get(`${process.env.REACT_APP_API_URL}/labTest`)
        .then((res) => { dispatch(getLabtestDataSuccess(res.data)) })
        .catch((err) => { dispatch(getLabtestDataFailure()) })
}