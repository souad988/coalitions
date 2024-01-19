import { Routes, Route } from 'react-router-dom';

import Home from './views/home';
import Page2 from './views/page2';

const App = () => (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page2" element={<Page2 />} />
  </Routes>

);

export default App;
