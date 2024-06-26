import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState={
  loading:false,
  cart:cartItems,
  total:0,
  amount:0
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)

  // wrap the following five functions with useCallback
  const clearCart=()=>{
    dispatch({type:'CLEAR_CART'})
  }
  const remove=(id)=>{
    dispatch({type:'REMOVE',info:id})
  }
  const increase=(id)=>{
    dispatch({type:'INCREASE',info:id})
  }
  const decrease=(id)=>{
    dispatch({type:'DECREASE',info:id})
  }
  const fetchData=async()=>{
    dispatch({type:'LOADING'})
    const resp=await fetch(url)
    const data=await resp.json();
    dispatch({type:'DISPLAY_ITEMS',info:data})
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  useEffect(()=>{ //This is for calculating total amount and total items whenever cart value changes
    dispatch({type:'GET_TOTAL'})

  },[state.cart])   // The new state returned by GET_TOTAL contains a pointer to the same array, hence it passes the comparison test thereby avoiding infinite re-renders

  return (
    <AppContext.Provider
      value={{
        ...state,clearCart,remove,increase,decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
