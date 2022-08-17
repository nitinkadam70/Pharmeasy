import axios from "axios";

export const GET_ALLPRODUCT_DATA_REQUEST = "GET_ALLPRODUCT_DATA_REQUEST";
export const GET_ALLPRODUCT_DATA_SUCCESS = "GET_ALLPRODUCT_DATA_SUCCESS";
export const GET_ALLPRODUCT_DATA_FAILURE = "GET_ALLPRODUCT_DATA_FAILURE";

export const getAllProductsDataRequest = () => ({
  type: GET_ALLPRODUCT_DATA_REQUEST,
});

export const getAllProductsDataSuccess = (data) => ({
  type: GET_ALLPRODUCT_DATA_SUCCESS,
  payload: data,
});

export const getAllProductsDataFailure = () => ({
  type: GET_ALLPRODUCT_DATA_FAILURE,
});

export const getAllProducts = (payload) => (dispatch) => {
  dispatch(getAllProductsDataRequest());
  axios
    .get(`${process.env.REACT_APP_API_URL}/productsTwo`, {
      params: {
        ...payload,
      },
    })
    .then((res) => {
      dispatch(getAllProductsDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAllProductsDataFailure());
    });
};
