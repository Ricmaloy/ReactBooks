import { v4 as uuidv4 } from 'uuid'

export const books = [
  {
    id: uuidv4(),
    name: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    author: 'Zeno Rocha',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url:
      'public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.jpg',
    total_pages: 160,
    categories: [{ name: 'Educação' }, { name: 'Programação' }],
  },
  {
    id: uuidv4(),
    name: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    summary:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    cover_url: 'public/images/books/o-hobbit.jpg',
    total_pages: 360,
    categories: [{ name: 'Ficção' }, { name: 'Aventura' }],
  },
  {
    id: uuidv4(),
    name: 'O guia do mochileiro das galáxias',
    author: 'Douglas Adams',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/o-guia-do-mochileiro-das-galáxias.jpg',
    total_pages: 250,
    categories: [{ name: 'Ficção' }, { name: 'Geek' }],
  },
  {
    id: uuidv4(),
    name: 'A revolução dos bichos',
    author: 'George Orwell',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/a-revolucao-dos-bixos.jpg',
    total_pages: 350,
    categories: [{ name: 'Alegoria' }, { name: 'Fábula' }],
  },
  {
    id: uuidv4(),
    name: 'O fim da eternidade',
    author: 'Isaac Asimov',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/o-fim-da-eternidade.jpg',
    total_pages: 165,
    categories: [{ name: 'Ficção' }, { name: 'Romance' }],
  },
  {
    id: uuidv4(),
    name: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/entendendo-algoritmos.jpg',
    total_pages: 165,
    categories: [{ name: 'Programação' }, { name: 'Educação' }],
  },
  {
    id: uuidv4(),
    name: 'Código Limpo',
    author: 'Robert C. Martin',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/codigo-limpo.jpg',
    total_pages: 365,
    categories: [{ name: 'Programação' }, { name: 'Educação' }],
  },
  {
    id: uuidv4(),
    name: 'O poder do hábito',
    author: 'Charles Duhigg',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/o-poder-do-habito.jpg',
    total_pages: 288,
    categories: [{ name: 'Autoajuda' }, { name: 'Educação' }],
  },
  {
    id: uuidv4(),
    name: 'Arquitetura limpa',
    author: 'Robert C. Martin',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/arquitetura-limpa.jpg',
    total_pages: 288,
    categories: [{ name: 'Programação' }, { name: 'Educação' }],
  },
  {
    id: uuidv4(),
    name: 'Histórias extraordinárias',
    author: 'Edgar Allan Poe',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/historias-extraordinarias.jpg',
    total_pages: 332,
    categories: [{ name: 'Ficção' }, { name: 'Suspense' }],
  },
  {
    id: uuidv4(),
    name: 'Refatoração',
    author: 'Martin Fowler',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/historias-extraordinarias.jpg',
    total_pages: 332,
    categories: [{ name: 'Programação' }, { name: 'Educação' }],
  },
  {
    id: uuidv4(),
    name: 'Domain-Driven Design',
    author: 'Eric Evans',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/domain-driven-design.jpg',
    total_pages: 288,
    categories: [{ name: 'Programação' }, { name: 'Arquitetura' }],
  },
  {
    id: uuidv4(),
    name: 'Viagem ao Centro da Terra',
    author: 'Julio Verne',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/viagem-ao-centro-da-terra.jpg',
    total_pages: 288,
    categories: [{ name: 'Romance' }, { name: 'Ficção' }],
  },
  {
    id: uuidv4(),
    name: 'Fragmentos do Horror',
    author: 'Junji Ito',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/viagem-ao-centro-da-terra.jpg',
    total_pages: 144,
    categories: [{ name: 'Ficção' }, { name: 'Terror' }],
  },
  {
    id: uuidv4(),
    name: 'O Programador Pragmático',
    author: 'Andrew Hunt',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: 'public/images/books/o-programador-pragmatico.jpg',
    total_pages: 205,
    categories: [{ name: 'Programação' }, { name: 'Educação' }],
  },
]
