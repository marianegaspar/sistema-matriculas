import { useState } from "react";
import { useNavigate } from "react-router-dom"; // para redirecionar para a home

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErro("");

    try {
      const response = await fetch("https://urban-space-bassoon-69r646pggp7q3r5vq-3000.app.github.dev/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      // Salva o usuário no localStorage para poder usar depois
      localStorage.setItem("usuarioLogado", JSON.stringify(data.usuario));

      // Redireciona para a Home
      navigate("/home");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto mt-20 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>

      {erro && <p className="text-red-500 mt-2 text-center">{erro}</p>}
    </div>
  );
}

export default Login;
