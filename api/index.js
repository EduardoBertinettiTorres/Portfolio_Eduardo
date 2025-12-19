// api/index.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Libera o acesso para o frontend
app.use(express.json());

// Dados Mockados (Simulando um Banco de Dados por enquanto)
const dadosPessoais = {
    nome: "Seu Nome Aqui",
    bio: "Desenvolvedor Full Stack apaixonado por Vibecoding.",
    skills: ["Node.js", "React", "JavaScript", "Tailwind"]
};

const projetos = [
    {
        id: 1,
        titulo: "Portfolio Vibe",
        descricao: "Este site incrível que você está vendo.",
        link: "https://github.com/seu-usuario/repo"
    },
    {
        id: 2,
        titulo: "API Node",
        descricao: "Uma API RESTful construída do zero.",
        link: "https://github.com/seu-usuario/api"
    }
];

// Endpoints
app.get('/', (req, res) => {
    res.send('API do Portfolio rodando! 🚀');
});

app.get('/api/sobre', (req, res) => {
    res.json(dadosPessoais);
});

app.get('/api/projetos', (req, res) => {
    res.json(projetos);
});

app.listen(PORT, () => {
    console.log(`Backend rodando na porta http://localhost:${PORT}`);
});