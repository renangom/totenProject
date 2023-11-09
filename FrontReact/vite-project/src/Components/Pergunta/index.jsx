import { useState } from 'react';
import './style.css';

const Pergunta = ({ titulo, alternativas, onRespostaSelecionada }) => {
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const handleRespostaChange = (event) => {
    const respostaId = parseInt(event.target.value, 10);
    setRespostaSelecionada(respostaId);
    onRespostaSelecionada(respostaId);
  };

  return (
    <div className="pergunta-container">
      <h2 className="pergunta-titulo">{titulo}</h2>
      <ul className="pergunta-alternativas">
        {alternativas.map((alternativa) => (
          <li key={alternativa.id} className="pergunta-alternativa">
            <input
              type="radio"
              id={`alternativa${alternativa.id}`}
              name={`pergunta${alternativa.id}`}
              value={alternativa.id}
              checked={respostaSelecionada === alternativa.id}
              onChange={handleRespostaChange}
            />
            <label htmlFor={`alternativa${alternativa.id}`}>{alternativa.texto}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pergunta;
