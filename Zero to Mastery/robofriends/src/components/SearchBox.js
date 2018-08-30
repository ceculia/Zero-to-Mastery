import React from 'react';

const SearchBox = (searchfield, searchChange) => {
    return (
        <div class='tc'>
        <input className='pa3 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='search robots' />
        onChange={(evt) => searchChange(evt)};
        </div>
    )
}

export default SearchBox;