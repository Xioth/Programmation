import ProgressBar from './ProgressBar';
import Title from '../Utilities/Title';
import './Abilities.css';

function Abilities(){
    const titleColor = 'text-slate-100';
    const progressBarColor = 'bg-orange-400';
    const textProgressBarColor = 'text-gray-300';

    return (
        <section id='abilities' className='bg-zinc-950 min-h-screen flex justify-center items-center snap-start background'>
            <div className='grid grid-cols-2 w-full max-w-screen-lg'>
                <div className='w-11/12'>
                    <Title color={titleColor}>Coding</Title>
                    <ProgressBar text='HTML5' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='100' />
                    <ProgressBar text='CSS3' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='95' />
                    <ProgressBar text='Bootstrap' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='80' />
                    <ProgressBar text='Tailwind' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='60' />
                    <ProgressBar text='JavaScript' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='70' />
                    <ProgressBar text='JQuery' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='70' />
                    <ProgressBar text='React' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='55' />
                    <ProgressBar text='PHP' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='85' />
                    <ProgressBar text='MySQL' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='80' />
                </div>
                <div className='w-11/12'>
                    <div>
                        <Title color={titleColor}>Cybersecurity</Title>
                        <ProgressBar text='Pentesting' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='75' />
                        <ProgressBar text='Forensics' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='40' />
                        <ProgressBar text='HTML' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='99' />
                        <ProgressBar text='HTML' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='99' />
                    </div>
                    <div className='mt-4'>
                        <Title color={titleColor}>Other</Title>
                        <ProgressBar text='HTML' backgroundColor={progressBarColor} textColor={textProgressBarColor} percentage='99' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abilities;