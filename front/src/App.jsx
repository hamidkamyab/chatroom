import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/LoginPage/Login'
import Chatroom from './pages/ChatroomPage/ChatRoom';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';
function App() {
  return (
    <BrowserRouter>
    <div className="App vh-100">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='*' element={<Chatroom />} />
        </Route>

        <Route element={<AuthRoute />} >
          <Route path='/login' element={<Login />} />
        </Route>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
