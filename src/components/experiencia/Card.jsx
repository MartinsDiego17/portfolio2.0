const Card = ({ name, date, title, description, habilities, link }) => {

    return (
        <div className="w-[60%] p-[2%] transition duration-150 cardContainer mx-auto mb-[2%] pb-[4%] rounded-[15px]">
            <p className="border-l-2 border-[#eee] pl-[10px] text-[.8rem] text-[#aaa]">{date}</p>
            <h2 className="mt-[2.5%] text-[#eee]">
                {title} - <a
                    className="text-[#b9e3ff] border-b-1 border-[transparent] hover:border-[#333] transition duration-150"
                    href="https://www.instagram.com/labarraboulevard/"
                    target="_blank"
                >{name}</a>
            </h2>
            <ul className="flex mt-[2%]">
                {
                    habilities.map(hab => (
                        <li className=" text-[#ddd] text-[.8rem] mr-[2%] px-[2%] py-[1%] rounded-[5px] hab bg-[#121212]">#{hab}</li>
                    ))
                }
            </ul>
            <p className="mt-[2%] text-[#888] text-[.9rem]" >{description}</p>
        </div>
    )
}

export default Card; 