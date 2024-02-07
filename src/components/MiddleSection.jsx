import Cleaning_service_preview1 from '../assets/images/Cleaning_service_preview 1.png'
import Vector7 from '../assets/images/Vector 7.png'
import Card from './Card'
import { details } from './Shared/Data'

const MiddleSection = () => {
    
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
            <div className='flex justify-center gap-[4rem] my-[5rem]'>
                <div className='w-[24rem] '>
                    <button className='rounded-[1rem] bg-[#0C1448] text-[#02AEEE] m-[2rem] w-[7rem] h-[2rem]'>Pricing</button>
                    <h2>Cleaning Services <br /> <span> at your own convenience</span></h2>
                    <p>MADE 2 CLEAN Company is at your service. We will work with your schdule to have your location clean at your own convinence</p>
                    <div>
                        <p>Expert / Professional Cleaners</p>
                        <p>Guaranteed Results </p>
                        <p>Affordable Pricing</p>
                        <p>We offer Deep Cleaning</p>
                    </div>
                </div>
                <div className='bg-Vector5 bg-no-repeat '>
                    <img src={Cleaning_service_preview1} alt="Cleaning_service_preview1" />
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='bg-Vector5 bg-no-repeat'>
                <img src="" alt="" />
            </div>
            <div className='flex flex-col'>
                <h2>Eco-Friendly Products <span>Safe for your Family</span></h2>
                <p>We will sanitize your home to keep you and your family save. We are equipped with our masks, gloves and other essential professional cleaning tools</p>
                <div className='flex flex-col'>
                    <p>We use only environmental save products</p>
                    <p>Masks and gloves are worn for safety</p>
                    <p>We disinfect to kill harmful bacteria</p>
                </div>
            </div>
        </div>
        <img className='absolute top-[28rem] h-[102rem] w-[9rem] ' src={Vector7} alt="Vector7" />
    </div>
  )
}

export default MiddleSection