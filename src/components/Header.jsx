import Logo from '../IMAGE/logo.png'

const Header =()=>{
    return(
        <nav className="flex justify-center gap-[15rem] bg-[white] text-[black]">
            <div className="pt-[2rem]">
               <img className='pb-[2rem]' src={Logo} alt="" />
            </div>
            <div className="flex">
                <ul className="flex gap-[8rem] pr-[2rem] pt-[4rem] font-semibold">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Pricing</li>
                   
                </ul>
                <div className="">
                    <button className="bg-[black] text-white w-[10rem] h-[3rem] rounded-xl mt-[3.5rem]" >Contact us</button>
                </div>
            </div>
        </nav>
    )
}

export default Header