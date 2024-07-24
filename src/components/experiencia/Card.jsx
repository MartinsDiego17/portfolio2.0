const Card = ({ name, date, title, description, habilities, link }) => {

    return (
        <div className="w-[60%] max-sm:w-[90%] p-[2%] max-sm:p-[20px] transition duration-150 cardContainer mx-auto mb-[2%] max-sm:mb-[7%] pb-[4%] rounded-[15px]">
            <p className="border-l-2 border-[#eee] pl-[10px] text-[.8rem] 2xl:text-[1.2rem] text-[#aaa]"> {date}</p>
            <h2 className="font-extrabold mt-[2.5%] text-[#eee] max-sm:text-pretty 2xl:text-[1.3rem]">
                {title} - <a
                    className="text-[#b9e3ff] border-b-1 border-[transparent] hover:border-[#333] transition duration-150"
                    href="https://www.instagram.com/labarraboulevard/"
                    target="_blank"
                >{name}</a>
            </h2>
            <ul className="flex mt-[2%] max-sm:mt-[4%] max-sm:block">
                {
                    habilities.map(hab => (
                        <li className="2xl:text-[1rem] max-sm:w-fit max-sm:py-[5px] max-sm:px-[10px] text-[#ddd] text-[.8rem] mr-[2%] px-[2%] py-[1%] rounded-[5px] hab bg-[#121212]">#{hab}</li>
                    ))
                }
            </ul>
            <p className="2xl:text-[1.2rem] mt-[2%] max-sm:mt-[4%] max-sm:text-pretty text-[#888] text-[.9rem]" >{description}</p>
        </div>
    )
}

export default Card; 