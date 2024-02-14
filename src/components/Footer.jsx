import Logo from '../IMAGE/logo.png'
import Email from '../IMAGE/email.png'
import Location from '../IMAGE/location.png'
import Social from '../IMAGE/Social.png'

const Footer = () => {
    return (
        <footer>
            <div className="bg-[skyblue] ">
                <div className="flex pl-[6rem] h-[7rem] pt-[1rem]">
                    <div className="">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="flex gap-[1rem] pl-[1.5rem]">
                        <img className='w-[2rem] h-[2rem]' src={Email} alt="" />
                        <p>mode2cleaniningservice@gmail.com</p>
                        <img className='w-[2rem] h-[2rem]' src={Location} alt="" />
                        <p>32, Ajalekoko stree, Amuowodofin,Lagos</p>
                    </div>

                </div>
                <div className="ml-[23rem] pb-[1rem] flex">
                    <p>Made 2 Clean Company c 2024 || Cleaning Services </p>
                    <div className="">
                        <img className='ml-[20rem]' src={Social} alt="" />
                    </div>
                </div>
            </div>


        </footer>


    )
}

export default Footer