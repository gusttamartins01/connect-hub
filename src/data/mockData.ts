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
    nome: "Programação Orientada a Objetos",
    codigo: "POO101",
    professor: professores[0],
    horario: "Segunda e Quarta, 19h-21h",
    sala: "Lab 101",
  },
  {
    id: "2",
    nome: "Banco de Dados",
    codigo: "BD201",
    professor: professores[1],
    horario: "Terça e Quinta, 19h-21h",
    sala: "Sala 205",
  },
  {
    id: "3",
    nome: "Engenharia de Software",
    codigo: "ES301",
    professor: professores[2],
    horario: "Segunda e Quarta, 21h-23h",
    sala: "Sala 310",
  },
  {
    id: "4",
    nome: "Arquitetura de Computadores",
    codigo: "AC401",
    professor: professores[3],
    horario: "Terça e Quinta, 21h-23h",
    sala: "Lab 102",
  },
  {
    id: "5",
    nome: "Redes de Computadores",
    codigo: "RC501",
    professor: professores[4],
    horario: "Sexta, 19h-23h",
    sala: "Lab 103",
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
      { nome: "Algoritmos e Programação", cargaHoraria: 80 },
      { nome: "Matemática Discreta", cargaHoraria: 60 },
      { nome: "Introdução à Computação", cargaHoraria: 40 },
      { nome: "Inglês Técnico I", cargaHoraria: 40 },
    ],
  },
  {
    semestre: 2,
    disciplinas: [
      { nome: "Estruturas de Dados", cargaHoraria: 80 },
      { nome: "Cálculo I", cargaHoraria: 60 },
      { nome: "Lógica de Programação", cargaHoraria: 60 },
      { nome: "Inglês Técnico II", cargaHoraria: 40 },
    ],
  },
  {
    semestre: 3,
    disciplinas: [
      { nome: "Programação Orientada a Objetos", cargaHoraria: 80 },
      { nome: "Banco de Dados I", cargaHoraria: 60 },
      { nome: "Sistemas Operacionais", cargaHoraria: 60 },
      { nome: "Estatística", cargaHoraria: 40 },
    ],
  },
  {
    semestre: 4,
    disciplinas: [
      { nome: "Engenharia de Software I", cargaHoraria: 80 },
      { nome: "Banco de Dados II", cargaHoraria: 60 },
      { nome: "Arquitetura de Computadores", cargaHoraria: 60 },
      { nome: "Interface Humano-Computador", cargaHoraria: 40 },
    ],
  },
  {
    semestre: 5,
    disciplinas: [
      { nome: "Engenharia de Software II", cargaHoraria: 80 },
      { nome: "Redes de Computadores", cargaHoraria: 80 },
      { nome: "Programação Web", cargaHoraria: 80 },
      { nome: "Segurança da Informação", cargaHoraria: 40 },
    ],
  },
  {
    semestre: 6,
    disciplinas: [
      { nome: "Inteligência Artificial", cargaHoraria: 60 },
      { nome: "Computação em Nuvem", cargaHoraria: 60 },
      { nome: "Desenvolvimento Mobile", cargaHoraria: 80 },
      { nome: "Empreendedorismo", cargaHoraria: 40 },
    ],
  },
  {
    semestre: 7,
    disciplinas: [
      { nome: "Trabalho de Conclusão de Curso I", cargaHoraria: 80 },
      { nome: "Tópicos Avançados em Computação", cargaHoraria: 60 },
      { nome: "Gestão de Projetos", cargaHoraria: 60 },
      { nome: "Ética e Legislação", cargaHoraria: 40 },
    ],
  },
  {
    semestre: 8,
    disciplinas: [
      { nome: "Trabalho de Conclusão de Curso II", cargaHoraria: 80 },
      { nome: "Estágio Supervisionado", cargaHoraria: 160 },
    ],
  },
];
