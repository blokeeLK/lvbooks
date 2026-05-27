// ============================================================
//  LV Books — Dados do app
//  Edite aqui para adicionar/remover audiobooks, eBooks e bônus
// ============================================================

// Para links do Google Drive use o formato:
//   https://drive.google.com/uc?export=download&id=SEU_FILE_ID
// O FILE_ID está na URL de compartilhamento:
//   drive.google.com/file/d/  >FILE_ID<  /view

var LVData = {

  // ── AUDIOBOOKS ────────────────────────────────────────────
  audiobooks: [
    {
      id: 1,
      title: 'O Poder do Hábito',
      author: 'Charles Duhigg',
      cover: '../audio%20book/l1.jpg',
      audio: 'https://drive.google.com/uc?export=download&id=SEU_FILE_ID_AQUI'
    },
    {
      id: 2,
      title: 'Pai Rico, Pai Pobre',
      author: 'Robert Kiyosaki',
      cover: '../audio%20book/l3.png',
      audio: 'https://drive.google.com/uc?export=download&id=SEU_FILE_ID_AQUI'
    },
    {
      id: 3,
      title: 'Hábitos Atômicos',
      author: 'James Clear',
      cover: '../audio%20book/l7.png',
      audio: 'https://drive.google.com/uc?export=download&id=SEU_FILE_ID_AQUI'
    },
    {
      id: 4,
      title: 'Do Mil ao Milhão',
      author: 'Thiago Nigro',
      cover: '../audio%20book/l13.jpg',
      audio: 'https://drive.google.com/uc?export=download&id=SEU_FILE_ID_AQUI'
    },
    {
      id: 5,
      title: 'O Homem Mais Rico da Babilônia',
      author: 'George S. Clason',
      cover: '../audio%20book/l10.jpg',
      audio: 'https://drive.google.com/uc?export=download&id=SEU_FILE_ID_AQUI'
    },
    {
      id: 6,
      title: 'As 48 Leis do Poder',
      author: 'Robert Greene',
      cover: '../audio%20book/l1.png',
      audio: 'https://drive.google.com/uc?export=download&id=SEU_FILE_ID_AQUI'
    }
  ],

  // ── EBOOKS ───────────────────────────────────────────────
  ebooks: [
    {
      id: 1,
      title: 'Mindset — Carol S. Dweck',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    },
    {
      id: 2,
      title: 'Antifrágil — Nassim Taleb',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    },
    {
      id: 3,
      title: 'Rápido e Devagar — Daniel Kahneman',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    },
    {
      id: 4,
      title: 'Gatilhos Mentais — Gustavo Ferreira',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    },
    {
      id: 5,
      title: 'Os 7 Hábitos — Stephen Covey',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    },
    {
      id: 6,
      title: 'A Arte da Guerra — Sun Tzu',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    },
    {
      id: 7,
      title: 'O Ego é Seu Inimigo — Ryan Holiday',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    },
    {
      id: 8,
      title: 'A Psicologia Financeira — Morgan Housel',
      url: 'https://drive.google.com/file/d/SEU_FILE_ID_AQUI/view'
    }
  ],

  // ── BÔNUS ────────────────────────────────────────────────
  bonus: [
    {
      id: 1,
      title: 'Pasta Completa de Audiobooks',
      desc: 'Acesse todos os audiobooks disponíveis na coleção completa.',
      url: 'https://drive.google.com/drive/folders/SEU_FOLDER_ID_AQUI'
    },
    {
      id: 2,
      title: 'Pasta Completa de eBooks',
      desc: 'Mais de 3.000 títulos em PDF prontos para baixar.',
      url: 'https://drive.google.com/drive/folders/SEU_FOLDER_ID_AQUI'
    },
    {
      id: 3,
      title: 'Material Extra — Resumos',
      desc: 'Resumos dos principais best-sellers para leitura rápida.',
      url: 'https://drive.google.com/drive/folders/SEU_FOLDER_ID_AQUI'
    }
  ],

  // ── CONFIG ───────────────────────────────────────────────
  whatsapp: '5511999999999',  // Número com DDI + DDD, sem espaços ou símbolos
  whatsappMsg: 'Olá! Preciso de suporte com o LV Books.'
};
