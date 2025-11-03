export const courses = [
  {
    id: 1,
    name: "Lógica de Programação",
    duration: "2 meses",
    teacher: "Ricardo Moreira",
    description: "Aprenda os fundamentos da lógica de programação para iniciar sua jornada no desenvolvimento de software.",   
    schedule: ["Segunda-feira - 10:00", "Quarta-feira - 10:00"],
    spots: 20,
    requisites: "Não há pré-requisitos para este curso. É ideal para iniciantes.",
    whyimportant: ["Desenvolva uma base sólida em lógica de progamação,", "Aprenda a resolver problemas de forma eficiente,", "Prepare-se para cursos avançados de programação."],
    tags: ["Tecnologia", "Iniciante"],
    cores: ["blue", "green"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwZ5HNkvWx7yH2eAtvsBmjX14P4EoqkKyqisG2z1R2vZL1RD8Hlzy8ESohAgFh6apnHZ-JfakyU--c_d1jN5SfnwaaOdP1TmqVhR_LpprODilT-_Yi5rNKUQdyHFa7oWsHmdQ-UGYfgRgmtr8DA1V11v94JRaipKI-20bTNjJMjFQk_H0bXl0-KpONjovlXZWLeG0YyTtqomIjM9JIOwpSpnAx5SMWER5UAAFQTaz_zzj12gxlef4dBT0udp6Mv5qLpntMPVX_3BM",
    
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

    isMatriculated: false,
  },
  {
    id: 2,
    name: "Introdução à Programação",
    duration: "3 meses",
    teacher: "Dr. Ricardo Almeida",
    description: "Curso introdutório cobrindo variáveis, estruturas de controle e funções.",
    schedule: ["Terça-feira - 14:00", "Quinta-feira - 14:00"],
    spots: 15,
    tags: ["Programação", "Fundamentos"],
    cores: ["purple", "blue"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd7zXjeHGrRHP1t0RVvkXDXksKOCBUqT97m7TXo0gensTafkTpm_Nr41fIh4UhR34wZwSr4kZmv5t1lfFbfizAN59Jox1fLILEVDJFqJoZMZvlTkhv0aZLBOIPInn_2D4rrLpM72PID1_BJNyxNtaOPyluq_7z6Y2aumvP1mLWl1f7YzcMKHsCzLLY7VLA-pk8jMprI_CdwVauS4MbEzUjqgxfh0O53s6WO_si9TpHh9A3Dk61NJq3GAJTsx4mFdr0JvtofnukPGI",
    whyimportant: ["Compreenda os conceitos básicos de programação,", "Prepare-se para cursos avançados de desenvolvimento de software,", "Desenvolva habilidades essenciais para a carreira em tecnologia."],
    whoisfor: [ 
      {
        title: "Estudantes Universitários",
        subtitle: "Que desejam iniciar na programação.",    
        icon: '<path d="M224,136h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v64H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V144A8,8,0,0,0,224,136ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v64H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"/>'
      },
      {
        title: "Profissionais de Outras Áreas",
        subtitle: "Interessados em aprender programação.",
        icon: '<path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"/>'
      },
    ],       
    material: [{
        title: "Apostila do Curso",
        subtitle: "Conteúdo completo do curso.",
        icon: '<path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"/>'
      },
    ],
    isMatriculated: false,
  },
  {
    id: 3,
    name: "Desenvolvimento Web",
    duration: "4 meses",
    teacher: "Ana Silva",
    description: "Aprenda a criar sites e aplicações web usando HTML, CSS e JavaScript.",
    schedule: ["Segunda-feira - 18:00", "Quarta-feira - 18:00"],
    spots: 10,
    tags: ["Web", "Tecnologia", "Frontend"],
    cores: ["orange", "blue", "green"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0toy9mkhBRoPjO2OfY6X8Axi18fCbvL3Xnupv2u8d9tdFojz5yy1XIbjjpWpZG3S2ktWJxfNlJf8CEzDJJMNKlAcSPaKwxKDDY5hHmbb7Nb_ZC_vJDsrbn00fqK7obl9PABLjkzSobTCcllVKwcYtmLIV2ldzWyw6C9KezbItemEqd-Wu51_z5XKd79REmWTaanH1NspcsamTGxTvehs5k2LpAuHk5NI8_6HyY3vgQRrh9KC6AEZTy-PG-6fInLnX86h-NoZ6t-E",
    isMatriculated: false,
  },
];