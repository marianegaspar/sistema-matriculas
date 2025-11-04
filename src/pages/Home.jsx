import img1 from "../assets/images/card-img.png";
import img2 from "../assets/images/card-img-2.png";
import img3 from "../assets/images/card-img-3.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  {    /* --- HANDLER DE CLIQUE --- */}
    const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/courses"); // Navigate to the home page
  };
  
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuarioLogado");
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);


  return (
    <>
      <body className="bg-background-light dark:bg-background-dark font-display">
        <main className="flex-1">
          <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-4 mb-8">
                {usuario ? (
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Bem-vindo, {usuario.login}! 
              </h1>
            ) : (
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Bem-vindo ao Sistema de Matrículas!
              </h1>
            )}

              {/* --- BOTÃO NOVA MATRÍCULA --- */}  
              <button
                onClick={handleButtonClick}
                className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90"
              >
                Nova Matrícula
              </button>
            </div>

            {/* --- TURMAS MATRICULADAS --- */}
            <div className="grid grid-cols-1 gap-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Turmas Matriculadas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-white dark:bg-background-dark/70 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-full h-32 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${img2})` }}
                  ></div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-slate-800 dark:text-white">
                      Cálculo II
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Professor Davi Nunes
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white dark:bg-background-dark/70 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-full h-32 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${img1})` }}
                  ></div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-slate-800 dark:text-white">
                      Física Geral I
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Professor Claudio Vieira
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white dark:bg-background-dark/70 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-full h-32 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${img3})` }}
                  ></div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-slate-800 dark:text-white">
                      Engenharia de Software
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Professora Maria Silva
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- ÚLTIMAS TURMAS --- */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
              Últimas Turmas
            </h2>

            {/* --- NOTAS RECENTES --- */}
            <div>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark/70 shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-background-dark/50">
                    <tr>
                      <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Disciplina
                      </th>
                      <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Avaliação
                      </th>
                      <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Nota
                      </th>
                      <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Data de Entrega
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="p-4 text-sm font-medium text-slate-800 dark:text-white">
                        Cálculo II
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        Prova do Semestre
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        85%
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        15/03/2024
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-slate-800 dark:text-white">
                        História Mundial
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        Redação 1
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        92%
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        20/03/2024
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-slate-800 dark:text-white">
                        Biologia 101
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        Relatório de Laboratório
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        78%
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        25/03/2024
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- AVISOS --- */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Avisos
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-background-dark/70 shadow-sm">
                  <div className="flex-shrink-0 flex items-center justify-center rounded-full size-12 bg-primary/10 dark:bg-primary/20 text-primary">
                    <span className="material-symbols-outlined">campaign</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 dark:text-white">
                      Prazo de Matrícula se Aproxima
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      O prazo para matrícula no próximo semestre é até 15 de
                      abril. Garanta sua vaga dentro do prazo.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                      28/04/2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-background-dark/70 shadow-sm">
                  <div className="flex-shrink-0 flex items-center justify-center rounded-full size-12 bg-primary/10 dark:bg-primary/20 text-primary">
                    <span className="material-symbols-outlined">campaign</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 dark:text-white">
                      Biblioteca Fechada para Manutenção
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      A biblioteca estará fechada para manutenção no dia 25 de
                      novembro. Devolva os materiais antes dessa data.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                      25/11/2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default Home;
