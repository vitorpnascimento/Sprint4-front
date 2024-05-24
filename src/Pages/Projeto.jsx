import NavBar from "../Componentes/NavBar"
import Footer from "../Componentes/Footer"
import imgCirurgia from "../../src/assets/images/cirurgia_pe.jpg"
import imgMedicoCrianca from "../assets/images/medico_atendendo_crianca.png"
import imgFeedbackPaciente from "../assets/images/feedback_paciente.png"
import imgMedico from "../assets/images/feedback_medico.png"
function Projeto() {
    return (
        <>
            <NavBar />
            <div class="landing_projeto">
                <div class="landing_img"></div>
                <div class="intro-text">
                    <h1>Problemas Apresentados</h1>
                    <p></p>
                </div>
            </div>
            <div class="about">
                <div class="container">
                    <h2 class="special-heading">Problemas</h2>
                    <p>DO ICR</p>
                    <div class="about-content">
                        <div class="image">
                            <img src={imgCirurgia} alt="" />
                        </div>
                        <div class="text">
                            <p>
                                O objetivo central é aprimorar a experiência de crianças e adolescentes durante seus tratamentos e exames,
                                enquanto simultaneamente proporciona melhor suporte e compreensão aos seus acompanhantes. A complexidade do
                                desafio surge da natureza sensível e muitas vezes intimidante do ambiente hospitalar para crianças e
                                adolescentes. Desde a marcação de exames até a realização dos procedimentos, cada etapa desse processo
                                complexo demanda uma abordagem que vá além da simples eficiência clínica, englobando a humanização de todas
                                as interações.
                            </p>
                            <hr />
                            <p>
                                A falta de informações claras e compreensíveis para pacientes e seus acompanhantes é uma dor central
                                identificada. Esta lacuna pode resultar em demoras na realização dos exames, intensificar a ansiedade dos
                                pacientes e, em casos mais extremos, levar ao cancelamento dos procedimentos, com potenciais consequências
                                adversas para a saúde dos indivíduos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="about">
                <div class="container">
                    <h2 class="special-heading">Problema escolhido</h2>
                    <p>Comunicação</p>
                    <div class="about-content">
                        <div class="text">
                            <p>
                                Quanto aos acompanhantes, há dificuldade em compreender processos hospitalares. A falta de clareza sobre os
                                processos hospitalares, cria desafios para os acompanhantes em oferecer o suporte adequado. Por consequência
                                disso, geram falhas na comunicação entre acompanhantes e equipe médica que podem prejudicar o entendimento e
                                a adesão ao tratamento. Além disso, podem afetar negativamente o suporte adequado aos pacientes. A
                                complexidade dos procedimentos e a falta de familiaridade com o ambiente hospitalar por parte dos
                                acompanhantes, prejudica a continuidade do tratamento e a compreensão adequada dos cuidados necessários.
                            </p>
                            <hr />
                            <p>
                                Quanto aos profissionais de saúde, eles sofrem sobrecarga de trabalho. Isso atrapalha na comunicação e
                                compreensão inadequada dos cuidados necessários para a criança. Pode-se perceber que há dificuldades da
                                criação de uma relação de confiança e compreensão entre o profissional de saúde e o paciente.
                            </p>
                        </div>
                        <div class="image">
                            <img src={imgMedicoCrianca} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio" id="portfolio_projeto">
                <div class="container">
                    <h2 class="special-heading">Solução proposta</h2>
                    <p>Nosso feedback</p>
                    <div class="portfolio-content">
                        <div class="card">
                            <img src={imgFeedbackPaciente} alt="" />
                            <div class="info">
                                <h3>Versão Paciente:</h3>

                                <p class="texto-feedback">1. Identificação e Acesso:</p>
                                <p class="texto-feedback">- Utilização de um aplicativo ou site acessível a todos os cidadãos cadastrados no
                                    SUS.</p>
                                <p class="texto-feedback">- O paciente realiza o login com seu número do SUS e senha.</p>

                                <p class="texto-feedback">2. Menu de Opções:</p>
                                <p class="texto-feedback">- Ao efetuar o login, o paciente terá acesso a funcionalidade de Feedback.</p>

                                <p class="texto-feedback">3. Feedback Específico:</p>
                                <p class="texto-feedback">- Uso de QR code para identificar médicos, data e exame.</p>
                                <p class="texto-feedback">- O paciente pode avaliar diversos aspectos, incluindo recepção, triagem,
                                    atendimento médico, e pós-atendimento.</p>

                                <p class="texto-feedback">4. Perguntas Estruturadas:</p>
                                <p class="texto-feedback">- Após a identificação, o sistema apresentará cinco perguntas estruturadas:</p>
                                <p class="texto-feedback"> - Avaliação geral do atendimento (obrigatória, escala de 0 a 5 estrelas).</p>
                                <p class="texto-feedback"> - Pergunta relacionada ao pré-atendimento (obrigatória).</p>
                                <p class="texto-feedback"> - Pergunta relacionada ao pós-atendimento (obrigatória).</p>
                                <p class="texto-feedback"> - Pergunta específica sobre o médico (facultativa).</p>
                                <p class="texto-feedback"> - Pergunta sobre a experiência no hospital (facultativa).</p>

                                <p class="texto-feedback">5. Campo de Observação:</p>
                                <p class="texto-feedback">- Espaço destinado a observações, elogios, críticas ou sugestões adicionais.</p>

                                <p class="texto-feedback">6. Submissão e Agradecimento:</p>
                                <p class="texto-feedback">- Após o preenchimento, o paciente pressiona o botão "Enviar", e a página é
                                    atualizada com uma mensagem de agradecimento pelo tempo dedicado ao feedback.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={imgMedico} alt="" />
                            <div class="info">
                                <h3>Versão Médico:</h3>


                                <p class="texto-feedback">1. Identificação e Acesso:</p>
                                <p class="texto-feedback">- Utilização do CRM como meio de identificação para acessar o portal específico
                                    para médicos.</p>
                                <p class="texto-feedback">- O médico realiza o login com seu CRM e senha.</p>

                                <p class="texto-feedback">2. Menu de Opções:</p>
                                <p class="texto-feedback">- Ao acessar o portal, o médico terá um menu com diversas opções, destacando a
                                    funcionalidade de Feedback.</p>

                                <p class="texto-feedback">3. Feedback Detalhado:</p>
                                <p class="texto-feedback">- Abordagem específica para o médico, incluindo detalhes sobre o atendimento ao
                                    paciente, problemas identificados e condição da criança.</p>

                                <p class="texto-feedback">4. Perguntas Estruturadas:</p>
                                <p class="texto-feedback">- Cinco perguntas estruturadas, sendo três obrigatórias e duas facultativas.</p>
                                <p class="texto-feedback">- Perguntas obrigatórias exploram a avaliação do atendimento, o problema abordado
                                    e a condição do paciente.</p>
                                <p class="texto-feedback">- Perguntas facultativas permitem ao médico fornecer insights sobre sua
                                    experiência e percepção geral do hospital.</p>

                                <p class="texto-feedback">5. Campo de Observação:</p>
                                <p class="texto-feedback">- Semelhante à versão do paciente, há um espaço para observações, elogios,
                                    críticas ou sugestões adicionais.</p>

                                <p class="texto-feedback">6. Submissão e Agradecimento:</p>
                                <p class="texto-feedback">- Após o preenchimento, o médico pressiona o botão "</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )

}
export default Projeto