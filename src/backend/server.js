import authRoutes from "./routes/authRoutes.js";

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Rotas
app.use('/api/alunos', require('./routes/alunos'));
app.use('/api/cursos', require('./routes/cursos'));
app.use('/api/matriculas', require('./routes/matriculas'));
app.use("/api", authRoutes);

// Rota para servir o frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Rota de health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'Servidor rodando', 
        timestamp: new Date().toISOString() 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Acesse: http://localhost:${PORT}`);
});

// Verificar login de usuário
app.post("/api/login", (req, res) => {
  const { login, password } = req.body;

  fs.readFile(usersFile, (err, data) => {
    if (err) return res.status(500).json({ erro: "Erro ao ler arquivo" });
    const users = JSON.parse(data).registros;

    // Procura o usuário pelo login e senha
    const usuario = users.find(
      (u) => u.login === login && u.password === password
    );

    if (usuario) {
      res.json({
        sucesso: true,
        message: "Login bem-sucedido",
        usuario: { id: usuario.id, login: usuario.login },
      });
    } else {
      res.status(401).json({ sucesso: false, message: "Login ou senha incorretos" });
    }
  });
});