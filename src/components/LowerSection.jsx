import Cleaning_service_preview1 from '../assets/images/Cleaning_service_preview 1.png'
import Vector7 from '../assets/images/Vector 7.png'
import Vector5 from '../assets/images/Vector 5.png'
import Free_Vector_preview from '../assets/images/Free_Vector_preview 1.png'
import Card from './Card'
import { details } from './Shared/Data'

const LowerSection = () => {
    
  return (
    <div className='relative'>
        <div className='flex flex-col items-center mx-[7rem] '>
            <div className='flex flex-col items-center'>
                <button className='rounded-[1rem] bg-[#0C1448] text-[#02AEEE] m-[2rem] w-[7rem] h-[2rem]'>services</button>
                <h2 className='font-bold text-[2.5rem] '>What We Are Doing</h2>
            </div>
            <div className='grid grid-cols-3'>
                {
                    details.map((detail, i) => (<Card key={i} {...detail}/>))
                }
            </div>
            <div className='flex justify-center gap-[4rem] my-[4rem]'>
                <div className='w-[31rem] flex flex-col gap-[4rem] '>
                    <button className='rounded-[1rem] bg-[#0C1448] text-[#02AEEE] m-[2rem] w-[7rem] h-[2rem]'>Pricing</button>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-[2.5rem] leading-[3.5rem] '>Cleaning Services <br /> <span className='text-[#02AEEE] '> at your own convenience</span></h2>
                        <p className='font-semibold text-[12px] my-[2rem] '>MADE 2 CLEAN Company is at your service. We will work with your schdule to have your location clean at your own convinence</p>
                    </div>
                    <div className='flex flex-col gap-3 font-bold text-[1rem]'>
                        <p>Expert / Professional Cleaners</p>
                        <p>Guaranteed Results </p>
                        <p>Affordable Pricing</p>
                        <p>We offer Deep Cleaning</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='mt-[24rem]' src={Vector5} alt="" />
                    <img className='absolute top-[20rem] left-[1rem] z-[2rem]' src={Cleaning_service_preview1} alt="Cleaning_service_preview1" />
                </div>
            </div>
        </div>
        <div className='flex justify-center gap-[12rem] '>
            <div className='relative'>
                <img className='mt-[5rem]' src={Vector5} alt="" />
                <img className='absolute top-0 left-[1rem] ' src={Free_Vector_preview} alt="Cleaning_service_preview1" />
            </div>
            <div className='flex flex-col gap-[1.3rem] w-[26rem]'>
                <h2 className='font-bold text-[2.5rem] leading-[3.5rem] '>Eco-Friendly Products <span className='text-[#02AEEE] '>Safe for your Family</span></h2>
                <p className='w-[18.6rem] font-semibold text-[0.75rem] leading-[18px] '>We will sanitize your home to keep you and your family save. We are equipped with our masks, gloves and other essential professional cleaning tools</p>
                <div className='flex flex-col gap-[0.5rem] font-bold text-[0.9rem] '>
                    <p>We use only environmental save products</p>
                    <p>Masks and gloves are worn for safety</p>
                    <p>We disinfect to kill harmful bacteria</p>
                </div>
            </div>
        </div>
        <img className='absolute top-[28rem] h-[96rem] w-[7rem] pb-[6rem] ' src={Vector7} alt="Vector7" />
    </div>
  )
}

export default LowerSection