import { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MyPage from "./components/MyPage";

function AppContent() {
  const { currentUser } = useAuth();
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-6 py-16">
      {currentUser ? (
        <MyPage />
      ) : (
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            {mode === "login" ? (
              <LoginForm
                onSwitchToSignup={() => setMode("signup")}
              />
            ) : (
              <SignupForm
                onSwitchToLogin={() => setMode("login")}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;