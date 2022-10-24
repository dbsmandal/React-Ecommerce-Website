import { createContext, useEffect } from "react"
import axios from "axios";

const AppContext=createContext();
const API='https://api.pujakaitem.com/api/products';

const AppProvider=({children})=>{
//call the api
    const getProducts=async(url)=>{
        const res=await axios.get(url);
        console.log("url data", res)
        const products= await res.data;
        console.log('prouct data' , products)
    }
    //call api under useefect and for ibe time []
    useEffect(()=>{
        getProducts(API)
    },[])
    return (  
          <AppContext.Provider value={"dbsmandal"}>{children}</AppContext.Provider>
    )
}


export {AppProvider , AppContext };