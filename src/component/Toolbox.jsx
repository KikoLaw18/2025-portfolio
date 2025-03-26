import Photoshop from '../assets/photoshop.svg';
import Aftereffect from '../assets/after.svg';
import Illustrator from '../assets/illustrator.svg';
import Figma from '../assets/figma.svg';

export default function Toolbox() {
    return(
        <div className='p-28'>
            <h2 className='font-black text-xl text-center pb-12'>My Design Toolbox</h2>
            <div className='flex justify-center gap-16'>
                <img src={Photoshop} alt='photoshop logo' className='w-20'></img>
                <img src={Aftereffect} alt='after effect logo' className='w-20'></img>
                <img src={Illustrator} alt='illustrator logo' className='w-20'></img>
                <img src={Figma} alt='figma logo' className='w-20'></img>
            </div>
        </div>
    )
}