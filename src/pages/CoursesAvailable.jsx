import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";

function CoursesAvailable() {
  const navigate = useNavigate();
  
  const handleButtonClick = (id) => {
    console.log(id);
    navigate(`/course-info/${id}`);
  };
  

  return (
    <main className="bg-background-light dark:bg-background-dark font-display mt-24 flex-1">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        {/* --- Cabeçalho --- */}
        <div className="flex flex-col gap-3 text-center mb-8">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111418] dark:text-white">
            Turmas Disponíveis para Você
          </h1>
          <p className="text-base font-normal leading-normal text-[#617589] dark:text-gray-400">
            Pensando no seu progresso acadêmico e no seu perfil, recomendamos
            estas turmas para você avançar na sua graduação
          </p>
        </div>

        {/* --- Grid de Cursos --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((curso) => (
            <div
              key={curso.id}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm transition-all hover:shadow-lg dark:hover:border-gray-700 overflow-hidden"
            >
              <img
                className="h-48 w-full object-cover"
                alt={curso.name}
                src={curso.img}
              />

              <div className="flex flex-col p-5 pt-0 flex-1">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex gap-2">
                    {/* Tags dinâmicas baseadas nas propriedades do curso */}
                    {curso.tags && curso.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`inline-flex items-center rounded-md bg-${curso.cores[j]}-100 dark:bg-${curso.cores[j]}-900/50 px-2 py-1 text-xs font-medium text-${curso.cores[j]}-700 dark:text-${curso.cores[j]}-300`}
                      >
                        {tag}
                      </span>
                    ))}
                    {/* Tags padrão baseadas em outras propriedades */}
                    {!curso.tags && (
                      <>
                        {curso.spots <= 10 && (
                          <span className="inline-flex items-center rounded-md bg-red-100 dark:bg-red-900/50 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-300">
                            Vagas Limitadas
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-md bg-blue-100 dark:bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                          {curso.duration}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-bold leading-normal text-[#111418] dark:text-white">
                    {curso.name}
                  </h3>
                  <p className="text-sm font-normal leading-normal text-[#617589] dark:text-gray-400">
                    {curso.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button 
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" 
                    onClick={() => handleButtonClick(curso.id)}
                  >
                    <span className="truncate">Ver Detalhes da Turma</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Feedback --- */}
        <div className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-sm font-bold uppercase leading-normal tracking-widest text-center text-[#617589] dark:text-gray-400">
              Estas recomendações foram úteis?
            </h4>
            <div className="flex w-full max-w-xs gap-3">
              {["Sim", "Não"].map((opcao, i) => (
                <button
                  key={i}
                  className="flex grow cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-[#111418] dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="truncate">{opcao}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CoursesAvailable;