import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => { 
  const [text, setText] = useState(''); // created an local State to pass the searced text to the app.js

  const onSubmit = (e) => { // on submitting the search the local state gets updated to the searched text
    e.preventDefault();
    searchText(text); 
  }
  const refreshPage= ()=> {
    window.location.reload(false);
  }
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <button onClick={refreshPage} className="text-4xl mx-auto my-4 font-bold text-purple-500 text-center underline display: flex align-items: center justify-content: center">IMAGERY</button>
    </div>
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input onChange={e => setText(e.target.value)} /* gets the input and updates the state */ className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
      Search
      </button>
      </div>
      </form>
		</div>
    </>
  )
}

export default ImageSearch;