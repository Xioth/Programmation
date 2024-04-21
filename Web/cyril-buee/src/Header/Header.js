import NavLink from './NavLink';

function Header() {
  return (
    <header className='bg-zinc-900 text-slate-50 h-14 items-center fixed flex top-0 left-0 right-0 justify-between'>
        <h1 className='ml-2'>Cyril Buée</h1>
        <nav>
            <ul className='flex space-x-4'>
                <NavLink text='Home' url='#'/>
                <NavLink text='About' url='#' />
                <NavLink text='Career' url='#' />
                <NavLink text='Abilities' url='#' />
                <NavLink text='Projects' url='#' />
            </ul>
        </nav>
        <a href="mailto:#" className='mr-2'>✉️</a>
    </header>
  );
}

export default Header;
