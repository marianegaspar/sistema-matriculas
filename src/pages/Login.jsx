import { use } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // para redirecionar para a home


const URL_APP = "https://urban-space-bassoon-69r646pggp7q3r5vq-3000.app.github.dev";
const LOGIN_URL = "/auth";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErro("");

    try {
      var username = login;
      
      const response = await fetch(URL_APP + LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      
      let data = {};
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch (parseErr) {
        // Se parse falhar, cria um objeto de erro genérico para exibir ao usuário
        data = { message: 'Resposta inválida do servidor' };
      }

      if (!response.ok) {
        // Use a mensagem do body JSON (se existir) ou o statusText
        throw new Error(data.message || response.statusText || "Erro ao fazer login");
      }

      console.log("Login bem-sucedido:", data);
      
      localStorage.setItem("usuarioLogado", JSON.stringify(data.user));

      // Redireciona para a Home
      navigate("/home");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-md px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="text-primary size-12">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-2">EduConnect</h2>
        </div>

        <div className="p-6 border rounded-lg shadow-lg bg-white dark:bg-background-dark/80">
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
      </div>
    </div>
  );
}

export default Login;
