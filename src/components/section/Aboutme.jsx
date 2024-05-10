import sx from "./Aboutme.module.css";
import timeline from "../../images/timeline.png";

function Aboutme() {
  return (
    <div id="aboutme" className={sx.aboutme}>
      <h1>Sobre Mim</h1>
      <div className={sx.years}>
        <p>2018</p>
        <p>2019</p>
        <p>2020</p>
        <p>2021</p>
      </div>
      <div className={sx.timeline}>
        <img src={timeline} />
      </div>
      <div className={sx.text}>
        <p>
          Comecei minha jornada na área de tecnologia ao ingressar no curso de
          Engenharia de Software na universidade. Foi um passo importante para
          adquirir conhecimentos fundamentais sobre desenvolvimento de software,
          algoritmos, estruturas de dados e muito mais.
        </p>
        <p>
          Ingressei na Havan, onde atuei no setor de infraestrutura de TI.
          Durante esse período, desenvolvi habilidades em administração de
          sistemas, configuração de redes e suporte técnico.
        </p>
        <p>
          Para aprimorar minhas habilidades em desenvolvimento web, iniciei o
          curso da DNC, focado em tecnologias modernas como HTML, CSS,
          JavaScript, frameworks front-end e back-end.
        </p>
        <p>
          Atualmente, faço parte da equipe de desenvolvimento da Hasar, onde
          aplico meus conhecimentos em Engenharia de Software e as habilidades
          adquiridas ao longo da minha jornada. Contribuo para projetos
          desafiadores e continuo a aprender e crescer na área de tecnologia.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
