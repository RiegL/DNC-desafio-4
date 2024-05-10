import sx from "./Projects.module.css";
import Card from "../elements/Card";
import controle from "../../images/2v.png";
import melipponario from "../../images/melipponario.png";
import starbuucks from "../../images/starbuucks.png";
import weather from "../../images/weather.png";

function Projects() {
  return (
    <div id="projects" className={sx.projects}>
      <h1>Projetos</h1>
    
        <div className={sx.cardContainer}>
          
          <Card
            img={controle}
            link="https://2v-estoque.vercel.app/"
            title="2V Controle de estoque"
            text="Projeto que realiza o controle de estoque. Utilizado o Firebase (privado), utilizando REACT, JS, TS, CSS"
            repo="https://github.com/RiegL"
            className={sx.card}
          />
          <Card
            img={weather}
            link="https://dncweatherapp.netlify.app/"
            title="DNC Weather"
            text="Projeto que realiza o consumo de API de cep e tempo, utilizando HTML, CSS, JS"
            repo="https://github.com/RiegL/DNCweather?tab=readme-ov-file"
            className={sx.card}
          />
          <Card
            img={melipponario}
            link="https://www.meliponariolenoirrieg.com.br/"
            title="Meliponário Lenoir Rieg"
            text="Projeto realizado a fins de estudo 100% responsivo, hoje está sendo usado como um site para o trabalho do meu pai de cultivo de abelhas sem ferrão (privado)"
            repo="https://github.com/RiegL"
            className={sx.card}
          />
          <Card
            img={starbuucks}
            link="https://animated-elf-655377.netlify.app/"
            title="Landing Page StarckBucks"
            text="Realizei a criação deste site a partir do ORIGINAL todos os direitos do template pertencem a Nice Page. A utilização é exclusivamente para fins de aprendizagem para exercitar meus conhecimentos em HTML e CSS."
            repo="https://github.com/RiegL/Starbucks"
            className={sx.card}
          />
          <Card
            img={starbuucks}
            link="https://animated-elf-655377.netlify.app/"
            title="Landing Page StarckBucks"
            text="Realizei a criação deste site a partir do ORIGINAL todos os direitos do template pertencem a Nice Page. A utilização é exclusivamente para fins de aprendizagem para exercitar meus conhecimentos em HTML e CSS."
            repo="https://github.com/RiegL/Starbucks"
            className={sx.card}
          />
          <Card
            img={starbuucks}
            link="https://animated-elf-655377.netlify.app/"
            title="Landing Page StarckBucks"
            text="Realizei a criação deste site a partir do ORIGINAL todos os direitos do template pertencem a Nice Page. A utilização é exclusivamente para fins de aprendizagem para exercitar meus conhecimentos em HTML e CSS."
            repo="https://github.com/RiegL/Starbucks"
            className={sx.card}
          />
        
      </div>
    </div>
  );
}

export default Projects;
