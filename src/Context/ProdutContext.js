import { createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios";
import reducer from '../Reducer/productReducer'
const AppContext = createContext();
const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleProductLoading: false,
    singleProductData: {},
}

const AppProvider = ({ children }) => {
    //useReducerHook

    const [state, dispatch] = useReducer(reducer, initialState);

    //call the api for all products
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });

        } catch (error) {
            dispatch({ type: "API_ERORR" })

        }
    }

    // call api for signle product page 

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProductData = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleProductData })
        } catch (error) {
            dispatch({ type: "SINGLE_PRODUCT_API_ERORR" })

        }
    }


    //call api under useefect and for ibe time []
    useEffect(() => {
        getProducts(API)
    }, [])
    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
    )
}

//custom hook

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };