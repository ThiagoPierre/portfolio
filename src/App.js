import './App.scss';
import Projects from './pages/Projects/projects';

import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/home';




function App() {
  return (
      <Routes>
          <Route element={<HomePage />} path="/"> </Route>
          <Route element={<Projects />}  path="/projects/:id" />
      </Routes>
  );
}

export default App;
