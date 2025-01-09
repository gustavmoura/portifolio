import { Navigation } from "../../Navigation";

export function Hero() {
    return (
        <div className="animate-slide-left flex flex-col gap-[10px] bg-gradient-to-r from-sky-700 to-red-700 p-[20px] rounded text-blue100">
            <h2 className="tracking-widest font-bold">Senior Software Engineer</h2>
            <p className="leading-6 text-sm text-blue100p80">Sou um engenheiro de software com mais de +5 anos de experiência em desenvolvimento de soluções web e móveis escaláveis e eficientes. Especializado em React, TypeScript e Node.js, tenho um sólido histórico de entrega de projetos de alta qualidade, desde a concepção até a produção. Minha paixão é criar interfaces de usuário dinâmicas e responsivas, otimizar o desempenho e garantir a robustez do backend. Com forte habilidade em resolver problemas complexos, estou sempre em busca de desafios que envolvam inovação e excelência técnica.

Com um foco constante em aprender novas tecnologias e metodologias ágeis, estou comprometido em ajudar empresas a construir produtos de alta qualidade, eficientes e centrados no usuário.</p>
            <Navigation type="main"/>
        </div>
    );
}