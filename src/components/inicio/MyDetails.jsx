import '@fortawesome/fontawesome-free/css/all.css';
import { Button } from '@nextui-org/react';

const MyDetails = ({
    smallText,
    bigText,
    developer,
    paragraph,
    openToWork,
    buttonDownload,
    buttonPreview
}) => {

    return (
        <article className='w-[65%] max-sm:w-[100vw] max-sm:text-center' >
            <h1
                class="font-extrabold text-[#eee] max-sm:leading-[1] 2xl:text-[7.5rem] text-[4.5rem] max-sm:text-[3.5rem] leading-none max-sm:text-center"
            >
                <span class="text-[2rem] 2xl:text-[2.5rem] text-[#ccc] max-sm:text-[1.5rem]"
                >{smallText}</span>
                <br />
                {bigText}
            </h1>
            <h2 class="gradient-text text-[#09f] 2xl:text-[2.5rem] max-sm:text-[1.5rem] text-[2rem] max-sm:text-center">{developer}</h2>
            <p class="text-[#aaa] max-sm:text-center 2xl:text-[1.2em]">
                {paragraph}
            </p>
            <div class="redes flex justify-star mt-[1.2%] max-sm:block max-sm:text-center" >
                <p class="2xl:text-[1.2rem] max-sm:w-fit max-sm:mb-[4%] max-sm:px-[3%] max-sm:mt-[7%] max-sm:mx-auto max-sm:text-center mr-[1%] py-[.15%] px-[1%] rounded-[5px] font-extrabold text-[.8rem] bg-[#b9e3ff] text-[#0874c5]">{openToWork}</p>
                <button>
                    <a href="https://www.linkedin.com/in/diego-martins-563954278/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                        <span className='max-sm:pl-[10px] max-sm:text-[.9rem] 2xl:text-[1.1rem] ' >Linkedin</span>
                    </a>
                </button>
                <button>
                    <a href="https://github.com/MartinsDiego17" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        <span className='max-sm:pl-[10px] max-sm:text-[.9rem] 2xl:text-[1.1rem] ' >Github</span>
                    </a>
                </button>
                <button>
                    <a href="mailto:diegomartinsupe@hotmail.com">
                        <i class="fa-solid fa-envelope"></i>
                        <span className='max-sm:pl-[10px] max-sm:text-[.9rem] 2xl:text-[1.1rem] ' >diegomartinsupe@hotmail.com</span>
                    </a>
                </button>
            </div>
            <Button className='2xl:text-[1.2rem] mt-4 opacity-100 text-[#8ed2ff]' color='primary' variant='flat' >
                {buttonDownload}
            </Button>
            <Button className='2xl:text-[1.2rem] mt-4 opacity-100 ml-3 text-[#8ed2ff]' color='primary' variant='flat' > {buttonPreview} </Button>
        </article>
    )
}

export default MyDetails
