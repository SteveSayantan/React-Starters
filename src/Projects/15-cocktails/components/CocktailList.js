import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{cocktails,loading}=useGlobalContext()
  if(loading){
    return <Loading/>
  }
  if(cocktails.length<1){
    return <h2 className='section-title'>
      no cocktails matched your search criteria
    </h2>
  }
  return (
    <section>
      <h2 className='section-title'>cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(({idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass})=>{
          return <Cocktail key={idDrink} id={idDrink} name={strDrink} image={strDrinkThumb} info={strAlcoholic} glass={strGlass}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList