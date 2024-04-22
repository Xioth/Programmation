function Title({color, children}){
    return <h3 className={`font-bold ${color} text-xl mb-2`}>{children}</h3>;
}

export default Title;