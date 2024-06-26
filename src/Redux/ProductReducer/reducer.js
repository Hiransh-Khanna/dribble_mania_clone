
import { GET_PRODUCT_FALIURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

const intialstate={
   isLoading:false,
   isError:false,
   products:[]
}

export const reducer=(state=intialstate,{type,payload})=>{
 
  switch(type){
    case GET_PRODUCT_REQUEST:{
        return {
            ...state,
          isLoading:true
        }
    }
    case GET_PRODUCT_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            products:payload
        }
    }
    case GET_PRODUCT_FALIURE:{
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    }
    default:{
        return state
    }
  }
}
