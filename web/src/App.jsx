import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Send,
  Smartphone,
  Code, // <--- Adicionado para corrigir o erro anterior
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projetos, setProjetos] = useState([]);

  // Estado para o formulário
  const [formStatus, setFormStatus] = useState("");

  // Dados Pessoais
  const dados = {
    nome: "Eduardo Bertinetti Torres",
    cargo: "Full Stack Developer",
    bio: "Apaixonado por tecnologia e desenvolvimento de software. Tecnólogo em Sistemas para Internet, formado pelo IFSul Pelotas. Sempre em busca de novos desafios e aprendizados na área de desenvolvimento web.",
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

  // --- AQUI ESTAVA FALTANDO A DEFINIÇÃO DAS SKILLS ---

  // Hard Skills com Ícones Reais (URLs do Devicon)
  const hardSkills = [
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
  ];

  const softSkills = [
    "Proativo",
    "Comunicativo",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Adaptabilidade",
    "Gestão de Tempo",
  ];

  // Projeto em Destaque (Manual)
  const bikeTrackerProject = {
    id: "biketracker-manual",
    titulo: "BikeTracker",
    descricao:
      "Aplicação mobile desenvolvida para ciclistas registrarem e monitorarem suas atividades, rotas e desempenho em tempo real.",
    link: "https://github.com/EduardoBertinettiTorres/pdm_Eduardo_Torres.git", // Coloque o link real aqui se tiver
    imagem: "/LogoBikeTracker.jpg", // Caminho na pasta public
    techs: ["React Native", "Firebase", "Maps API"],
  };

  // Buscando projetos da API + Adicionando o BikeTracker
  useEffect(() => {
    fetch("http://localhost:3000/api/projetos")
      .then((res) => res.json())
      .then((data) => {
        // Combinamos o projeto manual com os da API
        setProjetos([bikeTrackerProject, ...data]);
      })
      .catch((err) => {
        console.error("Erro ao buscar projetos. Backend está rodando?", err);
        // Se a API falhar, mostra pelo menos o BikeTracker
        setProjetos([bikeTrackerProject]);
      });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Integração com Formspree
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setFormStatus("Mensagem enviada com sucesso! 🚀");
        form.reset();
      } else {
        setFormStatus("Ocorreu um erro. Tente novamente.");
      }
    });
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-orange-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl text-orange-500 tracking-tighter cursor-pointer hover:text-white transition-colors">
              &lt;Eduardo /&gt;
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  "Sobre",
                  "Habilidades",
                  "Projetos",
                  "Experiência",
                  "Contato",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-orange-500 transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-900/50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-zinc-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                "Sobre",
                "Habilidades",
                "Projetos",
                "Experiência",
                "Contato",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800 hover:text-orange-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Sobre) --- */}
      <section
        id="sobre"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Texto de Apresentação */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-sm font-semibold mb-6 animate-pulse">
              Bem-vindo ao meu portfólio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Eu sou <span className="text-orange-500">{dados.nome}</span>
              <br />
              <span className="text-2xl md:text-4xl text-zinc-400 font-normal">
                {dados.cargo}
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {dados.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projetos"
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2"
              >
                Ver Projetos <ChevronDown size={20} />
              </a>
              <a
                href="#contato"
                className="px-8 py-3 border border-zinc-700 hover:border-orange-500 hover:text-orange-500 rounded-full font-bold transition-all bg-zinc-900/50 backdrop-blur-sm"
              >
                Entrar em Contato
              </a>
            </div>
          </div>

          {/* Foto de Perfil */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Círculo decorativo atrás */}
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              {/* Foto */}
              <img
                src="/perfil.jpg" // Certifique-se de ter essa imagem na pasta public
                alt="Foto de Perfil"
                className="relative w-full h-full object-cover rounded-full border-4 border-zinc-900 shadow-2xl ring-2 ring-orange-500/50"
                onError={(e) => {
                  e.target.src = "https://github.com/eduardobtorres.png";
                }} // Fallback para foto do github
              />

              {/* Card Flutuante Decorativo */}
              <div
                className="absolute -bottom-4 -left-4 bg-zinc-900/90 backdrop-blur border border-zinc-800 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Smartphone className="text-green-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Foco atual</p>
                  <p className="text-sm font-bold text-white">Busco oportunidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HABILIDADES & TECH --- */}
      <section
        id="habilidades"
        className="py-20 bg-zinc-950 border-t border-zinc-900/50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 border-l-4 border-orange-500 pl-4">
            Arsenal Tecnológico
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-zinc-300 flex items-center gap-2">
                <Code className="text-orange-500" /> Hard Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hardSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-orange-500/50 transition-all hover:-translate-y-1 flex flex-col items-center justify-center gap-3"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm font-medium text-zinc-400 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="text-orange-500" /> Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50 hover:bg-zinc-900 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                    <span className="text-zinc-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="py-20 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-orange-500 pl-4">
            Projetos Recentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all group flex flex-col shadow-lg hover:shadow-orange-500/10"
              >
                {/* Imagem do projeto */}
                <div className="h-48 bg-zinc-800 relative overflow-hidden">
                  {projeto.imagem ? (
                    <img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code
                        size={48}
                        className="text-zinc-600 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                  )}
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">
                    {projeto.titulo}
                  </h3>

                  {/* Tags de tecnologia se existirem */}
                  {projeto.techs && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {projeto.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-zinc-800 text-orange-400 rounded border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-zinc-400 text-sm mb-6 flex-1 line-clamp-3">
                    {projeto.descricao}
                  </p>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-lg font-medium text-sm transition-colors w-fit mt-auto"
                  >
                    Acessar Repositório <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIÊNCIA --- */}
      <section id="experiência" className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-orange-500 pl-4">
            Jornada Profissional
          </h2>
          <div className="space-y-12">
            {dados.experiencia.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Linha do tempo visual (Desktop) */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2"></div>

                <div
                  className={`md:flex items-center justify-between ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  } gap-12`}
                >
                  {/* Data e Bolinha */}
                  <div className="hidden md:block w-1/2 relative">
                    <div
                      className={`absolute top-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-zinc-950 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-10 
                      ${index % 2 === 0 ? "-left-[26px]" : "-right-[26px]"}`}
                    ></div>
                    <div
                      className={`text-orange-500 font-mono font-bold ${
                        index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      {exp.ano}
                    </div>
                  </div>

                  {/* Card Mobile (Bolinha) */}
                  <div className="md:hidden absolute left-0 top-2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                  <div className="md:hidden text-orange-500 font-mono text-sm mb-1">
                    {exp.ano}
                  </div>

                  {/* Conteúdo */}
                  <div className="md:w-1/2 bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-orange-500/30 transition-all hover:-translate-y-1 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.cargo}
                    </h3>
                    <h4 className="text-zinc-400 text-sm mb-3 font-medium uppercase tracking-wider">
                      {exp.empresa}
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section
        id="contato"
        className="py-20 bg-gradient-to-t from-orange-900/10 to-zinc-950"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-xl text-zinc-400">
              Tem uma ideia de projeto ou quer bater um papo sobre tecnologia?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Conecte-se comigo
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/EduardoBertinettiTorres"
                  target="_blank"
                  className="p-4 bg-zinc-900 rounded-xl text-zinc-300 hover:text-white hover:bg-orange-600 transition-all border border-zinc-800 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/eduardo-bertinetti-torres-a90a73275/"
                  target="_blank"
                  className="p-4 bg-zinc-900 rounded-xl text-zinc-300 hover:text-white hover:bg-orange-600 transition-all border border-zinc-800 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:eduardobtorres17@gmail.com"
                  className="p-4 bg-zinc-900 rounded-xl text-zinc-300 hover:text-white hover:bg-orange-600 transition-all border border-zinc-800 hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
              <p className="text-zinc-500 mt-8 text-sm leading-relaxed">
                Estou disponível para trabalhos freelancer e oportunidades CLT.
                Sinta-se à vontade para me mandar uma mensagem direta!
              </p>
            </div>

            {/* Formulário */}
            <form
              action="https://formspree.io/f/móvel"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl"
            >
              {/* LEMBRETE: TROQUE O ACTION PELO SEU LINK DO FORMSPREE */}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-400 mb-1"
                  >
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="exemplo@email.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-400 mb-1"
                  >
                    Sua Mensagem
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    placeholder="Olá Eduardo, gostaria de falar sobre..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                  ></textarea>
                </div>

                <input
                  type="hidden"
                  name="_subject"
                  value="Novo contato do Portfólio!"
                />

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Enviar Mensagem <Send size={18} />
                </button>

                {formStatus && (
                  <p className="text-center text-sm text-green-400 mt-2 animate-pulse">
                    {formStatus}
                  </p>
                )}
              </div>
            </form>
          </div>

          <footer className="mt-20 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
            <p>
              &copy; 2024 Eduardo Bertinetti Torres. Desenvolvido com{" "}
              <span className="text-orange-500">React & Vibe</span>.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
