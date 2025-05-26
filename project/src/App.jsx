
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Authentication from './pages/Auth/Authentication.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <div className="App">
      <SignedIn>
        {/* When user is signed in, show protected routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Redirect any other path to home when signed in */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SignedIn>

      <SignedOut>
        {/* When user is signed out, show auth routes */}
        <Routes>
          <Route path="/auth" element={<Authentication />} />
          {/* Redirect any other path to auth when signed out */}
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </SignedOut>
    </div>
  );
};

export default App;
