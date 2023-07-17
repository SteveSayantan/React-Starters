import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setSearchTerm}=useGlobalContext();
  const searchValue= React.useRef(null)

  const handleChange=(e)=>{
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()      // without this, when the user presses 'enter', the form is submitted followed by a page reload.
  }
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  return (
    <section className='section search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id='name' ref={searchValue} onChange={handleChange}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm