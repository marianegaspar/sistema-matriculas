export const courses = [
  {
    id: 1,
    name: "Lógica de Programação",
    duration: "2 meses",
    teacher: "Ricardo Moreira",
    description: "Aprenda os fundamentos da lógica de programação para iniciar sua jornada no desenvolvimento de software.",
    price: 499,
    schedule: ["Segunda-feira - 10:00", "Quarta-feira - 10:00"],
    spots: 20,
    requisites: "Não há pré-requisitos para este curso. É ideal para iniciantes.",
    whyimportant: ["Desenvolva uma base sólida em lógica de progamação,", "Aprenda a resolver problemas de forma eficiente,", "Prepare-se para cursos avançados de programação."],

    whoisfor: [
      {
        title: "Estudantes Iniciantes",
        subtitle: "Que nunca tiveram contato com programação.",
        icon: '<path  d="M234.38,210a123.63,123.63,0,0,0-212.76,0,8,8,0,1,0,13.6,8,107.64,107.64,0,0,1,185.56,0,8,8,0,1,0,13.6-8ZM128,128a36,36,0,1,0-36-36A36,36,0,0,0,128,128Z"/>'
      },
      {
        title: "Entusiastas de Tecnologia",
        subtitle: "Curiosos sobre como a tecnologia é construída.",
        icon: '<path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"/>'
      },
      {
        title: "Profissionais em Transição",
        subtitle: "Buscando migrar para a área de tecnologia.",
        icon: '<path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"/>'
      }, 
    ],

    material: [{
        title: "Livro Texto",
        subtitle: "Guia de Introdução",
        icon: '<path  d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"/>'
      },
    {
      title: "Recursos Online",
        subtitle: "Slides e exercícios",
        icon: '<path  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"/>'
      }
    
    
    
    ],
  },
  {
    id: 2,
    name: "Introdução à Programação",
    duration: "3 meses",
    teacher: "Dr. Ricardo Almeida",
    description: "Curso introdutório cobrindo variáveis, estruturas de controle e funções.",
    price: 699,
    schedule: ["Terça-feira - 14:00", "Quinta-feira - 14:00"],
    spots: 15,
  },
    {
    id: 3,
    name: "Desenvolvimento Web",
    duration: "4 meses",
    teacher: "Ana Silva",
    description: "Aprenda a criar sites e aplicações web usando HTML, CSS e JavaScript.",
    price: 899,
    schedule: ["Segunda-feira - 18:00", "Quarta-feira - 18:00"],
    spots: 10,
  },


];