import logo from './logo.svg';
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Pages/BlogPage/Blog';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route element={<Blog/>} path='/'></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
