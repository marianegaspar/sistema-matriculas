import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS MANUAL COMPLETO com tratamento de preflight
app.use((req, res, next) => {
  // Headers CORS para todas as respostas
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin, X-Requested-With');
  
  // ✅ TRATAMENTO EXPLÍCITO DO PREFLIGHT
  if (req.method === 'OPTIONS') {
    console.log('📡 Requisição OPTIONS (preflight) recebida');
    return res.status(200).send();
  }
  
  next();
});

// Middleware para parsing do body JSON
app.use(bodyParser.json());

// Credenciais fixas
const FIXED_USERNAME = 'admin';
const FIXED_PASSWORD = 'senha123';

// ✅ TRATAMENTO ESPECÍFICO PARA OPTIONS NA ROTA /auth
app.options('/auth', (req, res) => {
  console.log('📡 Preflight específico para /auth');
  res.status(200).send();
});

// Endpoint /auth
app.post('/auth', (req, res) => {
  const { username, password } = req.body;

  if (req.method === 'OPTIONS') {
    res.status(200).send();
  }

  console.log('🔐 Tentativa de autenticação:', { username });

  if (!username || !password) {
    return res.status(400).json({
      error: 'Username e password são obrigatórios',
      code: 'MISSING_CREDENTIALS'
    });
  }

  if (username === FIXED_USERNAME && password === FIXED_PASSWORD) {
    console.log('✅ Autenticação bem-sucedida');
    return res.status(200).json({
      message: 'Autenticação bem-sucedida!',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy-token',
      user: {
        id: 1,
        username: username,
        role: 'admin'
      },
      timestamp: new Date().toISOString()
    });
  } else {
    console.log('❌ Autenticação falhou');
    return res.status(401).json({
      error: 'Credenciais inválidas',
      code: 'INVALID_CREDENTIALS',
      message: 'Username ou password incorretos'
    });
  }
});

// Rota padrão
app.get('/', (req, res) => {
  res.json({
    message: 'API de Autenticação com CORS e Preflight',
    endpoints: {
      auth: 'POST /auth'
    },
    cors: {
      enabled: true,
      preflight: 'handled'
    }
  });
});

// Rota de health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    cors: 'enabled',
    preflight: 'supported'
  });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint não encontrado',
    path: req.originalUrl,
    method: req.method
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`🔗 Acesse: http://localhost:${PORT}`);
  console.log(`🌐 CORS: Ativo para todas as origens`);
  console.log(`📡 Preflight: Configurado para todas as rotas`);
});