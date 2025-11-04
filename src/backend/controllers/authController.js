import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Usuários simulados 
const usuarios = [
  {
    id: 1,
    nome: "Admin",
    email: "admin@email.com",
    senha: bcrypt.hashSync("123456", 8),
  },
  {
    id: 2,
    nome: "Mariane",
    email: "mariane@email.com",
    senha: bcrypt.hashSync("senha123", 8),
  },
];

// Função de login
export const loginUser = (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find((u) => u.email === email);
  if (!usuario) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const senhaValida = bcrypt.compareSync(senha, usuario.senha);
  if (!senhaValida) {
    return res.status(401).json({ message: "Senha incorreta" });
  }

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET || "segredo", {
    expiresIn: "2h",
  });

  res.json({
    message: "Login realizado com sucesso",
    token,
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email },
  });
};
