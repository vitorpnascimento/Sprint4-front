import Footer from "../Componentes/Footer"
import NavBar from "../Componentes/NavBar"
import imgCriancaAcompanhante from "../assets/images/crianca_acompanhante.webp"
import imgMedicos from "../assets/images/medicos.jpg"
import { Link } from 'react-router-dom';

function Demo() {
    return (
        <>
            <NavBar />
            <div class="landing_demo">
                <div class="landing_img"></div>
                <div class="intro-text">
                    <h1>Demonstração</h1>
                    <p></p>
                </div>
            </div>
            <div class="portfolio_demo" id="portfolio">
                <div class="container">
                    <h2 class="special-heading">Feedback</h2>
                    <p>Demonstração</p>
                    <div class="portfolio-content">
                        <div class="card">
                            <img src={imgCriancaAcompanhante} alt="" />
                            <div class="info">
                                <h3>Feedback Paciente/Acompanhante</h3>
                                <Link class="animate-btn" to="/loginPaciente">Clique aqui!</Link>
                            </div>
                        </div>
                        <div class="card">
                            <img src={imgMedicos} alt="" />
                            <div class="info">
                                <h3>Feedback Medico</h3>
                                <Link class="animate-btn" to="/loginMedico">Clique aqui!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Demo