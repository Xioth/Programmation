function NavLink({text, url}){
    return (
        <li>
            <a href={url} className='font-bold hover:text-orange-400'>
                {text}
            </a>
        </li>
    )
}

export default NavLink;