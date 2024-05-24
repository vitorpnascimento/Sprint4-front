import NavBar from "../Componentes/NavBar"
import Footer from "../Componentes/Footer"
import CriancaAtendida from "../assets/images/crianca_sendo_atendida.avif"
function ComoVaiSer() {
    return (
        <>
            <NavBar />
            <div class="landing_comvaiser">
                <div class="landing_img"></div>
                <div class="intro-text">
                    <h1>Como vai ser?</h1>
                    <p></p>
                </div>
            </div>
            <div class="services" id="services">
                <div class="container">
                    <h2 class="special-heading">Nosso feedback</h2>
                    <p>Conheça agora as fases do nosso projeto</p>
                    <div class="services-content">
                        <div class="col">
                            <div class="srv">
                                <i class="fas fa-palette fa-2x"></i>
                                <div class="text">
                                    <h3>Fase 1: Feedback Simples (Desenvolvimento Simples)</h3>
                                    <p>- Desenvolvimento básico com HTML e formulário simples em JavaScript. </p>
                                    <p>- Avaliação de atendimento, pré e pós-atendimento, com perguntas facultativas.</p>
                                    <p>
                                        <p>- Campo de observação. </p>
                                        <p>- Esta fase terá um desenvolvimento mais simples devido ao status inicial do primeiro semestre da
                                            faculdade. </p>
                                    </p>
                                </div>
                            </div>
                            <div class="srv">
                                <i class="fab fa-sketch fa-2x"></i>
                                <div class="text">
                                    <h3>Fase 3: Campanhas de Análise e Evolução das Perguntas (Afinando Detalhes)</h3>
                                    <p>- Implementação de campanhas de análise alinhadas às demandas específicas do hospital. </p>
                                    <p> - Dinâmica de ajuste nas perguntas conforme a evolução temporal, promovendo uma abordagem mais estratégica e contextualizada.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="srv">
                                <i class="fas fa-vector-square fa-2x"></i>
                                <div class="text">
                                    <h3>Fase 2: Salvamento de Dados e KPIs (Utilização do SQLite)</h3>
                                    <p>- Integração do SQLite para armazenamento eficiente dos dados de feedback. </p>
                                    <p>- Estabelecimento de indicadores-chave de desempenho (KPIs) para avaliação contínua.</p>
                                    <p>- Configuração de parâmetros para melhorar a interpretação dos resultados. </p>
                                </div>
                            </div>
                            <div class="srv">
                                <i class="fas fa-pencil-ruler fa-2x"></i>
                                <div class="text">
                                    <h3>Fase 4: Criação de Gráficos KPIs (Visualizando o Progresso)</h3>
                                    <p>- Utilização dos dados acumulados para criar gráficos visualmente informativos.</p>
                                    <p>- Apresentação visual dos indicadores-chave de desempenho para proporcionar ao hospital uma compreensão clara e instantânea dos resultados. </p>
                                    <p>- Esta fase é crucial para destacar o progresso e fornecer insights valiosos por meio de representações gráficas acessíveis. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="image image-column">
                                <img src={CriancaAtendida} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default ComoVaiSer