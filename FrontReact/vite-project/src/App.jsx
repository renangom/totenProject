import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Inicio';
import { Upload } from './Pages/Upload';
import { Questionario } from './Pages/Questionario';

function App() {

  return (

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/quiz' element={<Questionario />} />
        </Routes>
      </Router>
  )
}

export default App
