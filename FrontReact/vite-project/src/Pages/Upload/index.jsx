/* upload.jsx */
import './style.css';

export const Upload = () => {
  const listaResposta = JSON.parse(window.localStorage.getItem('listaDancas'));
  const dancas = Object.keys(listaResposta);
  const pontuacao = JSON.parse(window.localStorage.getItem('pontuacao'));

  return (
    <div className="paginaUpload">
      <div className="upload-container">
        <h3 className="result-title">Este é o resultado das danças que mais se aproximam do seu gosto:</h3>
        <ul className="result-list">
          {dancas.map((danca) => (
            <li key={danca} className="result-item">
              <div className="result-text">
                {danca}
              </div>
              <div className="result-bar">
                <div
                  className="bar-fill"
                  style={{ width: `${(listaResposta[danca] / pontuacao) * 100}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

