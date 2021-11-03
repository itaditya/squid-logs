import { Routes, Route } from 'react-router-dom';
import { HomeView } from '../home/HomeView';
import { AuthView } from '../auth/AuthView/AuthView';
import { LoginView } from '../auth/LoginView/LoginView';
import { NotFoundView } from '../notFound/NotFoundView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="auth" element={<AuthView />}>
          <Route path="login" element={<LoginView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}

export default App;
