

const Header =()=>{
    return(
        <nav className="flex justify-center gap-[30rem] bg-[blue] pt-[2rem]">
            <div className="">
                <h1 className="text-3xl">LOGO</h1>
                <p>..making cleaning effortless!</p>
            </div>
            <div className="flex">
                <ul className="flex gap-[3rem] pt-[0.5rem] pr-[2rem]">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Pricing</li>
                   
                </ul>
                <div className="">
                    <button className="bg-[black] text-white w-[10rem] h-[3rem] rounded-xl " >Contact us</button>
                </div>
            </div>
        </nav>
    )
}

export default Header