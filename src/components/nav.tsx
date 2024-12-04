// import react router dom
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <ul className='nav-tabs'>
      <li className='nav-item'>
        <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
        
      </li>
    </ul>
  )
};

export default Nav;
