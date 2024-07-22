import '@fortawesome/fontawesome-free/css/all.css';
import { Button } from '@nextui-org/react';

const MyDetails = () => {
    return (
        <article className='w-[65%] max-sm:w-[100vw] max-sm:text-center' >
            <h1
                class="font-extrabold text-[#eee] max-sm:leading-[1] text-[4.5rem] max-sm:text-[3.5rem] leading-none max-sm:text-center"
            >
                <span class="text-[2rem] text-[#ccc] max-sm:text-[1.5rem]"
                >Hola, mi nombre es</span>
                <br />
                Diego Martins
            </h1>
            <h2 class="text-[#09f] max-sm:text-[1.5rem] text-[2rem] max-sm:text-center">FULL STACK DEVELOPER</h2>
            <p class="text-[#aaa] max-sm:text-center">
                Apasionado del desarrollo de software con inclinación hacia
                el desarrollo web
            </p>
            <div class="redes flex justify-star mt-[1.2%] max-sm:block max-sm:text-center" >
                <p class="max-sm:w-fit max-sm:mb-[4%] max-sm:px-[3%] max-sm:mt-[7%] max-sm:mx-auto max-sm:text-center mr-[1%] py-[.15%] px-[1%] rounded-[5px] font-extrabold text-[.8rem] bg-[#b9e3ff] text-[#0874c5]">Disponible para trabajar</p>
                <button>
                    <a href="https://www.linkedin.com/in/diego-martins-563954278/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                        <span className='max-sm:pl-[10px] max-sm:text-[.9rem]' >Linkedin</span>
                    </a>
                </button>
                <button>
                    <a href="https://github.com/MartinsDiego17" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        <span className='max-sm:pl-[10px] max-sm:text-[.9rem]' >Github</span>
                    </a>
                </button>
                <button>
                    <a href="mailto:diegomartinsupe@hotmail.com">
                        <i class="fa-solid fa-envelope"></i>
                        <span className='max-sm:pl-[10px] max-sm:text-[.9rem]' >diegomartinsupe@hotmail.com</span>
                    </a>
                </button>
            </div>
            <Button className='mt-4 opacity-100 text-[#8ed2ff]' color='primary' variant='flat' >Descargar curriculum</Button>
            <Button className='mt-4 opacity-100 ml-3 text-[#8ed2ff]' color='primary' variant='flat' >Vista previa</Button>
        </article>
    )
}

export default MyDetails
