import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/Home';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes here */}
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/playground" element={<div>Playground Page</div>} />
         </Routes>
      </Router>
   );
}

export default App;
