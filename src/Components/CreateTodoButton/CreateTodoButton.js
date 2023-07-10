import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
    return(
       <button className='create-btn' onClick={
        () => { 
            setOpenModal(state => !state);
            } 
         } >
        <i className='fa fa-plus'></i>
       </button> 
    );
}

export {CreateTodoButton};