import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function FeedbackPaciente() {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({
    atendimento: 0,
    preAtendimento: 0,
    posAtendimento: 0,
    medico: 0,
    hospital: 0
  });

  const handleRating = (field, index) => {
    setRatings(prevRatings => ({ ...prevRatings, [field]: index + 1 }));
  };

  const submitFeedback = () => {
    alert("Feedback enviado com sucesso!");
    // Implemente aqui a lógica para enviar os dados para o servidor
    navigate("/demo");
  };

  // Estilos inline
  const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: 20
      },
      form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px'
      },
      label: {
        display: 'block',
        marginBottom: '10px'
      },
      rating: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px'
      },
      star: {
        fontSize: '40px',
        cursor: 'pointer',
        color: '#ccc'
      },
      starChecked: {
        color: '#fdd835'
      },
      textarea: {
        width: '100%',
        padding: '8px',
        margin: '15px 0',
        border: '1px solid #ccc',
        borderRadius: '4px'
      },
      button: {
        backgroundColor: 'rgb(0, 0, 128)',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px'
      },
      buttonHover: {
        backgroundColor: 'white',
        color: 'rgb(0, 0, 128)'
      }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h1>Paciente</h1>
        <p>Nos ajude a saber como foi o seu atendimento respondendo as seguintes perguntas</p>
        {Object.keys(ratings).map(key => (
          <div key={key}>
            <label style={styles.label}>{`Como foi o ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}?`}</label>
            <div className="rating" style={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <span key={index}
                      style={index < ratings[key] ? {...styles.star, ...styles.starChecked} : styles.star}
                      onClick={() => handleRating(key, index)}>
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
        <label htmlFor="observacao" style={styles.label}>Campo de Observação (opcional):</label>
        <textarea style={styles.textarea} id="observacao" name="observacao" rows="4" placeholder="Digite aqui"></textarea>

        <button style={styles.button} onClick={submitFeedback}>Enviar Feedback</button>
        <button style={styles.button} onClick={() => navigate("/demo")}>Voltar</button>
      </form>
    </div>
  );
}

export default FeedbackPaciente;
