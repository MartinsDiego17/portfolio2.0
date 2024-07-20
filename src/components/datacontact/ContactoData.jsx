import { Button } from "@nextui-org/react";

const ContactoData = () => {
    return (
        <article className="w-1/2 flex flex-col justify-center">
            <h2 class="text-[#eee] text-[3.5rem] leading-none">
                VAMOS A<br /> TRABAJAR
            </h2>
            <p class="text-[#aaa]">Llevemos tu proyecto al siguiente nivel</p>
            <p class="text-[.8rem] mt-[2%] text-[#aaa]">
                <i class="fa-solid pr-[.5%] fa-envelope text-[#eee]"></i> diegomartinsupe@hotmail.com
            </p>
            <p class="text-[.8rem] mt-[.3%] mb-[2%] text-[#aaa]">
                <i class="fa-solid pr-[.5%] fa-location-dot text-[#eee]"></i> Buenos
                Aires, Argentina
            </p>
            <div className="redes flex">
                <a href="https://www.linkedin.com/in/diego-martins-563954278/" target="_blank">
                    <Button isIconOnly color="primary" variant="shadow" className="rounded-full opacity-80">
                        <i class="fa-brands fa-linkedin"></i>
                    </Button>
                </a>
                <a href="https://github.com/MartinsDiego17" target="_blank">
                    <Button isIconOnly color="primary" variant="shadow" className="rounded-full opacity-80">
                        <i class="fa-brands fa-github"></i>
                    </Button>
                </a>
                <a href="mailto: diegomartinsupe@hotmail.com">
                    <Button isIconOnly color="primary" variant="shadow" className="rounded-full opacity-80">
                        <i class="fa-solid fa-envelope"></i>
                    </Button>
                </a>
            </div>
        </article>
    )
}

export default ContactoData
