// api/index.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- DADOS ---

const dadosPessoais = {
  nome: "Eduardo Bertinetti Torres",
  cargo: "Full Stack Developer",
  bio: "Apaixonado por tecnologia e desenvolvimento de software. Tecnólogo em Sistemas para Internet, formado pelo IFSul Pelotas. Sempre em busca de novos desafios e aprendizados na área de desenvolvimento web.",
  telefone: "5553984014033",
  experiencia: [
    {
      ano: "Nov 2024 - Atual",
      empresa: "Proenergia",
      cargo: "Projetista Elétrico",
      desc: "Atuando na empresa parceira do Grupo Ceee Equatorial, projetando redes elétricas de média e baixa tensão.",
    },
    {
      ano: "Fev 2024 - Set 2024",
      empresa: "Prefeitura Municipal de Pelotas",
      cargo: "Estagiário de TI",
      desc: "Manutenção de computadores, construção de redes lógicas de internet e suporte técnico em geral.",
    },
    {
      ano: "Dez 2021 - Fev 2024",
      empresa: "Techneer Componentes Metálicos LTDA",
      cargo: "Auxiliar de Produção",
      desc: "Monitoramento de produção e controle de qualidade.",
    },
  ],
};

// NOVA SEÇÃO: Formação Acadêmica
const formacao = [
  {
    id: 1,
    instituicao: "IFSul - Câmpus Pelotas",
    curso: "Tecnólogo em Sistemas para Internet",
    nivel: "Ensino Superior",
    descricao:
      "Formação focada em desenvolvimento full stack, engenharia de software, redes de computadores, segurança da informação e dispositivos móveis.",
  },
  {
    id: 2,
    instituicao: "IFSul - Câmpus Pelotas", // Edite aqui se for outra escola
    curso: "Técnico em Eletrotécnica",
    nivel: "Ensino Técnico",
    descricao:
      "Capacitação em projetos elétricos, sistemas de potência, automação industrial e eficiência energética.",
  },
];

const skills = {
  hardSkills: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ],
  softSkills: [
    "Proativo",
    "Comunicativo",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Adaptabilidade",
    "Gestão de Tempo",
  ],
};

const projetos = [
  {
    id: "biketracker",
    titulo: "BikeTracker",
    descricao:
      "Aplicação mobile desenvolvida para ciclistas registrarem e monitorarem suas atividades, rotas e desempenho em tempo real.",
    link: "https://github.com/EduardoBertinettiTorres/pdm_Eduardo_Torres.git",
    imagem: "/LogoBikeTracker.jpg",
    techs: ["React Native", "Firebase", "Mapbox API"],
  },
  // {
  //   id: "portfolio-vibe",
  //   titulo: "Portfolio Vibe",
  //   descricao:
  //     "Este site incrível desenvolvido com arquitetura Full Stack utilizando Node.js e React.",
  //   link: "https://github.com/EduardoBertinettiTorres",
  //   imagem: "",
  //   techs: ["React", "Node.js", "Tailwind"],
  // },
];

// --- ENDPOINTS ---

app.get("/", (req, res) => {
  res.send("API Eduardo Torres - Online 🚀");
});

app.get("/api/sobre", (req, res) => {
  res.json(dadosPessoais);
});

// Novo Endpoint
app.get("/api/formacao", (req, res) => {
  res.json(formacao);
});

app.get("/api/skills", (req, res) => {
  res.json(skills);
});

app.get("/api/projetos", (req, res) => {
  res.json(projetos);
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta http://localhost:${PORT}`);
});
