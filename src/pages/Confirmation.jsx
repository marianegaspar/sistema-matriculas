import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";

function Confirmation() {
    // Função para salvar a matrícula no localStorage
const saveEnrollment = (courseData) => {
  const enrollment = {
    id: Date.now(), // ID único baseado no timestamp
    name: courseData.name,
    professor: courseData.professor,
    image: courseData.image
  };

  // Recuperar matrículas existentes ou inicializar array vazio
  const existingEnrollments = JSON.parse(localStorage.getItem('recentEnrollments') || '[]');
  
  // Adicionar nova matrícula
  const updatedEnrollments = [...existingEnrollments, enrollment];
  
  // Salvar no localStorage
  localStorage.setItem('recentEnrollments', JSON.stringify(updatedEnrollments));
};

// No botão de confirmação de matrícula, chame esta função:
const handleEnrollmentConfirmation = () => {
  const courseData = {
    name: "Matemática Avançada",
    professor: "Professor João Silva",
    image: img4 // Importe a imagem adequada
  };
  
  saveEnrollment(courseData);
  // Resto da lógica de navegação...
};
    
const navigate = useNavigate();
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
              Matrícula Confirmada
            </p>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Sua matrícula no curso de Matemática Avançada foi confirmada com
              sucesso. Você está pronto para começar a aprender!
            </p>
          </div>
        </div>
        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1172d4] text-white text-sm font-bold leading-normal tracking-[0.015em]"
           onClick={() => navigate('/')}>
            <span className="truncate">Ir para Meus Cursos</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
