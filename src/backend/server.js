const express = require('express');
const authRoutes = require('./routes/authRoutes');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// arquivo de usuários (JSON) usado no endpoint de login
const usersFile = path.join(__dirname, 'public', 'users.json');

// Middleware
app.use(cors());

// Middleware CORS manual que garante tratamento de preflight
// Usa CODESPACE_URL se fornecida, caso contrário permite todas as origens
const CODESPACE_URL = process.env.CODESPACE_URL || '*';
app.use((req, res, next) => {
  // log para depuração de preflight
  console.log(`[CORS] ${req.method} ${req.url} Origin: ${req.headers.origin}`);

  res.header('Access-Control-Allow-Origin', CODESPACE_URL);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin, X-Requested-With');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});
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