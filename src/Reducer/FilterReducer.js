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
            let userSortValue=document.getElementById("sort")
            let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
            console.log("filter reducer page",sort_value)
            return{
                ...state,
                sorting_value:sort_value
            }
        case "SORTING_PRODUCTS":
            let newSortData="";
            let tempSortData=[...action.payload]; //in this case ... use for actual data will be alaways constant 
            if(state.sorting_value==="lowest") {
                const sortingproduct=(a,b)=>{
                    return a.price-b.price
                }
                newSortData=tempSortData.sort(sortingproduct)
                
            }
            if(state.sorting_value==="highest") {
                const sortingproduct=(a,b)=>{
                    return b.price-a.price
                }
                newSortData=tempSortData.sort(sortingproduct)
                
            }
            if(state.sorting_value==="a-z") {
                newSortData=tempSortData.sort((a,b)=>
                a.name.localeCompare(b.name))
            }

            if(state.sorting_value==="z-a") {
                newSortData=tempSortData.sort((a,b)=>
                b.name.localeCompare(a.name)
                )
            }

            return{
                ...state,
                filter_products:newSortData
            }

        default:
            return state
    }

}
export default FilterReducer;