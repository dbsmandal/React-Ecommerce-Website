const FilterReducer=(state,action)=>{
    switch(action.type){

        case"FILTER_PRODUCTS":
        return{
            ...state,
            filter_products:[...action.payload],
            all_products:[...action.payload]

        }

        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view:true
            }
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view:false
            }
        case "GET_SORT_VALUE":
            return{
                ...state,
                sorting_value:action.payload
            }
        case "SORTING_PRODUCTS":
            let newSortData="";
            const {filter_products}=state;
            let tempSortData=[...filter_products]
            // let tempSortData=[...action.payload]; //in this case ... use for actual data will be alaways constant 

            const sortingproduct=(a,b)=>{
                if(state.sorting_value==="lowest") {
                    return a.price-b.price
                }
                if(state.sorting_value==="highest") {
                    return b.price-a.price
                }
                if(state.sorting_value==="a-z") {
                   return a.name.localeCompare(b.name)
                }
                if(state.sorting_value==="z-a") {
                   return b.name.localeCompare(a.name)
                }
                
            }
            newSortData=tempSortData.sort(sortingproduct)
            return{
                ...state,
                filter_products:newSortData
            }

        case "UPDATE_FILTERS_VALUE":
            const {name,value}=action.payload
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                }
            }
        case "FILTER_PRODUCTS_DATA":
            let {all_products}=state;
            let tempFilterProduct=[...all_products]

            const {text,category,company}=state.filters

            if(text){
                tempFilterProduct=tempFilterProduct.filter((curElm)=>{
                    return curElm.name.toLowerCase().includes(text)
                })
            }
            if(category){
                tempFilterProduct=tempFilterProduct.filter((curElm)=>{
                    return curElm.category===category;
                })
            }
            if(company){
                tempFilterProduct=tempFilterProduct.filter((curElm)=>{
                    return curElm.company===company;
                })
            }
           
            
            return{
                ...state,
                filter_products:tempFilterProduct
            }

        default:
            return state
    }

}
export default FilterReducer;