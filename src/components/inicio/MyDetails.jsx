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
                class="font-extrabold text-[#eee] max-sm:leading-[1] 2xl:text-[4.5rem] text-[3.5rem] max-sm:text-[3.5rem] leading-none max-sm:text-center"
            >
                {bigText}
            </h1>
            <h5 className='text-pretty text-[rgb(185,227,255)] mt-[2%] mb-[0] font-extrabold text-[1.3rem]'>{developer}</h5>
            <p class="text-[#aaa] max-sm:text-center 2xl:text-[1.2em] mt-[1%]">
                {paragraph}
            </p>

            <div class="redes flex justify-star place-items-center mt-[2%] max-sm:block max-sm:text-center" >
                <p
                    class="max-sm:w-fit max-sm:mx-auto max-sm:mb-[3%] text-[#ddd] bg-[#161616] p-[5px] rounded-md border-1 border-[#333]"
                >
                    <span class="2xl:text-[1rem] inline-flex items-center px-2 py-0 text-xs font-semibold rounded-md pointer-events body-primary box-gen" >
                        <span class="mr-1.5 flex h-3 w-3 items-center">
                            <span
                                class="absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75 bg-lime-400"
                            >
                            </span>
                            <span
                                class="relative inline-flex h-2 w-2 rounded-full bg-lime-400"
                            ></span>
                        </span>{openToWork}
                    </span>
                </p>
                <a href="https://www.linkedin.com/in/diego-martins-563954278/" target='_blank' className='ml-[4%]'>
                    <Button isIconOnly className='text-[1.2rem] rounded-full bg-transparent text-[#eee]'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </Button>
                </a>
                <a href="https://github.com/MartinsDiego17" target='_blank' >
                    <Button isIconOnly className='text-[1.2rem] rounded-full bg-transparent text-[#eee]'>
                        <i class="fa-brands fa-github"></i>

                    </Button>
                </a>
                <a href="mailto:diegomartinsupe@hotmail.com">
                    <Button isIconOnly className='text-[1.2rem] rounded-full bg-transparent text-[#eee]'>
                        <i class="fa-regular fa-envelope"></i>
                    </Button>
                </a>
            </div>

            <Button
                className='2xl:text-[1rem] mt-4 opacity-100 text-[#eee] border-1 border-[#222] bg-[#161616] rounded-sm mr-[2%] hover:border-[#ddd] '
                variant='flat'
            >
                {buttonDownload}
            </Button>
            <Button
                className='2xl:text-[1rem] mt-4 opacity-100 text-[#eee] border-1 border-[#222] bg-[#161616] rounded-sm hover:border-[#ddd] '
                variant='flat'
            >
                {buttonPreview}
            </Button>
        </article>
    )
}

export default MyDetails
