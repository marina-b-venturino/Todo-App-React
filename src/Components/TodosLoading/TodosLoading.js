import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    
    return(
        <div className='container-loading'>
        <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        </div>
        </div>
    );
}

export {TodosLoading};