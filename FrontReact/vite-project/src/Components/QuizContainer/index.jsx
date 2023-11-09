import React, { useState, useEffect } from 'react';
import './style.css';
import Pergunta from '../Pergunta';
import axios from 'axios';
import { Link } from 'react-router-dom';

function QuizContainer() {
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [pontuacaoEstilos, setPontuacaoEstilos] = useState({});
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [melhorEstiloDanca, setMelhorEstiloDanca] = useState(null);

  useEffect(() => {
    const fetchPerguntas = async () => {
      const res = await axios.get('http://localhost:3000/perguntas');
      setPerguntas(res.data);
    }
    fetchPerguntas();
  }, []);

  useEffect(() => {
    // Pré-selecione as primeiras respostas aqui (exemplo: primeira pergunta e primeira alternativa)
    const respostasIniciais = {
      0: 11, // ID da primeira pergunta e ID da primeira alternativa
      1: 22,
      2: 33,
      3: 44,
      4: 55
    };
    setRespostas(respostasIniciais);
  }, []);

  const handleRespostaSelecionada = (perguntaId, alternativaId) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [perguntaId]: alternativaId,
    }));
    console.log(respostas);
  };

  useEffect(() => {
    let novaPontuacaoTotal = 0;
    const novaPontuacaoEstilos = {};

    for (const perguntaId in respostas) {
      const alternativaId = respostas[perguntaId];
      const perguntaEscolhida = perguntas.find((pergunta) => pergunta.id == perguntaId);

      if (perguntaEscolhida) {
        const alternativaEscolhida = perguntaEscolhida.alternativas.find((alternativa) => alternativa.id == alternativaId);

        if (alternativaEscolhida && alternativaEscolhida.pontuacao) {
          // Adicione a pontuação da alternativa à pontuação total
          for (const estilo in alternativaEscolhida.pontuacao) {
            novaPontuacaoTotal += alternativaEscolhida.pontuacao[estilo];
            if (novaPontuacaoEstilos[estilo]) {
              novaPontuacaoEstilos[estilo] += alternativaEscolhida.pontuacao[estilo];
            } else {
              novaPontuacaoEstilos[estilo] = alternativaEscolhida.pontuacao[estilo];
            }
          }
        }
      }
    }

    setPontuacaoTotal(novaPontuacaoTotal);
    setPontuacaoEstilos(novaPontuacaoEstilos);
    window.localStorage.setItem('listaDancas', JSON.stringify(pontuacaoEstilos));
    window.localStorage.setItem('pontuacao', JSON.stringify(pontuacaoTotal))
  }, [respostas, perguntas]);

  useEffect(() => {
    if (pontuacaoEstilos) {
      // Encontre o estilo de dança com a maior pontuação
      let maxPontuacao = 0;
      let estiloVencedor = null;
      for (const estilo in pontuacaoEstilos) {
        if (pontuacaoEstilos[estilo] > maxPontuacao) {
          maxPontuacao = pontuacaoEstilos[estilo];
          estiloVencedor = estilo;
        }
      }
      setMelhorEstiloDanca(estiloVencedor);
    }
  }, [pontuacaoEstilos]);


  

  return (
    <div className="app-container">
      {perguntas.map((pergunta) => (
        <Pergunta
          key={pergunta.id}
          titulo={pergunta.pergunta}
          alternativas={pergunta.alternativas}
          onRespostaSelecionada={(alternativaId) =>
            handleRespostaSelecionada(pergunta.id, alternativaId)
          }
        />
      ))}

      <Link to='/upload' className="link-button">Calcular Pontuação Total</Link>
    </div>
  );
}

export default QuizContainer;
