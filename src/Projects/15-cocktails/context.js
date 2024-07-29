import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


  const AppProvider = ({ children }) => {
  const[loading,setLoading]=useState(true)
  const[searchTerm, setSearchTerm]=useState('k');     // As we should display some drinks initially, we can't keep this state value empty.
  const [cocktails,setCocktails]=useState([])

  const fetchDrinks= useCallback(async ()=>{    // To be able to add fetchDrinks as a dependency in the useEffect, we must wrap it in useCallback.
    try {
      setLoading(true)          // as we shall trigger fetch on each input, we must initialize loading while fetching
      const response= await fetch(url+searchTerm)
      const data= await response.json()
      const {drinks}=data;
      if(drinks){
        setCocktails(drinks)
      }
      else{
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }, [searchTerm]) 


  useEffect(()=>{ 
    fetchDrinks();  
  },[searchTerm,fetchDrinks])


  return <AppContext.Provider value={{loading,cocktails,setSearchTerm}}>{children}</AppContext.Provider>
} 



// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }