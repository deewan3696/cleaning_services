import React from 'react'

const Card = ({Image,Title,Description,IconText,IconImage}) => {
  return (
    <div className='bg-[#0C1448] relative m-[1.4rem] h-[19.4rem] w-[18.6rem]'>
        <img className='w-[18.6rem] h-[13.6rem]' src={Image} alt="one" />
        <div className='bg-white flex flex-col justify-center items-center gap-[1rem] px-[1rem] absolute top-[7rem] w-[16rem] h-[10rem] m-[1.2rem]'>
            <h3 className='font-bold '>{Title}</h3>
            <p className='text-[0.75rem] font-normal '>{Description}</p>
            <div className='flex'>
                <a className='text-[0.6rem]' href="">{IconText}</a>
                <img src={IconImage} alt="one" />
            </div>
        </div>
    </div>
  )
}

export default Card