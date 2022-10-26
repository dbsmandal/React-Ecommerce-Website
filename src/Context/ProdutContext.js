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
}

const AppProvider = ({ children }) => {
    //useReducerHook

    const [state, dispatch] = useReducer(reducer, initialState);




    //call the api
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            console.log("url data", res)
            const products = await res.data;
            console.log('prouct data', products)
            dispatch({ type: "SET_API_DATA", payload: products });

        } catch (error) {
            dispatch({type : "API_ERORR"})

        }
    }
    //call api under useefect and for ibe time []
    useEffect(() => {
        getProducts(API)
    }, [])
    return (
        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    )
}

//custom hook

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };