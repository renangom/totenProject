import { Link } from 'react-router-dom';
import './styles.css';

export const Home = () => {
  return (
    <div className="home-div">
      <div className="textos">
        <h2>Quer saber a qual estilo de dança você se encaixaria?</h2>
        <h3>Responda nosso questionário e descubra!</h3>
        <Link to='/quiz' className="link-button">Responder Questionário</Link>
      </div>
    </div>
  );
};
