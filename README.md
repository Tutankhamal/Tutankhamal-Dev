# Portfólio Interativo Universo Cósmico

## Visão Geral

Este projeto é uma Single Page Application (SPA) que serve como um portfólio interativo e dinâmico para um Web Designer e Desenvolvedor Front-End. O site apresenta um design moderno com um tema espacial, repleto de animações e efeitos visuais criados com HTML, CSS e JavaScript puros. O objetivo é demonstrar habilidades em desenvolvimento front-end, design de interfaces e criação de experiências de usuário envolventes. A navegação é fluida, com seções bem definidas que destacam os serviços oferecidos, tecnologias dominadas e a importância de uma presença online robusta. Efeitos como um terminal de carregamento inicial, um fundo de universo animado e um carrossel de benefícios contribuem para uma experiência memorável.

## Estrutura de Arquivos e Pastas

O projeto está organizado da seguinte forma:

- `index.html`: O arquivo HTML principal que estrutura todas as seções da página.
- `assets/`:
  - `css/style.css`: A folha de estilos principal, responsável por toda a aparência visual e animações CSS.
  - `js/script.js`: O coração da interatividade do site, controlando as animações do canvas, o carrossel, o efeito de digitação, o terminal de carregamento e outros comportamentos dinâmicos.
  - `images/`: Contém todas as imagens e ícones utilizados no projeto (sprites, logos, etc.).
  - `audio/`: Arquivos de áudio (uso não detalhado no código atual).
  - `destaques/`: Imagens para seções de destaque.
  - `products/`: Imagens de produtos.
- `README.md`: Este arquivo.
- `pages/`: Pasta para futuras expansões.

## Principais Funcionalidades

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

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura semântica do conteúdo da página.
- **CSS3:** Para toda a estilização, layout (Flexbox, Grid), animações (`@keyframes`, transitions), responsividade (media queries) e variáveis CSS para um tema consistente.
- **JavaScript (ES6+):** Para a lógica de todas as funcionalidades interativas.

## Como Executar o Projeto

1.  Clone ou baixe este repositório.
2.  Navegue até a pasta raiz do projeto.
3.  Abra o arquivo `index.html` em um navegador web moderno.

Não há dependências externas ou passos de compilação.