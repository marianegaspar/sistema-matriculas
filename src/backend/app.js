import express from 'express';
import bodyParser from 'body-parser';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// arquivo de usuários
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFile = path.join(__dirname, 'public', 'users.json');


app.use((req, res, next) => {
  // Headers CORS para todas as respostas
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin, X-Requested-With');
  
  // ✅ TRATAMENTO EXPLÍCITO DO PREFLIGHT
  if (req.method === 'OPTIONS') {
    // Log de depuração para confirmar se o preflight chega ao servidor
    console.log('📡 Requisição OPTIONS (preflight) recebida');
    // Responde imediatamente para evitar bloqueio por CORS
    return res.status(200).send();
  }
  
  next();
});

// Middleware para parsing do body JSON
app.use(bodyParser.json());


app.options('/auth', (req, res) => {
  console.log('📡 Preflight específico para /auth');
  res.status(200).send();
});


app.post('/auth', async (req, res) => {
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

  try {
    // Lê o arquivo `users.json` localizado em `src/backend/public/users.json`.
    // Essa é uma fonte de dados estática usada apenas em ambiente de desenvolvimento.
    const data = await fs.readFile(usersFile, 'utf8');
    const parsed = JSON.parse(data);
    const users = Array.isArray(parsed.registros) ? parsed.registros : [];

    const usuario = users.find((u) => u.login === username && u.password === password);

    if (usuario) {
      // Usuário encontrado: retorna um token fictício e dados públicos do usuário.
      console.log('✅ Autenticação bem-sucedida (users.json)');
      return res.status(200).json({
        message: 'Autenticação bem-sucedida!',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy-token',
        user: {
          id: usuario.id,
          username: usuario.login,
          role: 'user'
        },
        timestamp: new Date().toISOString()
      });
    }

    // Usuário não encontrado no users.json
    console.log('❌ Autenticação falhou (users.json)');
    return res.status(401).json({
      error: 'Credenciais inválidas',
      code: 'INVALID_CREDENTIALS',
      message: 'Username ou password incorretos'
    });
  } catch (err) {
    console.error('Erro ao ler users.json', err);
    return res.status(500).json({ error: 'Erro interno ao verificar credenciais' });
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