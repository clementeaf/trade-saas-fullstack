import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralLayout from './components/layout/GeneralLayout';
import { routes } from './routes';
import Home from './pages/Home';
import Operaciones from './pages/Operaciones';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <GeneralLayout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.operaciones} element={<Operaciones />} />
        </Routes>
      </GeneralLayout>
    </BrowserRouter>
  );
}

export default App;
