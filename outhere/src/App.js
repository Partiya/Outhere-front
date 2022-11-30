import logo from './logo.svg';
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Pages/BlogPage/Blog';
import AdminDashboard from './Pages/Admin Dashboard/AdminDashboard';
import AdminUsers from './Pages/Admin Dashboard/AdminUsers';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route element={<Blog/>} path='/'></Route>
              <Route element={<AdminDashboard/>} path='/admin/recent_stories'></Route>
              <Route element={<AdminUsers/>} path='/admin/users'></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
