import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { offerReducer } from './Offeres/reducer'
import thunk from 'redux-thunk'
import { labTestReducer } from './Labtest/reducer';
import { healthReducer } from './HelthcareProducts/reducer';
import { AllProductsReducer } from './AllProducts/reducer';

const rootReducer = combineReducers({
    offers: offerReducer,
    labTest: labTestReducer,
    healthCare: healthReducer,
    allProduct: AllProductsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer)