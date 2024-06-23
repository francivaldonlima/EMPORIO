import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgeCheck from './components/AgeCheck';
import AlcoholicBeverages from './components/AlcoholicBeverages';
import NoPermission from './components/NoPermission';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgeCheck />} />
        <Route path="/alcoholic-beverages" element={<AlcoholicBeverages />} />
        <Route path="/no-permission" element={<NoPermission />} />
      </Routes>
    </Router>
  );
};

export default App;
