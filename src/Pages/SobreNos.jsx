import NavBar from "../Componentes/NavBar"
import Footer from "../Componentes/Footer"
import Miguel from "../assets/images/miguel.jpg"
import Matheus from "../assets/images/matheus_farias.jpg"
import P4 from "../assets/images/p4.jpg"
import Vitor from "../assets/images/vitor_pinheiro.jpg"
function SobreNos() {
    return (
        <>
        <NavBar/>
            <div class="landing_sobrenos">
                <div class="landing_img"></div>
                <div class="intro-text">
                    <h1>Sobre nós</h1>
                </div>
            </div>
            <div class="portfolio" id="portfolio">
                <div class="container">
                    <h2 class="special-heading">QUEM NÓS SOMOS?</h2>
                    <p>Nosso grupo é composto por 4 pessoas, todas elas cursando Engenharia de Software na FIAP.</p>
                    <div class="portfolio-content">
                        <div class="card">
                            <img src={Miguel} alt="" />
                            <div class="info">
                                <h3>Miguel Parrado</h3>
                            </div>
                        </div>
                        <div class="card">
                            <img src={Matheus} alt="" />
                            <div class="info">
                                <h3>Matheus Farias</h3>
                            </div>
                        </div>
                        <div class="card">
                            <img src={Vitor} alt="" />
                            <div class="info">
                                <h3>Vitor Pinheiro</h3>
                            </div>
                        </div>
                        <div class="card">
                            <img src={P4} alt="" />
                            <div class="info">
                                <h3>Pedro Chaves</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default SobreNos