// ---- MENU MOBILE ----
document.addEventListener('DOMContentLoaded', function () {
  const toggle   = document.getElementById('navToggle');
  const menu     = document.getElementById('navMobileMenu');
  const overlay  = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('navClose');

  function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggle)   toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay)  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.nav-mobile-item').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});


const animaisData = [
  {
    id: 1, nome: 'Luna', especie: 'Cão', raca: 'Sem raça definida', sexo: 'Fêmea',
    idade: '2 anos', porte: 'Médio', cor: 'Preta',
    local: 'Abrigo Arca – Vila Velha, ES',
    vacinada: true, vermifugada: true, castrada: true, novo: false,
    desc: 'Luna é uma cadelinha dócil, brincalhona e muito carinhosa. Adora passeios e se dá bem com pessoas e outros cães.',
    img: 'img/luna.webp'
  },
  {
    id: 2, nome: 'Mimi', especie: 'Gato', raca: 'Siamês', sexo: 'Fêmea',
    idade: '1 ano', porte: 'Pequeno', cor: 'Bege',
    local: 'Abrigo Arca – Serra, ES',
    vacinada: true, vermifugada: true, castrada: false, novo: false,
    desc: 'Mimi é uma gatinha tranquila e independente. Gosta de ambientes calmos e adora receber carinho.',
    img: 'img/mimi.jpg'
  },
  {
    id: 3, nome: 'Thor', especie: 'Cão', raca: 'Labrador', sexo: 'Macho',
    idade: '3 anos', porte: 'Grande', cor: 'Caramelo',
    local: 'Abrigo Arca – Cariacica, ES',
    vacinada: true, vermifugada: true, castrada: true, novo: true,
    desc: 'Thor é um cão enérgico e protetor. Ama brincadeiras ao ar livre e é ótimo com crianças.',
    img: 'img/labrador.webp'
  },
  {
    id: 4, nome: 'Mel', especie: 'Gato', raca: 'Europeu Comum', sexo: 'Fêmea',
    idade: '2 anos', porte: 'Pequeno', cor: 'Laranja',
    local: 'Abrigo Arca – Vitória, ES',
    vacinada: true, vermifugada: false, castrada: true, novo: false,
    desc: 'Mel é uma gata curiosa e afetiva. Se adapta bem a apartamentos e convive bem com outros gatos.',
    img: 'img/mel.jpg'
  },
  {
    id: 5, nome: 'Fred', especie: 'Gato', raca: 'Sem raça definida', sexo: 'Macho',
    idade: '2 anos', porte: 'Médio', cor: 'Preto e Branco',
    local: 'Abrigo Arca – Vitória, ES',
    vacinada: true, vermifugada: true, castrada: true, novo: false,
    desc: 'Fred é um gato brincalhão e inteligente. Adora brinquedos e é muito carinhoso com seu tutor.',
    img: 'img/fred.jpg'
  },
  {
    id: 6, nome: 'Simba', especie: 'Gato', raca: 'Sem raça definida', sexo: 'Macho',
    idade: '1 ano', porte: 'Pequeno', cor: 'Laranja',
    local: 'Abrigo Arca – Serra, ES',
    vacinada: false, vermifugada: true, castrada: false, novo: false,
    desc: 'Simba é um filhote cheio de energia e curiosidade. Busca um lar paciente para crescer com amor.',
    img: 'img/simba.jpg'
  },
  {
    id: 7, nome: 'Nina', especie: 'Cão', raca: 'Poodle', sexo: 'Fêmea',
    idade: '4 anos', porte: 'Pequeno', cor: 'Branca',
    local: 'Abrigo Arca – Vila Velha, ES',
    vacinada: true, vermifugada: true, castrada: true, novo: false,
    desc: 'Nina é super carinhosa e apegada. Ideal para famílias que desejam uma companheira fiel.',
    img: 'img/nina.jpg'
  },
  {
    id: 8, nome: 'Luke', especie: 'Cão', raca: 'Golden Retriever', sexo: 'Macho',
    idade: '3 anos', porte: 'Grande', cor: 'Dourado',
    local: 'Abrigo Arca – Vitória, ES',
    vacinada: true, vermifugada: true, castrada: true, novo: true,
    desc: 'Luke é um golden gentil, dócil e sociável. Se dá muito bem com crianças e outros animais.',
    img: 'img/golden1.png'
  }
];

const heroAnimais = [
  { id: 8, nome: 'LUKE', breed: 'Golden Retriever', img: 'img/golden1.png' },
  { id: 3, nome: 'THOR', breed: 'Labrador', img: 'img/labrador.webp' },
  { id: 1, nome: 'LUNA', breed: 'Sem raça definida', img: 'img/luna.webp' }
];

const acompData = [
  {
    id: 'RE2024-0012', tipo: 'Resgate', img: 'img/escudo.png',
    local: 'Rua das Flores, 123, Centro – Vitória, ES',
    data: '12/05/2024 às 14:32', status: 'andamento',
    statusText: 'Em andamento',
    statusDesc: 'Nossa equipe foi acionada e está verificando a situação.'
  },
  {
    id: 'AD2024-0008', tipo: 'Adocao', img: 'img/adocao.jpg',
    local: 'Abrigo Arca – Vila Velha, ES',
    data: '05/05/2024 às 10:15', status: 'concluido',
    statusText: 'Concluído',
    statusDesc: 'Adoção confirmada! Obrigado por dar um novo lar.'
  },
  {
    id: 'DN2024-0005', tipo: 'Denuncia', img: 'img/denuncia.png',
    local: 'Av. Leitão da Silva, 2150, Gurigica – Vitória, ES',
    data: '02/05/2024 às 09:45', status: 'analise',
    statusText: 'Em análise',
    statusDesc: 'Sua denúncia está sendo analisada pela nossa equipe.'
  },
  {
    id: 'AC2024-0003', tipo: 'Acompanhamento', img: 'img/pata_azul.jpg',
    local: 'Abrigo Arca – Serra, ES',
    data: '28/04/2024 às 16:20', status: 'concluido',
    statusText: 'Concluído',
    statusDesc: 'Acompanhamento finalizado. Obrigado!'
  }
];


let currentPage = 'login';
let heroIdx = 0;
let listaFilter = 'Todos';
let acompFilter = 'Todas';
let selectedAnimalId = null;


let filtrosAtivos = {
  especie: '',
  sexo: '',
  porte: '',
  saude: []
};

function toggleFiltroPanel() {
  const panel = document.getElementById('filtro-panel');
  const btn = document.getElementById('btn-filtro-toggle');
  panel.classList.toggle('hidden');
  btn.classList.toggle('active');
}

function limparFiltros() {
  filtrosAtivos = { especie: '', sexo: '', porte: '', saude: [] };
  ['filtro-especie', 'filtro-sexo', 'filtro-porte'].forEach(gid => {
    const g = document.getElementById(gid);
    if (!g) return;
    g.querySelectorAll('.filtro-chip').forEach((c, i) => c.classList.toggle('active', i === 0));
  });
  document.querySelectorAll('#filtro-saude .filtro-chip').forEach(c => c.classList.remove('active'));
  atualizarContadorFiltros();
  renderListaAnimais();
}

function aplicarFiltros() {
  const getActive = (gid) => {
    const g = document.getElementById(gid);
    return g ? (g.querySelector('.filtro-chip.active')?.dataset.value || '') : '';
  };
  const getActiveMulti = (gid) => {
    const g = document.getElementById(gid);
    return g ? [...g.querySelectorAll('.filtro-chip.active')].map(c => c.dataset.value) : [];
  };

  filtrosAtivos.especie = getActive('filtro-especie');
  filtrosAtivos.sexo    = getActive('filtro-sexo');
  filtrosAtivos.porte   = getActive('filtro-porte');
  filtrosAtivos.saude   = getActiveMulti('filtro-saude');

  if (filtrosAtivos.especie) {
    listaFilter = filtrosAtivos.especie;
    document.querySelectorAll('.lista-tabs .tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filtrosAtivos.especie);
    });
  } else {
    listaFilter = 'Todos';
    document.querySelectorAll('.lista-tabs .tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === 'Todos');
    });
  }

  atualizarContadorFiltros();
  toggleFiltroPanel();
  renderListaAnimais();
  closeDetailPanel();
}

function atualizarContadorFiltros() {
  const total = (filtrosAtivos.especie ? 1 : 0)
    + (filtrosAtivos.sexo ? 1 : 0)
    + (filtrosAtivos.porte ? 1 : 0)
    + filtrosAtivos.saude.length;
  const badge = document.getElementById('filtro-count');
  if (!badge) return;
  if (total > 0) {
    badge.textContent = total;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}


let usuarios = [
  { nome: 'Admin Arca', email: 'admin@arca.com', senha: '123456' }
];
let usuarioLogado = null;

function fazerLogin() {
  const email = document.getElementById('login-email').value.trim();
  const senha = document.getElementById('login-senha').value;
  const erro = document.getElementById('login-erro');
  const erroMsg = document.getElementById('login-erro-msg');

  erro.style.display = 'none';

  if (!email || !senha) {
    erroMsg.textContent = 'Preencha o e-mail e a senha.';
    erro.style.display = 'block';
    return;
  }

  const user = usuarios.find(u => u.email === email && u.senha === senha);
usuarioLogado = user || { nome: 'Usuário', email: email, senha: '' };
  erro.style.display = 'none';
  goToPage('home');
}

function loginSocial() {
  
  usuarioLogado = { nome: 'Usuário', email: 'usuario@social.com', senha: '' };
  goToPage('home');
}

function fazerCadastro() {
  const nome = document.getElementById('cad-nome').value.trim();
  const email = document.getElementById('cad-email').value.trim();
  const senha = document.getElementById('cad-senha').value;
  const senha2 = document.getElementById('cad-senha2').value;
  const termos = document.getElementById('cad-termos').checked;
  const erro = document.getElementById('cad-erro');
  const erroMsg = document.getElementById('cad-erro-msg');
  const ok = document.getElementById('cad-ok');

  erro.style.display = 'none';
  ok.style.display = 'none';

  if (!nome || !email || !senha || !senha2) {
    erroMsg.textContent = 'Preencha todos os campos.';
    erro.style.display = 'block';
    return;
  }
  if (senha.length < 6) {
    erroMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    erro.style.display = 'block';
    return;
  }
  if (senha !== senha2) {
    erroMsg.textContent = 'As senhas não coincidem.';
    erro.style.display = 'block';
    return;
  }
  if (!termos) {
    erroMsg.textContent = 'Você precisa aceitar os termos de uso.';
    erro.style.display = 'block';
    return;
  }
  if (usuarios.find(u => u.email === email)) {
    erroMsg.textContent = 'Este e-mail já está cadastrado.';
    erro.style.display = 'block';
    return;
  }

  usuarios.push({ nome, email, senha });
  usuarioLogado = { nome, email, senha };
  ok.style.display = 'block';
  setTimeout(() => goToPage('home'), 1500);
}


function goToPage(page) {
  // Páginas públicas (sem login)
  const publicas = ['login', 'cadastro'];
  if (!publicas.includes(page) && !usuarioLogado) {
    goToPage('login');
    return;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const navbar = document.getElementById('navbar');
  const footer = document.querySelector('footer.footer');

  if (page === 'login' || page === 'cadastro') {
    navbar.classList.add('hidden');
    footer.style.display = 'none';
    document.getElementById('page-' + page).classList.remove('hidden');
  } else {
    navbar.classList.remove('hidden');
    footer.style.display = '';
    const el = document.getElementById('page-' + page);
    if (el) el.classList.remove('hidden');
  }


  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  currentPage = page;

  if (page === 'adocao') renderAnimaisGrid();
  if (page === 'adocao-lista') renderListaAnimais();
  if (page === 'acompanhamento') renderAcompList();

  window.scrollTo(0, 0);
}


document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-page]');
  if (btn) {
    const page = btn.getAttribute('data-page');
    goToPage(page);
  }
});


let heroInterval;
function updateHero() {
  const a = heroAnimais[heroIdx];
  const img = document.getElementById('hero-animal-img');
  const name = document.getElementById('hero-animal-name');
  const breed = document.getElementById('hero-animal-breed');
  const adoptBtn = document.getElementById('hero-adopt-btn');
  if (!img) return;
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = a.img;
    name.textContent = a.nome;
    breed.innerHTML = `<em>${a.breed}</em>`;
    img.style.opacity = '1';
    if (adoptBtn) adoptBtn.onclick = () => goToAnimalDetail(a.id);
  }, 250);
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === heroIdx));
}
function startHeroSlider() {
  heroInterval = setInterval(() => {
    heroIdx = (heroIdx + 1) % heroAnimais.length;
    updateHero();
  }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('hero-animal-img');
  if (img) img.style.transition = 'opacity 0.3s';

  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      heroIdx = (heroIdx - 1 + heroAnimais.length) % heroAnimais.length;
      updateHero();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      heroIdx = (heroIdx + 1) % heroAnimais.length;
      updateHero();
    });
  }
  startHeroSlider();

  
  const toggleSenha = document.getElementById('toggle-senha');
  if (toggleSenha) {
    toggleSenha.addEventListener('click', () => {
      const input = document.getElementById('login-senha');
      input.type = input.type === 'password' ? 'text' : 'password';
      toggleSenha.className = input.type === 'password'
        ? 'fa-regular fa-eye eye-toggle'
        : 'fa-regular fa-eye-slash eye-toggle';
    });
  }

  
  const toggleCadSenha = document.getElementById('toggle-cad-senha');
  if (toggleCadSenha) {
    toggleCadSenha.addEventListener('click', () => {
      const input = document.getElementById('cad-senha');
      input.type = input.type === 'password' ? 'text' : 'password';
      toggleCadSenha.className = input.type === 'password'
        ? 'fa-regular fa-eye eye-toggle'
        : 'fa-regular fa-eye-slash eye-toggle';
    });
  }

  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && currentPage === 'login') fazerLogin();
    if (e.key === 'Enter' && currentPage === 'cadastro') fazerCadastro();
    if (e.key === 'Enter' && currentPage === 'adocao') showAllAnimais();
  });

  
  const adocaoSearch = document.getElementById('adocao-search');
  if (adocaoSearch) {
    adocaoSearch.addEventListener('input', filterAnimais);
  }

  
  const adocaoSearchBtn = document.querySelector('#page-adocao .adocao-hero-search button');
  if (adocaoSearchBtn) {
    adocaoSearchBtn.addEventListener('click', showAllAnimais);
  }
  
  document.addEventListener('click', function(e) {
    const chip = e.target.closest('.filtro-chip');
    if (!chip) return;
    const group = chip.closest('.filtro-chips');
    if (!group) return;
    const isMulti = group.id === 'filtro-saude';
    if (isMulti) {
      chip.classList.toggle('active');
    } else {
      group.querySelectorAll('.filtro-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    }
  });

  setupCharCounter('resgate-desc', 'resgate-count');
  setupCharCounter('denuncia-desc', 'denuncia-count');

  
  goToPage('login');
});

function setupCharCounter(textareaId, countId) {
  const ta = document.getElementById(textareaId);
  const cnt = document.getElementById(countId);
  if (ta && cnt) {
    ta.addEventListener('input', () => { cnt.textContent = ta.value.length; });
  }
}


function gerarProtocolo(prefix) {
  const ano = new Date().getFullYear();
  const num = String(Math.floor(Math.random() * 9000) + 1000);
  return `${prefix}${ano}-${num}`;
}

function dataAgora() {
  const now = new Date();
  return now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function showConfirmacao(type) {
  const blocks = ['resgate', 'adocao', 'castracao', 'denuncia'];
  blocks.forEach(b => {
    const el = document.getElementById(`confirmacao-${b}-block`);
    if (el) el.classList.add('hidden');
  });

  const titles = {
    resgate: 'Resgate confirmado!',
    adocao: 'Adoção confirmada!',
    castracao: 'Castração confirmada!',
    denuncia: 'Denúncia confirmada!'
  };
  const descs = {
    resgate: 'Sua solicitação foi recebida com sucesso.<br>Nossa equipe já foi informada e entrará em ação o quanto antes.',
    adocao: 'Sua solicitação de adoção foi recebida com sucesso.<br>Nossa equipe entrará em contato em breve para dar continuidade ao processo.',
    castracao: 'Sua solicitação de castração foi recebida com sucesso.<br>Nossa equipe entrará em contato em breve para dar continuidade ao processo.',
    denuncia: 'Sua denúncia foi recebida com sucesso.<br>Nossa equipe entrará em contato em breve para dar continuidade ao processo.'
  };

  document.getElementById('confirmacao-titulo').textContent = titles[type];
  document.getElementById('confirmacao-desc').innerHTML = descs[type];

  
  if (type === 'resgate') {
    const nome     = document.getElementById('resgate-nome')?.value.trim() || '—';
    const endereco = document.getElementById('resgate-endereco')?.value.trim() || '—';
    const tipo     = document.getElementById('resgate-tipo')?.value || '—';
    const urgencia = document.getElementById('resgate-urgencia')?.value || '—';
    const protocolo = gerarProtocolo('RE');
    const data      = dataAgora();

    document.getElementById('resgate-confirm-data').textContent      = data;
    document.getElementById('resgate-confirm-local').textContent     = endereco;
    document.getElementById('resgate-confirm-protocolo').textContent = '#' + protocolo;
    document.getElementById('resgate-confirm-tipo').textContent      = tipo;
    document.getElementById('resgate-confirm-nome').textContent      = nome;
    document.getElementById('resgate-confirm-urgencia').textContent  = urgencia;

    adicionarAoAcompanhamento({
      id: protocolo,
      tipo: 'Resgate',
      img: 'img/escudo.png',
      local: endereco,
      data,
      status: 'analise',
      statusText: 'Em análise',
      statusDesc: `Solicitação de resgate recebida. Nossa equipe foi acionada.`
    });

    document.getElementById('confirmacao-resgate-block').classList.remove('hidden');

  
  } else if (type === 'adocao') {
    const animal = animaisData.find(a => a.id === selectedAnimalId);
    const block = document.getElementById('confirmacao-adocao-block');
    if (block && animal) {
      const protocolo = gerarProtocolo('AD');
      block.innerHTML = `
        <h3>Resumo da solicitação</h3>
        <div class="resumo-card">
          <img src="${animal.img}" alt="${animal.nome}" />
          <div class="resumo-info">
            <div class="resumo-row">
              <div><i class="fa-solid fa-paw"></i><div><span>Animal</span><strong>${animal.nome}</strong></div></div>
              <div><i class="fa-solid fa-location-dot"></i><div><span>Local do animal</span><strong>${animal.local}</strong></div></div>
            </div>
            <div class="resumo-row">
              <div><i class="fa-regular fa-calendar"></i><div><span>Data da solicitação</span><strong>${dataAgora()}</strong></div></div>
              <div><i class="fa-solid fa-heart"></i><div><span>Tipo de adoção</span><strong>Adoção Responsável</strong></div></div>
            </div>
            <div class="resumo-row">
              <div><i class="fa-solid fa-tag"></i><div><span>Protocolo</span><strong class="protocol">#${protocolo}</strong></div></div>
              <div><i class="fa-solid fa-paw"></i><div><span>Raça</span><strong>${animal.raca}</strong></div></div>
            </div>
          </div>
        </div>
        <div class="proximos-passos">
          <i class="fa-solid fa-circle-info"></i>
          <div><strong>Próximos passos</strong><p>Nossa equipe analisará suas informações e entrará em contato para os próximos passos da adoção de <strong>${animal.nome}</strong>.</p></div>
        </div>
      `;
      
      adicionarAoAcompanhamento({
        id: protocolo,
        tipo: 'Adocao',
        img: animal.img,
        local: animal.local,
        data: dataAgora(),
        status: 'analise',
        statusText: 'Em análise',
        statusDesc: `Solicitação de adoção de ${animal.nome} está sendo analisada pela nossa equipe.`
      });
    }
    block.classList.remove('hidden');
  } else if (type === 'castracao') {
    const nomeAnimal = document.getElementById('cast-nome-animal')?.value.trim() || '—';
    const especie   = document.getElementById('cast-especie')?.value || '—';
    const porte     = document.getElementById('cast-porte')?.value || '—';
    const nomeResp  = document.getElementById('cast-nome-resp')?.value.trim() || '—';
    const bairro    = document.getElementById('cast-bairro')?.value.trim() || '';
    const municipio = document.getElementById('cast-municipio')?.value || '';
    const estado    = document.getElementById('cast-estado')?.value || '';
    const sexoEl    = document.querySelector('input[name="sexo-cast"]:checked');
    const sexo      = sexoEl ? sexoEl.value : '';
    const protocolo = gerarProtocolo('CA');
    const data      = dataAgora();
    const local     = [bairro, municipio, estado].filter(Boolean).join(', ') || 'Não informado';

    document.getElementById('cast-confirm-nome').textContent      = nomeAnimal + (sexo ? ` (${sexo})` : '');
    document.getElementById('cast-confirm-local').textContent     = local;
    document.getElementById('cast-confirm-data').textContent      = data;
    document.getElementById('cast-confirm-resp').textContent      = nomeResp;
    document.getElementById('cast-confirm-protocolo').textContent = '#' + protocolo;
    document.getElementById('cast-confirm-especie').textContent   = [especie, porte].filter(v => v && v !== '—').join(' · ') || '—';
    document.getElementById('cast-confirm-desc').textContent      = `Nossa equipe analisará suas informações e entrará em contato para os próximos passos da castração de ${nomeAnimal}.`;

    adicionarAoAcompanhamento({
      id: protocolo,
      tipo: 'Acompanhamento',
      img: 'img/pata_azul.jpg',
      local,
      data,
      status: 'analise',
      statusText: 'Em análise',
      statusDesc: `Solicitação de castração de ${nomeAnimal} recebida. Aguardando análise.`
    });

    document.getElementById('confirmacao-castracao-block').classList.remove('hidden');
  } else {
    
    const block = document.getElementById(`confirmacao-${type}-block`);
    if (block) block.classList.remove('hidden');

    if (type === 'denuncia') {
      adicionarAoAcompanhamento({
        id: gerarProtocolo('DN'),
        tipo: 'Denuncia',
        img: 'img/denuncia.png',
        local: 'Aguardando confirmação',
        data: dataAgora(),
        status: 'analise',
        statusText: 'Em análise',
        statusDesc: 'Denúncia recebida. Nossa equipe está analisando.'
      });
    }
  }

  goToPage('confirmacao');
}

function verDetalheAcomp(id) {
  const item = acompData.find(a => a.id === id);
  if (!item) { goToPage('acomp-detalhe'); return; }

  // Cabeçalho
  const proto = document.querySelector('.acomp-detalhe-protocolo');
  if (proto) proto.textContent = '#' + item.id;

  const statusEl = document.querySelector('.acomp-detalhe-status');
  if (statusEl) {
    statusEl.className = 'status-badge ' + item.status + ' acomp-detalhe-status';
    statusEl.textContent = item.statusText;
  }

  const imgEl = document.querySelector('.acomp-detalhe-img');
  if (imgEl) imgEl.src = item.img;

  const localEl = document.querySelector('.acomp-detalhe-local');
  if (localEl) localEl.textContent = item.local;

  const dataEl = document.querySelector('.acomp-detalhe-data');
  if (dataEl) dataEl.textContent = item.data;

  const descEl = document.querySelector('.acomp-detalhe-desc');
  if (descEl) descEl.textContent = item.statusDesc;

  
  const subtitulo = document.getElementById('acomp-detalhe-subtitulo');
  const subtitulosMap = {
    Resgate: 'Acompanhe o andamento da sua solicitação de resgate.',
    Adocao: 'Acompanhe o andamento do processo de adoção.',
    Acompanhamento: 'Acompanhe o andamento da sua solicitação de castração.',
    Denuncia: 'Acompanhe o andamento da sua denúncia.'
  };
  if (subtitulo) subtitulo.textContent = subtitulosMap[item.tipo] || 'Acompanhe o andamento da sua solicitação.';

  
  const timelines = {
    Resgate: [
      { titulo: 'Solicitação recebida',   desc: 'Recebemos sua solicitação de resgate.',                  estado: 'done'    },
      { titulo: 'Análise da equipe',       desc: 'Nossa equipe está analisando as informações.',           estado: 'done'    },
      { titulo: 'Equipe a caminho',        desc: 'Nossa equipe está a caminho do local.',                  estado: 'active'  },
      { titulo: 'Animal seguro',           desc: 'O animal foi resgatado com sucesso e está seguro.',      estado: 'pending' },
      { titulo: 'Encaminhamento',          desc: 'O animal será encaminhado para avaliação e cuidados.',   estado: 'pending' },
      { titulo: 'Acolhimento',             desc: 'O animal foi acolhido e receberá todos os cuidados.',    estado: 'pending' },
    ],
    Adocao: [
      { titulo: 'Solicitação recebida',   desc: 'Recebemos sua solicitação de adoção.',                   estado: 'done'    },
      { titulo: 'Análise do perfil',       desc: 'Nossa equipe está analisando seu perfil de adotante.',   estado: 'done'    },
      { titulo: 'Contato inicial',         desc: 'Entraremos em contato para agendar uma entrevista.',     estado: 'active'  },
      { titulo: 'Entrevista',              desc: 'Conversa para conhecer melhor o futuro lar do animal.',  estado: 'pending' },
      { titulo: 'Aprovação',               desc: 'Análise final e aprovação da adoção.',                   estado: 'pending' },
      { titulo: 'Adoção concluída',        desc: 'O animal foi entregue ao novo lar com sucesso!',         estado: 'pending' },
    ],
    Acompanhamento: [
      { titulo: 'Solicitação recebida',   desc: 'Recebemos sua solicitação de castração.',                estado: 'done'    },
      { titulo: 'Análise da solicitação', desc: 'Nossa equipe está analisando os dados do animal.',       estado: 'done'    },
      { titulo: 'Agendamento',             desc: 'Aguardando agendamento do procedimento.',                estado: 'active'  },
      { titulo: 'Procedimento',            desc: 'Realização do procedimento de castração.',               estado: 'pending' },
      { titulo: 'Recuperação',             desc: 'O animal está em período de recuperação.',               estado: 'pending' },
      { titulo: 'Alta',                    desc: 'O animal recebeu alta e está bem!',                      estado: 'pending' },
    ],
    Denuncia: [
      { titulo: 'Denúncia recebida',      desc: 'Recebemos sua denúncia. Obrigado por reportar.',         estado: 'done'    },
      { titulo: 'Análise',                 desc: 'Nossa equipe está analisando as informações enviadas.',  estado: 'done'    },
      { titulo: 'Investigação',            desc: 'A situação está sendo investigada por nossa equipe.',    estado: 'active'  },
      { titulo: 'Ação no local',           desc: 'Nossa equipe foi ao local verificar a situação.',        estado: 'pending' },
      { titulo: 'Providências tomadas',    desc: 'As providências necessárias foram tomadas.',             estado: 'pending' },
      { titulo: 'Caso encerrado',          desc: 'O caso foi resolvido e encerrado com sucesso.',          estado: 'pending' },
    ],
  };

  const passos = timelines[item.tipo] || timelines['Resgate'];
  const container = document.getElementById('acomp-timeline-dinamico');
  if (!container) { goToPage('acomp-detalhe'); return; }

  container.innerHTML = passos.map((p, i) => {
    const dotIcon = p.estado === 'done'
      ? '<i class="fa-solid fa-check"></i>'
      : p.estado === 'active'
        ? '<i class="fa-regular fa-clock"></i>'
        : '';
    const badge = p.estado === 'done'
      ? '<span class="status-badge concluido">Concluído</span>'
      : p.estado === 'active'
        ? '<span class="status-badge andamento">Em andamento</span>'
        : '<span class="status-badge pendente">Pendente</span>';
    const dataStr = p.estado !== 'pending' ? `<span class="timeline-date">${item.data}</span>` : '';
    return `
      <div class="timeline-item ${p.estado}">
        <div class="timeline-dot ${p.estado}">${dotIcon}</div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-title">${p.titulo}</span>
            ${dataStr}
            ${badge}
          </div>
          <p>${p.desc}</p>
        </div>
      </div>`;
  }).join('');

  goToPage('acomp-detalhe');
}

function adicionarAoAcompanhamento(item) {
  
  const existe = acompData.find(a => a.id === item.id);
  if (!existe) acompData.unshift(item);
}


function renderAnimaisGrid() {
  const grid = document.getElementById('animais-grid');
  if (!grid) return;
  const animais = animaisData.slice(0, 4);
  grid.innerHTML = animais.map(a => animalCardHTML(a)).join('');
}

function animalCardHTML(a) {
  const tag = a.especie === 'Gato' ? 'gato' : 'cachorro';
  return `
    <div class="animal-card" onclick="goToAnimalDetail(${a.id})">
      <div class="animal-card-img">
        <img src="${a.img}" alt="${a.nome}" loading="lazy" />
        ${a.novo ? `<span class="novo-badge">Novo</span>` : ''}
        <button class="btn-fav" onclick="toggleFav(event, ${a.id})"><i class="fa-regular fa-heart"></i></button>
      </div>
      <div class="animal-card-info">
        <h4>${a.nome}</h4>
        <p><span>${a.idade}</span><span>${a.sexo}</span></p>
        <span class="species-badge ${tag}">${a.especie}</span>
      </div>
    </div>
  `;
}

function goToAnimalDetail(id) {
  goToPage('adocao-lista');
  setTimeout(() => openDetailPanel(id), 100);
}

function toggleFav(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const icon = btn.querySelector('i');
  btn.classList.toggle('active');
  icon.className = btn.classList.contains('active') ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  icon.style.color = btn.classList.contains('active') ? '#dc3545' : '';
}

function showAllAnimais() {
  
  const { especie, idade, search } = getFilterValues();

  goToPage('adocao-lista');

  setTimeout(() => {
    
    const listaSearch = document.getElementById('lista-search');
    if (listaSearch && search) listaSearch.value = search;

    
    if (especie) {
      listaFilter = especie;
      document.querySelectorAll('.lista-tabs .tab-btn').forEach(b => {
        const f = b.getAttribute('data-filter');
        b.classList.toggle('active', f === especie);
      });
    }

    renderListaAnimaisComFiltros(search, idade);
  }, 50);
}


function categoriaIdade(idadeStr) {
  const s = idadeStr.toLowerCase();
  // filhote: menos de 1 ano
  if (s.includes('mes') || s.includes('mês') || s.includes('meses') || s === '0') return 'filhote';
  // idoso: 8 anos ou mais
  const match = s.match(/(\d+)/);
  if (match) {
    const anos = parseInt(match[1]);
    if (anos < 2) return 'filhote';
    if (anos >= 8) return 'idoso';
    return 'adulto';
  }
  return 'adulto';
}

function getFilterValues() {
  return {
    especie: document.getElementById('adocao-especie')?.value || '',
    idade:   document.getElementById('adocao-idade')?.value || '',
    search:  document.getElementById('adocao-search')?.value?.toLowerCase().trim() || ''
  };
}

function applyFilters(data, { especie, idade, search }) {
  let filtered = data;
  if (especie) filtered = filtered.filter(a => a.especie === especie);
  if (idade)   filtered = filtered.filter(a => categoriaIdade(a.idade) === idade);
  if (search)  filtered = filtered.filter(a =>
    a.nome.toLowerCase().includes(search) ||
    a.raca.toLowerCase().includes(search) ||
    a.especie.toLowerCase().includes(search)
  );
  return filtered;
}

function filterAnimais() {
  const filters = getFilterValues();
  const filtered = applyFilters(animaisData, filters);
  const grid = document.getElementById('animais-grid');
  if (!grid) return;
  grid.innerHTML = filtered.length
    ? filtered.map(a => animalCardHTML(a)).join('')
    : '<p style="color:#888;padding:20px;grid-column:1/-1">Nenhum animal encontrado.</p>';
}


function renderListaAnimais() {
  renderListaAnimaisComFiltros();
}

function renderListaAnimaisComFiltros(searchExtra, idadeExtra) {
  const grid = document.getElementById('animais-lista-grid');
  if (!grid) return;

  const searchVal = searchExtra || document.getElementById('lista-search')?.value?.toLowerCase().trim() || '';
  const idadeVal  = idadeExtra || '';

  let filtered = animaisData;
  if (listaFilter !== 'Todos') filtered = filtered.filter(a => a.especie === listaFilter);
  if (idadeVal) filtered = filtered.filter(a => categoriaIdade(a.idade) === idadeVal);
  if (searchVal) filtered = filtered.filter(a =>
    a.nome.toLowerCase().includes(searchVal) ||
    a.raca.toLowerCase().includes(searchVal) ||
    a.especie.toLowerCase().includes(searchVal)
  );
  
  if (filtrosAtivos.sexo)  filtered = filtered.filter(a => a.sexo === filtrosAtivos.sexo);
  if (filtrosAtivos.porte) filtered = filtered.filter(a => a.porte === filtrosAtivos.porte);
  if (filtrosAtivos.saude.length) {
    filtered = filtered.filter(a => filtrosAtivos.saude.every(s => a[s] === true));
  }

  grid.innerHTML = filtered.length
    ? filtered.map(a => animalListaCardHTML(a)).join('')
    : '<p style="color:#888;padding:20px;grid-column:1/-1">Nenhum animal encontrado.</p>';
}

function animalListaCardHTML(a) {
  const tag = a.especie === 'Gato' ? 'gato' : 'cao';
  const sel = selectedAnimalId === a.id ? 'selected' : '';
  return `
    <div class="animal-lista-card ${sel}" onclick="openDetailPanel(${a.id})">
      <div style="position:relative">
        <img src="${a.img}" alt="${a.nome}" loading="lazy" />
        <button class="btn-fav" onclick="toggleFav(event, ${a.id})"><i class="fa-regular fa-heart"></i></button>
      </div>
      <div class="animal-lista-card-info">
        <span class="animal-tag ${tag}">${a.especie}</span>
        <h4>${a.nome}</h4>
        <p>${a.sexo} • ${a.idade} • ${a.porte} porte</p>
        <p class="location"><i class="fa-solid fa-location-dot"></i> ${a.local}</p>
      </div>
    </div>
  `;
}

function setTabFilter(el, filter) {
  document.querySelectorAll('.lista-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  listaFilter = filter;
  renderListaAnimais();
  closeDetailPanel();
}

function openDetailPanel(id) {
  selectedAnimalId = id;
  const a = animaisData.find(x => x.id === id);
  if (!a) return;
  const panel = document.getElementById('animal-detail-panel');
  const layout = document.querySelector('.lista-grid-layout');
  const content = document.getElementById('detail-panel-content');
  panel.classList.remove('hidden');
  layout.classList.add('with-panel');

  content.innerHTML = `
    <img src="${a.img}" alt="${a.nome}" />
    <div class="detail-info">
      <div class="detail-name-row">
        <h3>${a.nome}</h3>
        <span class="animal-tag ${a.especie === 'Gato' ? 'gato' : 'cao'}">${a.especie}</span>
      </div>
      <div class="detail-attrs">
        <span class="detail-attr"><i class="fa-solid fa-venus-mars"></i> ${a.sexo}</span>
        <span class="detail-attr"><i class="fa-regular fa-calendar"></i> ${a.idade}</span>
        <span class="detail-attr"><i class="fa-solid fa-paw"></i> ${a.porte} porte</span>
      </div>
      <div class="detail-sobre">
        <h4>Sobre ${a.nome}</h4>
        <p>${a.desc}</p>
      </div>
      <div class="detail-health">
        <div class="detail-health-row"><span><i class="fa-solid fa-shield-halved"></i> Vacinada</span><span>${a.vacinada ? 'Sim' : 'Não'}</span></div>
        <div class="detail-health-row"><span><i class="fa-solid fa-pills"></i> Vermifugada</span><span>${a.vermifugada ? 'Sim' : 'Não'}</span></div>
        <div class="detail-health-row"><span><i class="fa-solid fa-scissors"></i> Castrada</span><span>${a.castrada ? 'Sim' : 'Não'}</span></div>
      </div>
      <div class="detail-local">
        <span><i class="fa-solid fa-location-dot"></i> Local</span>
        <span>${a.local}</span>
      </div>
      <button class="btn-interesse" onclick="showConfirmacao('adocao')">
        <i class="fa-solid fa-heart"></i> Tenho interesse em adotar
      </button>
    </div>
  `;

  renderListaAnimais(); 
}

function closeDetailPanel() {
  selectedAnimalId = null;
  const panel = document.getElementById('animal-detail-panel');
  const layout = document.querySelector('.lista-grid-layout');
  if (panel) panel.classList.add('hidden');
  if (layout) layout.classList.remove('with-panel');
  renderListaAnimais();
}


function renderAcompList() {
  const list = document.getElementById('acomp-list');
  if (!list) return;
  let data = acompData;
  if (acompFilter !== 'Todas') {
    data = data.filter(a => a.tipo === acompFilter);
  }
  list.innerHTML = data.map(item => acompItemHTML(item)).join('');
}

function acompItemHTML(item) {
  const tipoBadge = {
    Resgate: 'resgate', Adocao: 'adocao', Denuncia: 'denuncia', Acompanhamento: 'acompanhamento'
  };
  const tipoLabel = {
    Resgate: 'Resgate', Adocao: 'Adoção', Denuncia: 'Denúncia', Acompanhamento: 'Acompanhamento'
  };
  return `
    <div class="acomp-item">
      <img src="${item.img}" alt="Animal" />
      <div class="acomp-item-info">
        <span class="acomp-type-badge ${tipoBadge[item.tipo]}">${tipoLabel[item.tipo]}</span>
        <h4>Protocolo:#${item.id}</h4>
        <p><i class="fa-solid fa-location-dot"></i> ${item.local}</p>
        <p><i class="fa-regular fa-calendar"></i> Solicitado em ${item.data}</p>
      </div>
      <div class="acomp-item-status">
        <div class="acomp-item-status-row">
          <span class="status-badge ${item.status}">${item.statusText}</span>
        </div>
        <p>${item.statusDesc}</p>
        <button class="btn-ver-detalhes" onclick="verDetalheAcomp('${item.id}')">Ver detalhes <i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  `;
}

function setAcompTab(el, filter) {
  document.querySelectorAll('.acomp-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  acompFilter = filter;
  renderAcompList();
}


function abrirEsqueciSenha() {
  const modal = document.getElementById('modal-esqueci');
  const step1 = document.getElementById('esqueci-step-1');
  const step2 = document.getElementById('esqueci-step-2');
  const erro  = document.getElementById('esqueci-erro');
  const input = document.getElementById('esqueci-email');
  if (!modal) return;

  
  step1.style.display = 'block';
  step2.style.display = 'none';
  erro.style.display  = 'none';
  if (input) input.value = '';

  modal.style.display = 'flex';
  setTimeout(() => { if (input) input.focus(); }, 100);
}

function fecharEsqueciSenha() {
  const modal = document.getElementById('modal-esqueci');
  if (modal) modal.style.display = 'none';
}

function enviarRecuperacao() {
  const input = document.getElementById('esqueci-email');
  const erro  = document.getElementById('esqueci-erro');
  const step1 = document.getElementById('esqueci-step-1');
  const step2 = document.getElementById('esqueci-step-2');
  const emailEnviado = document.getElementById('esqueci-email-enviado');
  if (!input || !erro) return;

  const email = input.value.trim();

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    erro.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Digite um e-mail válido.';
    erro.style.display = 'block';
    input.focus();
    return;
  }

  
  erro.style.display = 'none';
  if (emailEnviado) emailEnviado.textContent = email;
  step1.style.display = 'none';
  step2.style.display = 'block';
}


document.addEventListener('click', function(e) {
  const modal = document.getElementById('modal-esqueci');
  if (modal && e.target === modal) fecharEsqueciSenha();
});


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fecharEsqueciSenha();
 
  if (e.key === 'Enter') {
    const modal = document.getElementById('modal-esqueci');
    if (modal && modal.style.display === 'flex') enviarRecuperacao();
  }
});
document.addEventListener('click', function(e) {
  const box = e.target.closest('.upload-box');
  if (box) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/mp4';
    input.multiple = true;
    input.onchange = (ev) => {
      const files = ev.target.files;
      if (files.length > 0) {
        box.querySelector('span').textContent = `${files.length} arquivo(s) selecionado(s)`;
        box.style.borderColor = '#1a7a9a';
        box.style.background = '#e8f5f9';
      }
    };
    input.click();
  }
});