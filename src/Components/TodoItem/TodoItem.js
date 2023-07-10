import './TodoItem.css';

function TodoItem(props) {
    return(
      <li className='TodoItem'>
        <button className={`Icon Icon-check 
        ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
          <i className='fas fa-check'></i></button>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <button className='Icon Icon-delete'
        onClick={props.onDelete}><i className='fa fa-close'></i></button>
      </li>
    );
  }

export {TodoItem};