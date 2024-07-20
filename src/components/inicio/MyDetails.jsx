import '@fortawesome/fontawesome-free/css/all.css';
import { Button } from '@nextui-org/react';

const MyDetails = () => {
    return (
        <article className='w-[65%]' >
            <h1
                class="font-extrabold text-[#eee] text-[4.5rem] leading-none"
            >
                <span class="text-[2rem] text-[#ccc]"
                >Hola, mi nombre es</span
                >
                <br />
                Diego Martins
            </h1>
            <h2 class="text-[#09f] text-[2rem]">FULL STACK DEVELOPER</h2>
            <p class="text-[#aaa]">
                Apasionado del desarrollo de software con inclinación hacia
                el desarrollo web
            </p>
            <div class="redes flex justify-star mt-[1.2%]" >
                <p class="mr-[1%] py-[.15%] px-[1%] rounded-[5px] font-extrabold text-[.8rem] bg-[#b9e3ff] text-[#0874c5]">Disponible para trabajar</p>
                <button>
                    <a href="https://www.linkedin.com/in/diego-martins-563954278/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                </button>
                <button>
                    <a href="https://github.com/MartinsDiego17" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        <span>Github</span>
                    </a>
                </button>
                <button>
                    <a href="mailto:diegomartinsupe@hotmail.com">
                        <i class="fa-solid fa-envelope"></i>
                        <span>diegomartinsupe@hotmail.com</span>
                    </a>
                </button>
            </div>
            <Button className='mt-4 opacity-100 text-[#8ed2ff]' color='primary' variant='flat' >Descargar curriculum</Button>
            <Button className='mt-4 opacity-100 ml-3 text-[#8ed2ff]' color='primary' variant='flat' >Vista previa</Button>
        </article>
    )
}

export default MyDetails
