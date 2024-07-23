import labarra from '../../public/images/proyectos/labarra.jpeg';
import vorttex from '../../public/images/proyectos/vorttex.jpeg';
import pokedex from '../../public/images/proyectos/pokedex.jpeg';

export const projects = [
    {
        title: "La Barra Boulevard",
        quantity: 1,
        image: labarra,
        description: "La barra boulevard es hasta ahora mi proyecto más importante. Se trata de un e-commerce full-stack desarrollado para un restaurante de Chile, que cuenta con una navegación muy intuitiva y una gestión de base de datos sólida.",
        stack: ['Javascript', 'Next', 'React'],
        github: "https://github.com/MartinsDiego17/La-Barra-Sport-Bar",
        deploy: "https://la-barra-boulevard.vercel.app/"
    },
    {
        title: "Vorttex Gaming",
        quantity: 8,
        image: vorttex,
        description: "Vorttex Gaming es un E-Commerce que desarrollamos con mi equipo de estudio, en el cual tuve algunos retos que al superarlos me hicieron mejorar como desarrollador"
        ,
        stack: ['Javascript', 'Next', 'React'],
        github: "https://github.com/zuoki/VorttexGaming",
        deploy: "https://pf-final-damian-projects.vercel.app/"
    },
    {
        title: "Pokedex",
        quantity: 1,
        image: pokedex,
        description: "Pokedex elaborada con la Poke-Api, con formularios de registro, inicio de sesión y creación de pokemones. También cuenta con ordenamientos, filtros y búsqueda de pokemones.",
        stack: ['Javascript', 'Vite', 'React'],
        github: "https://github.com/MartinsDiego17/PI-Pokemon-main"
    }
];