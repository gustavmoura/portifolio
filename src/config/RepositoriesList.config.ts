import { Repositories } from "@/types/repositories.type";

export const RepositoriesList : Repositories[] = [
    {
        id: 1,
        title: "Sharly AI",
        image: "/repositories/sharly.png",
        description: "Sharly AI é um site que utiliza inteligência artificial para permitir conversas interativas com documentos PDF. Construído com o Framework Bootstrap, o site oferece uma interface responsiva e moderna, facilitando o upload de PDFs e a extração de informações de forma intuitiva e eficiente.",
        technologies: ["/repositories/React-Dark.svg", "/repositories/NextJS-Dark.svg", "/repositories/Bootstrap.svg","/repositories/HTML.svg","/repositories/CSS.svg"],
        path: "/repositories",
        href: "https://sharly.ai"
    },
    {
        id: 2,
        title: "Rifaweb",
        image: "/repositories/rifaweb.png",
        description: "RifaWeb é uma plataforma de rifas digitais que torna a criação e a gestão de rifas simples e acessível. Desenvolvido com o Framework Bootstrap, o site oferece uma interface responsiva e amigável, permitindo que os usuários participem de rifas online de forma segura e prática.",
        technologies: ["/repositories/React-Dark.svg", "/repositories/NextJS-Dark.svg", "/repositories/TailwindCSS-Dark.svg", "/repositories/TypeScript.svg"],
        path: "/repositories",
        href: "https://rifaweb.com"
    },
    {
        id: 3,
        title: "Portfolio",
        image: "/repositories/Portfolio-wide-light.png",
        description: "Este é o meu site portfolio, site desenvolvido em React com o NextJS 15. O site demonstra todas as minhas habilidades, quem sou eu, meus contatos e meus repositórios.",
        technologies: ["/repositories/React-Dark.svg", "/repositories/NextJS-Dark.svg", "/repositories/TailwindCSS-Dark.svg", "/repositories/TypeScript.svg"],
        path: "/repositories",
        href: "/"
    },
]