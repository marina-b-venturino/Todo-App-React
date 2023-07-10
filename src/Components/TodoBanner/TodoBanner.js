import './TodoBanner.css';
import imagen from '../../Assets/react512.png'

function TodoBanner() {
    return(
        <div className='TodoBanner'>
            <img className='React-img rotating-img' src={imagen} alt='React imagen' />
            <h1 className='TodoTitle'>To Do App React</h1>
            <img className='React-img rotating-img' src={imagen} alt='React imagen' />
        </div>
    );
}

export {TodoBanner};