function ProgressBar({text, backgroundColor, textColor, percentage}){
    return (
        <div className='py-1 rounded hover:bg-zinc-800'>
            <div className='flex justify-between'>
                <span className={`${textColor} text-base font-medium`}>{text}</span>
                <span className={`${textColor} text-sm font-medium`}>{percentage}%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className={`${backgroundColor} h-2.5 rounded-full`} style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;