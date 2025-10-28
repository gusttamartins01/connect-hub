export interface Professor {
  id: string;
  nome: string;
  email: string;
  foto: string;
}

export interface Disciplina {
  id: string;
  nome: string;
  codigo: string;
  professor: Professor;
  horario: string;
  sala: string;
}

export interface Atividade {
  id: string;
  disciplinaId: string;
  tipo: "atividade" | "trabalho" | "aps";
  titulo: string;
  descricao: string;
  dataEntrega: string;
  status: "pendente" | "entregue" | "atrasada";
}

export interface DisciplinaCurricular {
  semestre: number;
  disciplinas: {
    nome: string;
    cargaHoraria: number;
  }[];
}

export const professores: Professor[] = [
  {
    id: "1",
    nome: "Prof. Dr. Carlos Silva",
    email: "carlos.silva@universidade.edu",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    nome: "Profa. Dra. Ana Santos",
    email: "ana.santos@universidade.edu",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    nome: "Prof. Me. Roberto Lima",
    email: "roberto.lima@universidade.edu",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    nome: "Profa. Dra. Maria Costa",
    email: "maria.costa@universidade.edu",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    nome: "Prof. Dr. João Oliveira",
    email: "joao.oliveira@universidade.edu",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

export const disciplinas: Disciplina[] = [
  {
    id: "1",
    nome: "Fundamentos de Análise e Projeto de Sistemas",
    codigo: "U0217",
    professor: professores[0],
    horario: "Segunda e Quarta, 19h-21h",
    sala: "Sala 201",
  },
  {
    id: "2",
    nome: "Redes de Computadores",
    codigo: "U0531",
    professor: professores[1],
    horario: "Terça e Quinta, 19h-21h",
    sala: "Lab 101",
  },
  {
    id: "3",
    nome: "Sistemas Operacionais",
    codigo: "U0548",
    professor: professores[2],
    horario: "Segunda e Quarta, 21h-23h",
    sala: "Lab 102",
  },
  {
    id: "4",
    nome: "Interface Homem Máquina",
    codigo: "U0295",
    professor: professores[3],
    horario: "Terça e Quinta, 21h-23h",
    sala: "Sala 305",
  },
];

export const atividades: Atividade[] = [
  {
    id: "1",
    disciplinaId: "1",
    tipo: "atividade",
    titulo: "Lista de Exercícios 01",
    descricao: "Exercícios sobre classes e objetos",
    dataEntrega: "2025-11-05",
    status: "pendente",
  },
  {
    id: "2",
    disciplinaId: "1",
    tipo: "trabalho",
    titulo: "Projeto Sistema de Vendas",
    descricao: "Desenvolvimento de sistema completo em Java",
    dataEntrega: "2025-11-15",
    status: "pendente",
  },
  {
    id: "3",
    disciplinaId: "2",
    tipo: "atividade",
    titulo: "Modelagem de Dados",
    descricao: "Criar modelo ER para sistema proposto",
    dataEntrega: "2025-10-20",
    status: "atrasada",
  },
  {
    id: "4",
    disciplinaId: "2",
    tipo: "aps",
    titulo: "APS - Projeto de BD",
    descricao: "Projeto completo de banco de dados",
    dataEntrega: "2025-11-30",
    status: "pendente",
  },
  {
    id: "5",
    disciplinaId: "3",
    tipo: "trabalho",
    titulo: "Documentação de Software",
    descricao: "Criar documentação completa usando UML",
    dataEntrega: "2025-11-10",
    status: "pendente",
  },
  {
    id: "6",
    disciplinaId: "4",
    tipo: "atividade",
    titulo: "Relatório sobre Processadores",
    descricao: "Pesquisa sobre arquitetura RISC vs CISC",
    dataEntrega: "2025-11-08",
    status: "pendente",
  },
  {
    id: "7",
    disciplinaId: "5",
    tipo: "aps",
    titulo: "APS - Configuração de Rede",
    descricao: "Projeto prático de configuração de rede",
    dataEntrega: "2025-12-01",
    status: "pendente",
  },
];

export const gradeCurricular: DisciplinaCurricular[] = [
  {
    semestre: 1,
    disciplinas: [
      { nome: "Comunicação Assertiva e Interpessoal", cargaHoraria: 60 },
      { nome: "Fundamentos de Bancos de Dados", cargaHoraria: 90 },
      { nome: "Lógica de Programação", cargaHoraria: 60 },
      { nome: "Lógica Matemática", cargaHoraria: 60 },
      { nome: "Organização e Arquitetura de Computadores", cargaHoraria: 60 },
    ],
  },
  {
    semestre: 2,
    disciplinas: [
      { nome: "Fundamentos de Análise e Projeto de Sistemas", cargaHoraria: 60 },
      { nome: "Interface Homem Máquina", cargaHoraria: 90 },
      { nome: "Projeto de Extensão: Laboratório Prático em Redes", cargaHoraria: 120 },
      { nome: "Projeto de Extensão: Prática Profissional e Gestão", cargaHoraria: 60 },
      { nome: "Redes de Computadores", cargaHoraria: 90 },
      { nome: "Sistemas Operacionais", cargaHoraria: 90 },
    ],
  },
  {
    semestre: 3,
    disciplinas: [
      { nome: "Direitos Humanos, Cultura e Diversidade", cargaHoraria: 60 },
      { nome: "Engenharia de Software", cargaHoraria: 60 },
      { nome: "Linguagem de Programação Orientada a Objetos", cargaHoraria: 90 },
      { nome: "Projeto de Extensão: Laboratório Prático de Banco de Dados", cargaHoraria: 120 },
      { nome: "Técnicas de Implementação de Banco de Dados", cargaHoraria: 90 },
      { nome: "Teste de Software", cargaHoraria: 60 },
    ],
  },
  {
    semestre: 4,
    disciplinas: [
      { nome: "Análise e Projeto de Sistemas Orientados a Objetos", cargaHoraria: 60 },
      { nome: "Desenvolvimento de Sistemas para Web", cargaHoraria: 60 },
      { nome: "Empreendedorismo", cargaHoraria: 60 },
      { nome: "Gerência de Projetos", cargaHoraria: 60 },
      { nome: "MUDE - Midset Universitário para Desenvolvimento de Empreendedores", cargaHoraria: 60 },
      { nome: "Projeto de Extensão: Sistemas para Empresas", cargaHoraria: 120 },
    ],
  },
  {
    semestre: 5,
    disciplinas: [
      { nome: "Computação em Nuvens", cargaHoraria: 90 },
      { nome: "Cyber Security", cargaHoraria: 60 },
      { nome: "Desenvolvimento de Aplicações Corporativas", cargaHoraria: 60 },
      { nome: "Métodos Avançados de Programação", cargaHoraria: 90 },
      { nome: "Projeto de Extensão: Projetos para Empresas", cargaHoraria: 120 },
      { nome: "Sistemas Distribuídos", cargaHoraria: 30 },
      { nome: "Tópicos Especiais em Sistemas de Informação", cargaHoraria: 60 },
    ],
  },
];
