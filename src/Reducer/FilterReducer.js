const FilterReducer=(state,action)=>{
    switch(action.type){

        case"FILTER_PRODUCTS":
        return{
            ...state,
            filter_products:[...action.payload],
            all_products:[...action.payload]

        }

        default:
            return state
    }

}
export default FilterReducer;