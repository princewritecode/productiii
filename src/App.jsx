// src/App.jsx
import { Outlet } from 'react-router';
import Header from './components/Header';

function App()
{
  return (
    <div className="app-container">
      <Header /> {/* This stays visible on all pages */}
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}

export default App;