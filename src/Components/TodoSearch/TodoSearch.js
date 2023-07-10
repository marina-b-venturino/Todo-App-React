import './TodoSearch.css';
import { TodoContext } from '../../TodoContext';
import React from 'react';

function TodoSearch() {
    const {
        searchValue, 
        setSearchValue,
       } = React.useContext(TodoContext);
    
    return(
        <div>
        <input placeholder='Buscar' value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}/>
        </div>
    );
}

export {TodoSearch};