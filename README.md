# Tutankhamal Dev - Portfólio Interativo Universo Cósmico

## Visão Geral

Este projeto é um portfólio web profissional multi-página que serve como vitrine digital para um Desenvolvedor Web e Designer Front-End. O site apresenta um design moderno com tema espacial cósmico, repleto de animações interativas e efeitos visuais avançados criados com HTML5, CSS3 e JavaScript ES6+ puros. O objetivo é demonstrar habilidades técnicas em desenvolvimento front-end, design de interfaces e criação de experiências de usuário imersivas e envolventes.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

### Páginas Principais
- `index.html`: Página inicial com hero section, carrossel de benefícios e seções de tecnologias
- `sobre.html`: Página de apresentação pessoal com cartão de perfil interativo
- `portifolio.html`: Showcase de projetos com integração GitHub API e galeria de sites
- `contato.html`: Página de contato com cards interativos e formulários de orçamento

### Estrutura de Assets
- `assets/css/style.css`: Folha de estilos principal (3.425+ linhas) com sistema completo de design
- `assets/js/script.js`: Engine principal de interatividade (2.000+ linhas) controlando o universo animado
- `assets/js/github.js`: Módulo de integração com GitHub API (767 linhas) com cache inteligente
- `assets/images/`: Biblioteca completa de recursos visuais
  - `icons/`: Ícones e elementos gráficos
  - `team/`: Fotos da equipe
  - `news/`: Imagens de notícias
  - `partnerlogos/`: Logos de parceiros
  - `rocket_sprite.png`: Sprite do foguete para animações
  - `iss_sprite.png`: Sprite da Estação Espacial Internacional
  - `mummy.gif`: Logo animado da marca
- `assets/products/`: Thumbnails de produtos e projetos
- `assets/audio/`: Recursos de áudio (reservado para futuras implementações)

### Arquivos de Configuração
- `robots.txt`: Configurações para crawlers de busca
- `sitemap.xml`: Mapa do site para SEO
- `CODE_QUALITY_GUIDE.md`: Guia de qualidade de código do projeto

## Tecnologias Utilizadas

### Frontend Core
- **HTML5**: Estrutura semântica moderna com meta tags otimizadas para SEO
- **CSS3**: Sistema avançado de estilos com variáveis CSS, Grid, Flexbox, animações e transformações 3D
- **JavaScript ES6+**: Programação orientada a objetos, módulos ES6, async/await, e APIs modernas

### APIs e Integrações
- **GitHub API v4**: Integração completa para exibição de repositórios e estatísticas
- **Canvas API**: Renderização de gráficos 2D para o universo interativo
- **Intersection Observer API**: Detecção de elementos visíveis para animações
- **Local Storage API**: Sistema de cache para otimização de performance

### Ferramentas de Desenvolvimento
- **Font Awesome**: Biblioteca de ícones vetoriais
- **Google Fonts**: Tipografia personalizada (Orbitron, Exo 2)
- **Responsive Design**: Mobile-first approach com breakpoints otimizados

### SEO e Performance
- **Meta Tags Otimizadas**: Open Graph, Twitter Cards, JSON-LD
- **Sitemap XML**: Mapeamento completo para crawlers
- **Cache Strategy**: Sistema inteligente de cache com fallback
- **Lazy Loading**: Carregamento otimizado de recursos

## Principais Funcionalidades

### 1. 🌌 Background Interativo Dinâmico do Universo

O destaque principal do site é um universo completamente interativo e dinâmico criado com Canvas API:

#### Elementos Cósmicos
- **Campo de Estrelas**: Milhares de estrelas com movimento parallax em múltiplas camadas
- **Nebulosas Dinâmicas**: Nuvens cósmicas coloridas com gradientes animados
- **Poeira Cósmica**: Partículas microscópicas que adicionam profundidade
- **Cometas**: Objetos com trilhas luminosas que atravessam o espaço
- **Meteoros**: Fragmentos espaciais com efeitos de combustão
- **Naves Espaciais**: Veículos futuristas com propulsão animada
- **Estação Espacial Internacional (ISS)**: Modelo realista com efeitos de fade

#### Interatividade Avançada
- **Efeito de Repulsão**: Estrelas e objetos se afastam do cursor do mouse
- **Sistema de Colisões**: Detecção e resposta a colisões entre objetos
- **Efeitos de Explosão**: Animações de impacto com partículas
- **Easter Egg Black Hole**: Segure o botão esquerdo do mouse por 10 segundos para criar um buraco negro que atrai objetos em órbita

#### Otimizações de Performance
- **Detecção de Dispositivo**: Redução automática de partículas em mobile
- **FPS Adaptativo**: Ajuste dinâmico da taxa de quadros
- **Hardware Acceleration**: Uso de `translateZ(0)` para GPU
- **Viewport Optimization**: Ajustes específicos para diferentes resoluções

### 2. 🧭 Navbar Interativa Inteligente

#### Sistema Auto-Hide/Show
- **Detecção de Scroll**: Navbar se oculta ao rolar para baixo e reaparece ao rolar para cima
- **Transições Suaves**: Animações fluidas de entrada e saída
- **Estado Transparente**: Fundo semi-transparente com efeito blur

#### Menu Hamburger Responsivo
- **Conversão Automática**: Transforma em menu hamburger em dispositivos móveis
- **Animação de Ícone**: Transformação suave do ícone hamburger
- **Overlay Navigation**: Menu fullscreen em mobile com animações

### 3. 🚀 Hero Section Animada

#### Estilo Flutuante no Espaço
- **Animações CSS 3D**: Transformações tridimensionais para efeito de flutuação
- **Parallax Scrolling**: Movimento diferenciado dos elementos
- **Efeitos de Profundidade**: Múltiplas camadas com z-index dinâmico

#### Animação de Digitação
- **Typewriter Effect**: Simulação realista de digitação
- **Cursor Piscante**: Cursor animado que simula terminal
- **Velocidade Variável**: Diferentes velocidades para diferentes textos
- **Múltiplas Linhas**: Suporte para textos complexos com pausas

### 4. 🎨 Identidade Visual e Design System

#### Tema Neon Espacial
- **Paleta de Cores**: Neons vibrantes (ciano, magenta, amarelo, verde)
- **Efeitos de Brilho**: Box-shadow e text-shadow para efeitos luminosos
- **Gradientes Dinâmicos**: Transições de cor suaves e animadas

#### Sistema de Transparências
- **Backdrop Blur**: Efeitos de desfoque em elementos sobrepostos
- **Alpha Channels**: Transparências calculadas para máxima legibilidade
- **Glass Morphism**: Efeitos de vidro fosco em cards e modais

#### Filosofia Criativa
- **"Sem Limites na Criatividade"**: Design que demonstra possibilidades infinitas
- **Tema Espacial**: Metáfora do espaço como campo de exploração criativa
- **Interatividade Imersiva**: Cada elemento responde ao usuário

### 5. 📱 Responsividade Total

#### Mobile-First Approach
- **Breakpoints Otimizados**: 320px, 768px, 1024px, 1200px, 1400px
- **Viewport Units**: Uso de `dvh`, `vw`, `vmin` para adaptação perfeita
- **Touch Optimization**: Gestos e toques otimizados para mobile

#### Adaptive Performance
- **Detecção de Dispositivo**: JavaScript detecta mobile/desktop
- **Redução de Animações**: Menos partículas em dispositivos menos potentes
- **Lazy Loading**: Carregamento progressivo de imagens

### 6. ✨ Sistema de Animações Suaves

#### CSS Animations
- **Keyframes Customizados**: Animações únicas para cada elemento
- **Timing Functions**: Curvas de animação personalizadas
- **Transform3D**: Aceleração por hardware

#### JavaScript Animations
- **RequestAnimationFrame**: Sincronização com refresh rate
- **Easing Functions**: Funções matemáticas para movimentos naturais
- **Performance Monitoring**: Ajuste dinâmico baseado em FPS

### 7. 🎮 Interatividade e Experiência Imersiva

#### Micro-Interações
- **Hover Effects**: Resposta visual a todos os elementos interativos
- **Click Feedback**: Animações de confirmação de ação
- **Scroll Triggers**: Animações ativadas por scroll

#### Experiência Dinâmica
- **Estado Reativo**: Interface que responde ao comportamento do usuário
- **Feedback Visual**: Indicações claras de interatividade
- **Navegação Intuitiva**: Fluxo natural entre seções

### 8. 🔗 Integração GitHub API

#### Sistema de Cache Inteligente
- **Cache de 24 horas**: Armazenamento local para performance
- **Fallback de 7 dias**: Sistema de backup para offline
- **Rate Limiting**: Controle de 50 requests/hora com intervalos de 2s

#### Exibição de Dados
- **Repositórios**: Lista completa com linguagens e estatísticas
- **Commits Recentes**: Timeline de atividade
- **Linguagens**: Mapeamento de cores por tecnologia
- **Estatísticas**: Métricas de produtividade

### 9. 🔍 Otimizações SEO Avançadas

#### Meta Tags Completas
- **Open Graph**: Otimização para redes sociais
- **Twitter Cards**: Cards personalizados para Twitter
- **JSON-LD**: Dados estruturados para Google

#### Performance SEO
- **Sitemap XML**: Mapeamento completo do site
- **Robots.txt**: Diretrizes para crawlers
- **Semantic HTML**: Estrutura semântica otimizada
- **Alt Tags**: Descrições completas para imagens

## Detalhes Técnicos Avançados

### Arquitetura do Sistema

#### Engine do Universo Interativo
O coração do projeto é um sistema complexo de renderização Canvas que gerencia:

- **Sistema de Partículas**: Gerenciamento de milhares de objetos simultâneos
- **Physics Engine**: Simulação de gravidade, repulsão e colisões
- **Collision Detection**: Algoritmos otimizados para detecção de colisões
- **Memory Management**: Pool de objetos para evitar garbage collection
- **Performance Monitoring**: Ajuste dinâmico baseado em FPS

#### Sistema de Cache GitHub API
```javascript
// Estrutura do sistema de cache
const cacheConfig = {
  duration: 24 * 60 * 60 * 1000, // 24 horas
  fallbackDuration: 7 * 24 * 60 * 60 * 1000, // 7 dias
  rateLimit: 50, // requests por hora
  requestInterval: 2000 // 2 segundos entre requests
};
```

#### Otimizações de Performance
- **Hardware Acceleration**: `transform3d(0,0,0)` para ativação de GPU
- **RequestAnimationFrame**: Sincronização com refresh rate do monitor
- **Viewport Culling**: Renderização apenas de objetos visíveis
- **Adaptive Quality**: Redução automática de qualidade em dispositivos lentos

### Funcionalidades Específicas por Página

#### Página Inicial (`index.html`)
- **Hero Section**: Animação de digitação com múltiplas velocidades
- **Carrossel de Benefícios**: Sistema automático com controles manuais
- **Seção de Tecnologias**: Cards interativos com hover effects
- **Guia Interativo**: Modais com conteúdo dinâmico

#### Página Sobre (`sobre.html`)
- **Cartão de Apresentação**: Design glassmorphism com efeitos neon
- **Informações Pessoais**: Layout responsivo com animações suaves

#### Página Portfólio (`portifolio.html`)
- **Integração GitHub**: Exibição de repositórios em tempo real
- **Galeria de Sites**: Cards com overlay e informações técnicas
- **Filtros Dinâmicos**: Sistema de categorização por tecnologia

#### Página Contato (`contato.html`)
- **Cards Interativos**: Botões com hover effects isolados
- **Formulários**: Validação client-side com feedback visual
- **Integração Social**: Links diretos para plataformas

### Sistema de Design

#### Variáveis CSS Globais
```css
:root {
  --primary-cyan: #00ffff;
  --primary-magenta: #ff00ff;
  --primary-yellow: #ffff00;
  --neon-glow: 0 0 20px currentColor;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --backdrop-blur: blur(10px);
}
```

#### Breakpoints Responsivos
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1199px
- **Large Desktop**: 1200px - 1399px
- **Ultra Wide**: 1400px+

### Easter Eggs e Interações Especiais

#### Black Hole Effect
- **Ativação**: Segurar botão esquerdo do mouse por 10 segundos
- **Física**: Sistema de gravidade que atrai objetos próximos
- **Visual**: Efeito de distorção e partículas em órbita
- **Reset**: Clique duplo para desfazer o efeito

#### Interações do Mouse
- **Repulsão de Estrelas**: Raio de 100px ao redor do cursor
- **Hover Effects**: Todos os elementos interativos respondem ao mouse
- **Click Feedback**: Animações de confirmação em botões

### Otimizações SEO Implementadas

#### Meta Tags Estruturadas
- **Open Graph**: Otimização para Facebook, LinkedIn
- **Twitter Cards**: Cards personalizados para Twitter
- **JSON-LD**: Dados estruturados para Google Rich Snippets

#### Performance Web Vitals
- **LCP**: Otimização de Largest Contentful Paint
- **FID**: Minimização de First Input Delay
- **CLS**: Prevenção de Cumulative Layout Shift

### 1. Animação de Fundo "Universo Cósmico" (Detalhado)

O coração visual do site é uma animação de canvas em tela cheia que simula um universo dinâmico e interativo. Abaixo, uma descrição detalhada dos seus componentes e funcionamento, conforme implementado em `assets/js/script.js`:

#### 1.1. Inicialização e Configuração do Canvas
   - O script obtém o elemento `<canvas id="universe">` e seu contexto 2D.
   - As dimensões do canvas (`w`, `h`) são definidas para preencher toda a janela do navegador e são atualizadas dinamicamente no redimensionamento da janela (`window.addEventListener('resize', ...)`).
   - Um objeto `mouse` rastreia as coordenadas atuais e anteriores do cursor, bem como sua velocidade (`mouseVelocity`).
   - A função `initAll()` é chamada para popular o universo com seus elementos iniciais.

#### 1.2. Elementos do Universo e Suas Lógicas

   - **Fundo Gradiente Rotativo (`drawBackground`)**
     - Um gradiente radial é desenhado, simulando a profundidade do espaço, com cores que vão de um tom escuro no centro para preto nas bordas.
     - Uma leve rotação (`backgroundRotation`) é aplicada ao fundo a cada frame para um efeito sutil de movimento.

   - **Campo de Estrelas Distribuído (`initStarField`, `drawStars`, `applySubtleMouseEffects`)**
     - **Criação (`initStarField`):**
       - Múltiplas camadas de estrelas (5 camadas) são criadas para dar profundidade.
       - Cada estrela tem propriedades como posição (`x`, `y`), posição original (`originalX`, `originalY`), tamanho, brilho, cor (determinada pela `getStarColor` baseada em temperatura simulada), camada (para parallax), velocidade, e parâmetros para cintilação (`twinkle`, `twinkleSpeed`).
       - As estrelas também possuem um movimento orbital sutil em torno de um ponto central local (`localCenterX`, `localCenterY`, `orbitRadius`, `orbitAngle`, `orbitSpeed`).
     - **Desenho (`drawStars`):**
       - A função `applySubtleMouseEffects` é chamada para cada estrela (ver seção 1.3).
       - O efeito de cintilação é aplicado alterando o brilho da estrela com base em uma onda senoidal.
       - Um leve efeito de parallax é aplicado com base na velocidade do mouse (`mouseVelocity`), embora o multiplicador atual seja `0.00`, tornando-o inativo.
       - Estrelas maiores recebem um `shadowBlur` para um efeito de brilho.
     - **Cores (`getStarColor`):** Retorna uma cor RGB baseada em uma temperatura simulada, variando de tons quentes (laranja/amarelo) para frios (branco/azul).

   - **Poeira Cósmica (`initCosmicDust`, `drawCosmicDust`)**
     - **Criação (`initCosmicDust`):** Partículas de poeira são criadas com posições, tamanhos, opacidades, velocidades, cores e tempos de vida aleatórios. Elas também têm um ângulo e velocidade de rotação para movimento circular.
     - **Desenho (`drawCosmicDust`):**
       - As partículas se movem com sua velocidade base mais um movimento circular sutil.
       - Elas interagem com o mouse: se o cursor estiver próximo, a velocidade da partícula é alterada para afastá-la.
       - A opacidade diminui com o tempo de vida.
       - Partículas são recriadas quando seu tempo de vida acaba ou saem da tela, mantendo a densidade.

   - **Nebulosas Dinâmicas (`initNebulae`, `drawNebulae`)**
     - **Criação (`initNebulae`):** Um pequeno número de nebulosas é criado com posições, raios, matizes (cor base), opacidades, velocidades e parâmetros de pulsação (velocidade e fase) aleatórios.
     - **Desenho (`drawNebulae`):**
       - As nebulosas se movem pela tela e ricocheteiam nas bordas.
       - O tamanho da nebulosa pulsa usando uma onda senoidal (`pulseScale`).
       - A cor da nebulosa muda sutilmente ao longo do tempo (`hueShift`).
       - São desenhadas usando um gradiente radial com múltiplas paradas de cor para criar um efeito etéreo.

   - **Foguetes (`createRocket`, `drawRockets`)**
     - **Criação (`createRocket`):**
       - Foguetes são criados raramente (controlado por `Math.random() < 0.002`) e limitados a 2 na tela.
       - Eles aparecem de uma das quatro bordas da tela e se movem em direção à borda oposta.
       - Possuem velocidade, tamanho (escala do sprite `rocketImg`), ângulo, opacidade (para fade-in/out), tempo de vida e dimensões do sprite.
       - O sprite `rocketImg` (`assets/images/rocket_sprite.png`) é usado para a imagem.
     - **Desenho (`drawRockets`):**
       - Gerencia as fases de `fadein`, `active` e `fadeout` para a opacidade do foguete.
       - Atualiza a posição e o ângulo (para apontar na direção do movimento).
       - Desenha o sprite do foguete rotacionado e com a opacidade correta.
       - Foguetes são removidos após o fade-out ou se saírem completamente da tela.

   - **Meteoros (`createMeteor`, `drawMeteors`)**
     - **Criação (`createMeteor`):**
       - Criados raramente, aparecem de uma borda e atravessam a tela.
       - Têm velocidade, tamanho, cor (tons de laranja/amarelo), tempo de vida e uma trilha (`trail`).
       - Gerenciam fases de `fadein`, `active`, `fadeout` e opacidade.
     - **Desenho (`drawMeteors`):**
       - A trilha é uma série de pontos anteriores da posição do meteoro, desenhada com opacidade e largura decrescentes.
       - O corpo do meteoro é desenhado como um círculo com `shadowBlur` e um brilho interno branco.
       - São removidos após o fade-out, com uma pequena chance de criar uma explosão sutil.

   - **Cometas (`createComet`, `drawComets`)**
     - **Criação (`createComet`):**
       - Semelhantes aos meteoros, mas geralmente maiores, mais lentos e com trilhas mais longas e cores distintas (tons de azul/branco).
     - **Desenho (`drawComets`):**
       - Lógica de trilha e desenho do corpo similar aos meteoros, mas com parâmetros de trilha e cores diferentes.

   - **Naves Espaciais Sutis (`createSpacecraft`, `drawSpacecrafts`)**
     - **Criação (`createSpacecraft`):**
       - Criadas muito raramente, com diferentes tipos (`fighter`, `cargo`, `probe`).
       - Têm tamanho pequeno, velocidade lenta, e luzes piscantes.
       - Gerenciam fases de `fadein` (opacidade máxima de 0.7), `active`, `fadeout`.
     - **Desenho (`drawSpacecrafts`):**
       - O corpo da nave é desenhado com formas geométricas simples (triângulo, retângulo, círculo) e baixa opacidade.
       - As luzes piscam com cores diferentes (vermelho, verde, azul) e opacidade variável.

   - **ISS (Estação Espacial Internacional) (`createISS`, `drawISS`)**
     - **Criação (`createISS`):**
       - Criada muito raramente e apenas se não houver uma ISS ativa e o `issCooldown` tiver terminado.
       - Utiliza o sprite `issImg` (`assets/images/iss_sprite.png`).
       - Tem velocidade, dimensões baseadas na escala do sprite, ângulo, rotação, opacidade e tempo de vida.
       - Um `ISS_COOLDOWN_DURATION` previne que apareça muito frequentemente.
     - **Desenho (`drawISS`):**
       - Gerencia fases de `fadein` (opacidade máxima de 0.8), `active`.
       - Se a ISS sair da tela ou seu tempo de vida acabar, ela é removida, cria uma explosão sutil e inicia o cooldown.
       - O sprite é desenhado com rotação contínua.

   - **Explosões Sutis (`createSubtleExplosion`, `drawExplosions`)**
     - **Criação (`createSubtleExplosion`):**
       - Chamada quando ocorrem colisões ou certos objetos são destruídos.
       - Cria um conjunto de partículas com posições, velocidades, tamanhos, cores e tempos de vida variados, que se espalham a partir do ponto da explosão.
     - **Desenho (`drawExplosions`):**
       - As partículas se movem, diminuem a velocidade (`velocity *= 0.95`), e sua opacidade e tamanho diminuem com o tempo de vida.
       - São desenhadas com `shadowBlur`.
       - A explosão é removida quando todas as suas partículas desaparecem.

   - **Supernovas Raras (`checkSupernova`, `drawSupernovas`)**
     - **Criação (`checkSupernova`):**
       - Um `supernovaTimer` controla a criação de supernovas, que são eventos raros.
       - Uma supernova tem posição, raio (que se expande e contrai), velocidades de expansão/contração, fases (`expand`, `peak`, `contract`), duração do pico, opacidade e cor.
     - **Desenho (`drawSupernovas`):**
       - Gerencia as fases: o raio aumenta na expansão, permanece no pico, e diminui na contração. A opacidade também varia.
       - Desenhada com um gradiente radial complexo para simular o brilho intenso e as cores.
       - Um brilho central adicional é desenhado durante as fases de expansão e pico.

#### 1.3. Interatividade

   - **Efeito de "Buraco Negro" (`canvas.addEventListener('mousedown', ...)` e `applySubtleMouseEffects`)**
     - Ao segurar o botão do mouse por 3 segundos (`blackHoleTimer`):
       - `blackHoleActive` se torna `true`.
       - O centro do buraco negro (`blackHoleCenter`) é definido na posição do mouse.
       - 50% das estrelas são selecionadas aleatoriamente (`blackHoleStarData`).
       - Para cada estrela selecionada, são armazenados dados como sua posição original, um ângulo e raio alvo para formar um disco de acreção (entre `ACCRETION_MIN_RADIUS` e `ACCRETION_MAX_RADIUS`), e uma velocidade angular.
       - As estrelas se movem em espiral em direção ao seu raio alvo no disco (`state: 'toDisk'`).
       - Uma vez no disco, elas orbitam (`state: 'inDisk'`).
     - Ao soltar o mouse (`canvas.addEventListener('mouseup', ...)`):
       - `blackHoleReturning` se torna `true`.
       - As estrelas no `blackHoleStarData` mudam para o estado `'returning'` e se movem de volta para suas posições originais.
       - Quando todas retornam, o efeito é desativado.
     - A atração e o retorno são feitos com interpolação (`ATTRACT_SPEED`, `RETURN_SPEED`).

   - **Interação Sutil com Estrelas (`applySubtleMouseEffects`)**
     - Fora do efeito de buraco negro, as estrelas têm um movimento orbital local.
     - Se o mouse estiver próximo a uma estrela (distância < `maxDistance`), a estrela é sutilmente empurrada para longe do cursor. A força do empurrão é maior quanto mais próxima a estrela estiver.
     - Se o mouse não estiver próximo, a estrela retorna suavemente à sua posição orbital original.

   - **Interação com Poeira Cósmica (`drawCosmicDust`)**
     - Partículas de poeira próximas ao mouse são levemente repelidas.

#### 1.4. Sistema de Colisões (`checkCollisions`)
   - Verifica colisões entre diferentes tipos de objetos:
     - ISS vs. Meteoros, Cometas, Foguetes.
     - Foguetes vs. Meteoros, Cometas.
     - Naves Espaciais vs. Meteoros, Cometas.
     - Cometas vs. Estrelas (com chance reduzida).
   - Quando uma colisão ocorre, uma `createSubtleExplosion` é chamada no local da colisão, e os objetos envolvidos geralmente entram na fase `fadeout` ou são destruídos/redefinidos (no caso de estrelas).

#### 1.5. Loop de Animação Principal (`animate`)
   - A função `animate` é o motor da simulação.
   - Incrementa uma variável `time` (usada para temporizar alguns efeitos).
   - Chama todas as funções `draw*` para renderizar cada componente do universo.
   - Chama `checkCollisions`.
   - Usa `requestAnimationFrame(animate)` para criar um loop de renderização suave e eficiente, sincronizado com a taxa de atualização da tela.

### 2. Interface Interativa e Moderna
   - **Terminal de Carregamento (`typeTerminal`, `showHeroContent`):** Uma animação inicial em `assets/js/script.js` simula um terminal carregando o sistema, exibindo mensagens (`codeLines`) sequenciais com efeito de digitação. Ao final, o terminal desaparece com um efeito de fade e escala, e o conteúdo principal (`#hero-content`) é revelado.
   - **Barra de Navegação:** Fixa no topo, com efeito de ocultar/exibir ao rolar a página (controlado por `handleScroll` em `script.js`). Contém o logo, título do site com gradiente animado e links de navegação com efeitos de hover e borda animada para o link ativo.
   - **Seção Hero:** Título principal com animações CSS de "glitch" e "pulso". Um subtítulo (`#typing-text`) com efeito de digitação dinâmica (`startTypingCycle` em `script.js`) que cicla por diferentes frases (`phrases`).
   - **Ícones de Redes Sociais:** Estilizados com cores específicas de cada plataforma e efeitos de hover.
   - **Botão "Voltar ao Topo":** Permite ao usuário retornar rapidamente ao início da página.
   - **Botão "Scroll Down":** Incentiva a rolagem para a próxima seção com animações de pulso e salto. Aparece após 10 segundos.

### 3. Carrossel de Benefícios
   - Uma seção dedicada a apresentar os principais benefícios ou serviços oferecidos.
   - **Design:** Cartões com ícones, títulos e descrições, que entram e saem da visualização com animações CSS (`cardFadeInZoom`, `cardFadeOutZoom`).
   - **Navegação (em `script.js`):** Suporta navegação manual através de botões (anterior/próximo) e navegação automática com temporizador (`setInterval`). A transição entre os cartões é gerenciada pela função `showCard`, que adiciona e remove classes CSS para controlar as animações.
   - **Responsividade:** Adaptado para diferentes tamanhos de tela.

### 4. Seções de Conteúdo Estilizadas
   - **Tecnologias:** Apresenta as tecnologias dominadas (HTML, CSS, JavaScript) com ícones e caixas estilizadas que possuem efeitos de hover.
   - **Importância:** Seção similar para destacar a importância de certos aspectos, também com caixas interativas.
   - **Títulos de Seção Neon:** Títulos com efeitos de pulso neon e flutuação para chamar a atenção.



## Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Instalação e Execução

#### Método 1: Servidor Local (Recomendado)
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue até o diretório
cd tutankhamal-website

# Inicie um servidor local
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (se tiver npx instalado)
npx serve .

# PHP
php -S localhost:8000
```

#### Método 2: Abertura Direta
- Abra o arquivo `index.html` diretamente no navegador
- **Nota**: Algumas funcionalidades podem não funcionar corretamente devido a restrições CORS

### Estrutura de Navegação
- **Página Inicial**: `index.html` - Hero section e apresentação geral
- **Sobre**: `sobre.html` - Informações pessoais e profissionais
- **Portfólio**: `portifolio.html` - Projetos e integração GitHub
- **Contato**: `contato.html` - Formulários e informações de contato

### Configuração da API GitHub
Para utilizar a integração com GitHub API:

1. Edite o arquivo `assets/js/github.js`
2. Substitua o username na linha:
```javascript
const GITHUB_USERNAME = 'seu-username-github';
```

### Personalização

#### Cores e Tema
Edite as variáveis CSS em `assets/css/style.css`:
```css
:root {
  --primary-cyan: #00ffff;
  --primary-magenta: #ff00ff;
  --primary-yellow: #ffff00;
  /* Personalize conforme necessário */
}
```

#### Performance do Universo
Ajuste as configurações em `assets/js/script.js`:
```javascript
// Reduzir partículas para melhor performance
const MAX_STARS = 800; // Padrão: 1500
const MAX_DUST = 300;  // Padrão: 500
```

## Compatibilidade

### Navegadores Suportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ⚠️ Internet Explorer (não suportado)

### Dispositivos
- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)
- ✅ Touch devices

## Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregadas sob demanda
- **Hardware Acceleration**: Uso de GPU para animações
- **Adaptive Quality**: Redução automática em dispositivos lentos
- **Cache Strategy**: Sistema inteligente de cache

### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms
- **Cumulative Layout Shift**: < 0.1

## Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Código
- Mantenha o padrão de nomenclatura existente
- Comente código complexo
- Teste em múltiplos navegadores
- Otimize para performance
- Mantenha a responsividade

### Reportar Bugs
Use as Issues do GitHub para reportar bugs, incluindo:
- Descrição detalhada do problema
- Passos para reproduzir
- Navegador e versão
- Screenshots (se aplicável)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contato

**André Borba (Tutankhamal)**
- 📧 Email: [contato@tutankhamal.com]
- 🌐 Website: [https://tutankhamal.com]
- 💼 LinkedIn: [https://www.linkedin.com/in/tutankhamal/]
- 🐱 GitHub: [https://github.com/Tutankhamal]

---

## Agradecimentos

- **Font Awesome** - Biblioteca de ícones
- **Google Fonts** - Tipografia (Orbitron, Exo 2)
- **GitHub API** - Integração de dados de repositórios
- **Canvas API** - Renderização do universo interativo

---

**Desenvolvido com 💜 e muito ☕ por Tutankhamal Dev**

*"No espaço da criatividade, não há limites para a inovação."*