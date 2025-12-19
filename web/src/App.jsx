// web/src/App.jsx
import { useEffect, useState } from "react";

function App() {
  const [perfil, setPerfil] = useState(null);
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    // Buscar dados do perfil
    fetch("http://localhost:3000/api/sobre")
      .then((res) => res.json())
      .then((data) => setPerfil(data));

    // Buscar projetos
    fetch("http://localhost:3000/api/projetos")
      .then((res) => res.json())
      .then((data) => setProjetos(data));
  }, []);

  if (!perfil)
    return (
      <div className="text-center mt-20 text-white">Carregando vibe...</div>
    );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-8">
      {/* Header / Sobre */}
      <header className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-4">
          {perfil.nome}
        </h1>
        <p className="text-xl text-slate-400 mb-6">{perfil.bio}</p>
        <div className="flex justify-center gap-2">
          {perfil.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-slate-800 rounded-full text-sm border border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </header>

      {/* Projetos */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-700 pb-2">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-750 transition border border-slate-700 hover:border-cyan-500/50"
            >
              <h3 className="text-xl font-bold mb-2 text-cyan-400">
                {projeto.titulo}
              </h3>
              <p className="text-slate-300 mb-4">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                className="text-sm text-purple-400 hover:text-purple-300 underline"
              >
                Ver no GitHub &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
