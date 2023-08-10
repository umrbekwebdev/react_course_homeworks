import React from 'react'

const SearchBox = ({searchange, searchInputText }) => {
  return (
    <div className='row justify-content-center my-5'>
        <div className="col-5">
            <h1>Search Foxy foods</h1>
            <input type="search" className='form-control' onChange={searchange} name="" id="" />
        </div>
    </div>
  )
}

export default SearchBox