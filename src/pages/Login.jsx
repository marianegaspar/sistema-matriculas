import { createRoot } from "react-dom/client";
import { useState } from "react";

function Login() {
  //Declara uma variável de estado para armazenar o valor da entrada e uma função para atualizá-la:
  const [name, setName] = useState("");

  //Função para lidar com mudanças na entrada:
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <main className="bg-background-light dark:bg-background-dark font-display">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="w-full max-w-md p-8">
          <div className="flex justify-center mb-8">
            <svg
              class="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 class="text-2xl font-bold">EduConnect</h1>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl shadow-lg p-8">
            <h2 class="text-center text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Bem-vindo de volta
            </h2>
            <p class="text-center text-gray-500 dark:text-gray-400 mb-8">
              Acesse sua conta para continuar
            </p>
            <form className="space-y-6">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email ou nome de usuário
                <div className="mt-1>">
                  <input
                    className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary focus:ring-primary"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    required=""
                  />
                </div>
              </label>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Senha
                <div className="mt-1>">
                  <input
                    className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary focus:ring-primary"
                    type="password"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
              </label>
            </form>
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a className="font-medium text-primary hover:text-primary/80"
                  href="#"
                >
                  Esqueci minha senha
                </a>
              </div>            
          </div>
            <button className="flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              type="submit">
                Entrar
              </button>
            </div>
        </div>
      </div>      
    </main>
  );
}

export default Login;
