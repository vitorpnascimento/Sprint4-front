import NavBar from "../Componentes/NavBar"
import Footer from "../Componentes/Footer"
function Home() {
    return (
        <>
            <NavBar />
            <div class="landing">
                <div class="landing_img"></div>
                <div class="intro-text">
                    <h1>Sob Solution</h1>
                    <p>"Tudo sob controle, tudo Sob Solution"</p>
                </div>
            </div>
            <div class="features">
                <div class="container">
                    <div class="feat">
                        <i class="fas fa-magic fa-3x"></i>
                        <h3>Bem-vindo(a) a Sob Solution!</h3>
                        <p>Olá, nós somos a Sob Solution, uma equipe de 4 integrantes motivados a melhorar o mundo com a tecnologia ao
                            nosso redor. Trabalhando para ser a solução para a sua empresa!</p>
                    </div>
                    <div class="feat">
                        <i class="far fa-gem fa-3x"></i>
                        <h3>Para saber mais sobre esse projeto para o HC!</h3>
                        <a href="projeto.html">Clique aqui!</a>
                    </div>
                    <div class="feat">
                        <i class="fas fa-globe-asia fa-3x"></i>
                        <h3>QUEM NÓS SOMOS?</h3>
                        <a href="sobre_nos.html">Clique aqui para saber mais!</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home