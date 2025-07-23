import './Header.css';
import { MdOutlineLock } from 'react-icons/md';

const Header = () => {
    return (
        <div className='header'>
            <MdOutlineLock className='lock-icon' />
        </div>
    );
}

export default Header;