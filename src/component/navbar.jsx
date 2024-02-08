import { Outlet, Link } from 'react-router-dom';
import './navbar.css';
import { useTheme } from '../util/theme_component.jsx';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme, toggleTheme);
  return (
    <>
      <nav>
        <div>
          <ul className=' flex flex-row gap-4 '>
            <li className='bg-[var(--nav-hd-color)]  border rounded-full text-[var(--nav-hd-text-color)]   p-2' >
              <Link to='/'>Home</Link>
            </li>
            <li className='bg-[var(--nav-hd-color)]  border rounded-full text-[var(--nav-hd-text-color)] p-2'>
              <Link to='Contact'>Contact</Link>
            </li>
            <li className='bg-[var(--nav-hd-color)]  border rounded-full text-[var(--nav-hd-text-color)] p-2'>
              <Link to='About'>About us</Link>
            </li>
            <li className='bg-[var(--nav-hd-color)]  border rounded-full text-[var(--nav-hd-text-color)] p-2'>
              <Link to='Detail'>Detail</Link>
            </li>
            <div className='mode-switch '>
              <label >
                <input type="checkbox"  onChange={toggleTheme} checked={theme === "dark"} />
                <span className='slider round text-[val(--nav-hd-text-color)]'></span>
              </label>
            </div>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
