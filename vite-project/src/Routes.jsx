import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import CorePage from './components/CorePage';

function AppRoutes() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/core/:id" element={<CorePage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
