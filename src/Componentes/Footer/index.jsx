function Footer() {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <h2 className="special-heading">Contato</h2>
                    <p>Entre em contato conosco</p>
                    <div className="formulario">
                        <center>
                            <form name="formularioDuvidas" >
                                <h3>FORMULÁRIO</h3>
                                <label htmlFor="nomeUsuario" id="nomeUsuario">Nome:</label> 
                                <input type="text" placeholder="Insira seu nome" id="nomeUsuario" required />
                                
                                <label htmlFor="emailUsuario" id="emailUsuario">Email:</label> 
                                <input type="email" placeholder="Insira seu email" id="emailUsuario" required />
                                
                                <label htmlFor="assunto" id="assunto">Assunto:</label> 
                                <input type="text" placeholder="Insira o assunto" id="assunto" required />
                                
                                <label htmlFor="duvida" id="duvida">Deixe sua dúvida:</label>
                                <input type="text" placeholder="Escreva sua dúvida!" id="duvida" required />
                                
                                <p id="botao_enviar">
                                    <input type="submit" value="Enviar" id="enviarDuvida" />
                                </p>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
            <div className="footer">&copy; 2024 <span>Sob Solution</span> Todos os direitos reservados.</div>
        </>
    );
}

export default Footer;
