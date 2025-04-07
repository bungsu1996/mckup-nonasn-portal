import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate, useLocation } from "react-router";
import { isTokenExpired } from "./JwtToken";

type User = {
  name: string;
  token: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed: User = JSON.parse(stored);
      if (isTokenExpired(parsed.token)) {
        localStorage.removeItem("user");
        setUser(null);
        if (location.pathname !== "/login") navigate("/login");
      } else {
        setUser(parsed);
      }
    } else if (location.pathname !== "/login") {
      navigate("/login");
    }

    // optional: auto logout on expiry
    const interval = setInterval(() => {
      if (user && isTokenExpired(user.token)) {
        logout();
      }
    }, 60 * 1000); // cek setiap menit

    return () => clearInterval(interval);
  }, []);

  const login = (newUser: User) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
