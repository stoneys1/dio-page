import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/Feed";

import { Home } from './pages/Home'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

export default App;