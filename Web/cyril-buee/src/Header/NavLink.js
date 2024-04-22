function NavLink({text, url}){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <li>
            <button onClick={() => scrollToSection(url)} className='font-bold hover:text-orange-400'>
                {text}
            </button>
        </li>
    )
}

export default NavLink;