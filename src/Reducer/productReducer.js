
const productReducer = (state , action) => {
  
 
  switch (action.type){
    
    case "SET_LOADING" :
      return {
        ...state,
        isLoading :true
      };
    case "SET_API_DATA":
      const featureData=action.payload.filter((curElem)=>{
        return curElem.featured===true
      });
      return {
        ...state,
        isLoading : false,
        products : action.payload,
        featureProducts : featureData
      }
    case "API_ERORR" :
      return {
        ...state,
        isLoading :false,
        isError :true
      };
      
    case "SET_SINGLE_PRODUCT_LOADING" :
      return {
        ...state,
        isSingleProductLoading :true
      };

      case "SET_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        isSingleProductLoading : false,
        singleProductData : action.payload,
      };
      case "SINGLE_PRODUCT_API_ERORR" :
        return {
          ...state,
          isSingleProductLoading :false,
          isError :true
        };
    default :
     return state
  }
}

export default productReducer
