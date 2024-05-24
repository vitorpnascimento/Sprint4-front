import React from 'react';
import { Link } from "react-router-dom";

function LoginPaciente() {
    function validateLogin() {
        var numeroSus = document.getElementById("numeroSus").value;
        if (numeroSus === "1234") {
            window.location.href = "/feedback_paciente";
        } else {
            alert("Número do SUS inválido. Tente novamente.");
        }
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <form id="loginForm" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <label htmlFor="numeroSus" style={{ display: 'block', marginBottom: '10px' }}>Número do SUS:</label>
                <input type="text" id="numeroSus" name="numeroSus" placeholder="Digite seu número do SUS" style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />

                <button type="button" onClick={validateLogin} style={{ backgroundColor: 'rgb(0,0,128)', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Entrar</button>
                <Link id="voltar" style={{ backgroundColor: 'rgb(0,0,128)', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginLeft: '10px', textDecoration: 'none' }} to="/demo">Voltar</Link>
            </form>
            
        </div>
    );
}

export default LoginPaciente;
