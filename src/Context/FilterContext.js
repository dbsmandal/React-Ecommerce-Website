import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProdutContext";
import reducer from '../Reducer/FilterReducer';

 const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:false
}


// create provider after make sure add provider in your index.js file 
export const FilterContextProvider=({children})=>{
    const {products}=useProductContext();//we need to products all data set in filter_products


    const [state ,dispatch] =useReducer(reducer, initialState);


const setGridView=()=>{
    return dispatch({type:"SET_GRID_VIEW"})
}
const setListView=()=>{
    return dispatch({type:"SET_LIST_VIEW"})
}
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS",payload:products})
    },[products])

    return(
        <FilterContext.Provider value={{...state,setGridView,setListView}} >
            {children}
        </FilterContext.Provider>
    )
}

//custom hook

export const useFilterContext=()=>{
    return useContext(FilterContext);
}