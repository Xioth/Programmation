import NavLink from './NavLink';

function Header() {
  return (
    <header className='text-slate-50 h-20 items-center fixed flex top-0 left-0 right-0'>
        <p className='flex items-center space-x-2 mx-4 font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-orange-400" viewBox="0 0 16 16">
            <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
          </svg>
        </p>
        <nav className='mx-16'>
            <ul className='flex space-x-16'>
                <NavLink text='Home' url='home'/>
                <NavLink text='About' url='about' />
                <NavLink text='Career' url='career' />
                <NavLink text='Abilities' url='abilities' />
                <NavLink text='Projects' url='projects' />
            </ul>
        </nav>
        <span></span>
    </header>
  );
}

export default Header;