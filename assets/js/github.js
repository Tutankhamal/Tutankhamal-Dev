// GitHub Profile Integration
// Configurações
const GITHUB_USERNAME = 'Tutankhamal';
const GITHUB_API_BASE = 'https://api.github.com';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutos

// Cores das linguagens de programação
const LANGUAGE_COLORS = {
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'TypeScript': '#2b7489',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'C#': '#239120',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'Swift': '#ffac45',
    'Kotlin': '#F18E33',
    'Dart': '#00B4AB',
    'Shell': '#89e051',
    'Vue': '#4FC08D',
    'React': '#61DAFB'
};

// Utilitários
function getFromCache(key) {
    try {
        const cached = localStorage.getItem(key);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < CACHE_DURATION) {
                return data;
            }
        }
    } catch (e) {
        console.warn('Erro ao acessar cache:', e);
    }
    return null;
}

function setCache(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (e) {
        console.warn('Erro ao salvar cache:', e);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'há 1 dia';
    if (diffDays < 7) return `há ${diffDays} dias`;
    if (diffDays < 30) return `há ${Math.ceil(diffDays / 7)} semanas`;
    if (diffDays < 365) return `há ${Math.ceil(diffDays / 30)} meses`;
    return `há ${Math.ceil(diffDays / 365)} anos`;
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Funções de API
async function fetchGitHubData(endpoint) {
    const cacheKey = `github_${endpoint.replace(/\//g, '_')}`;
    const cached = getFromCache(cacheKey);
    
    if (cached) {
        return cached;
    }
    
    try {
        const response = await fetch(`${GITHUB_API_BASE}${endpoint}`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setCache(cacheKey, data);
        return data;
    } catch (error) {
        console.error(`Erro ao buscar dados do GitHub (${endpoint}):`, error);
        throw error;
    }
}

async function loadPinnedRepositories() {
    const loadingElement = document.getElementById('repos-loading');
    const container = document.getElementById('pinned-repos');
    
    try {
        // Buscar repositórios do usuário (ordenados por estrelas)
        const repos = await fetchGitHubData(`/users/${GITHUB_USERNAME}/repos?sort=stars&direction=desc&per_page=6`);
        
        if (loadingElement) loadingElement.style.display = 'none';
        
        if (repos && repos.length > 0) {
            container.innerHTML = repos.map(repo => `
                <div class="repo-item" onclick="window.open('${repo.html_url}', '_blank')">
                    <div class="repo-name">${repo.name}</div>
                    <div class="repo-description">${repo.description || 'Sem descrição disponível'}</div>
                    <div class="repo-stats">
                        ${repo.language ? `
                            <div class="repo-stat">
                                <span class="repo-language" style="background-color: ${LANGUAGE_COLORS[repo.language] || '#666'}"></span>
                                ${repo.language}
                            </div>
                        ` : ''}
                        <div class="repo-stat">
                            <i class="fas fa-star"></i>
                            ${repo.stargazers_count}
                        </div>
                        <div class="repo-stat">
                            <i class="fas fa-code-branch"></i>
                            ${repo.forks_count}
                        </div>
                        ${repo.size > 0 ? `
                            <div class="repo-stat">
                                <i class="fas fa-database"></i>
                                ${(repo.size / 1024).toFixed(1)} MB
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        } else {
            container.innerHTML = '<p style="color: #888; text-align: center;">Nenhum repositório encontrado.</p>';
        }
    } catch (error) {
        if (loadingElement) loadingElement.style.display = 'none';
        container.innerHTML = '<p style="color: #ff6b6b; text-align: center;">Erro ao carregar repositórios. Tente novamente mais tarde.</p>';
        console.error('Erro ao carregar repositórios:', error);
    }
}

async function loadRecentCommits() {
    const loadingElement = document.getElementById('commits-loading');
    const container = document.getElementById('recent-commits');
    
    try {
        // Buscar eventos do usuário (incluindo commits)
        const events = await fetchGitHubData(`/users/${GITHUB_USERNAME}/events?per_page=30`);
        
        if (loadingElement) loadingElement.style.display = 'none';
        
        // Filtrar apenas eventos de push (commits)
        const pushEvents = events.filter(event => event.type === 'PushEvent');
        
        if (pushEvents.length > 0) {
            const commits = [];
            
            // Extrair commits dos eventos de push (máximo 10)
            pushEvents.slice(0, 5).forEach(event => {
                if (event.payload && event.payload.commits) {
                    event.payload.commits.forEach(commit => {
                        commits.push({
                            message: commit.message,
                            repo: event.repo.name,
                            repo_url: `https://github.com/${event.repo.name}`,
                            date: event.created_at,
                            sha: commit.sha
                        });
                    });
                }
            });
            
            if (commits.length > 0) {
                container.innerHTML = commits.slice(0, 10).map(commit => `
                    <div class="commit-item">
                        <div class="commit-message">${truncateText(commit.message, 80)}</div>
                        <div class="commit-info">
                            <a href="${commit.repo_url}" target="_blank" class="commit-repo">${commit.repo}</a>
                            <span class="commit-date">${formatDate(commit.date)}</span>
                        </div>
                    </div>
                `).join('');
            } else {
                container.innerHTML = '<p style="color: #888; text-align: center;">Nenhum commit recente encontrado.</p>';
            }
        } else {
            container.innerHTML = '<p style="color: #888; text-align: center;">Nenhuma atividade recente encontrada.</p>';
        }
    } catch (error) {
        if (loadingElement) loadingElement.style.display = 'none';
        container.innerHTML = '<p style="color: #ff6b6b; text-align: center;">Erro ao carregar commits. Tente novamente mais tarde.</p>';
        console.error('Erro ao carregar commits:', error);
    }
}

// Função para adicionar efeitos de loading nas imagens
function setupImageLoading() {
    const images = document.querySelectorAll('.github-card-content img');
    
    images.forEach(img => {
        // Adicionar skeleton loading
        const skeleton = document.createElement('div');
        skeleton.style.cssText = `
            width: 100%;
            height: 200px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
        `;
        
        // Adicionar animação de loading
        if (!document.querySelector('#loading-animation')) {
            const style = document.createElement('style');
            style.id = 'loading-animation';
            style.textContent = `
                @keyframes loading {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        img.parentElement.style.position = 'relative';
        img.parentElement.appendChild(skeleton);
        
        img.onload = () => {
            skeleton.remove();
            img.style.opacity = '1';
        };
        
        img.onerror = () => {
            skeleton.innerHTML = '<p style="color: #888; text-align: center; line-height: 200px;">Erro ao carregar imagem</p>';
        };
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}

// Inicialização
function initGitHubSection() {
    // Verificar se estamos na página do portfólio
    if (!document.querySelector('.github-section')) {
        return;
    }
    
    console.log('Inicializando seção GitHub...');
    
    // Configurar loading das imagens
    setupImageLoading();
    
    // Carregar dados dinâmicos
    loadPinnedRepositories();
    loadRecentCommits();
    
    // Adicionar listener para refresh manual (opcional)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'r' && e.shiftKey) {
            e.preventDefault();
            // Limpar cache e recarregar
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('github_')) {
                    localStorage.removeItem(key);
                }
            });
            location.reload();
        }
    });
}

// Executar quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGitHubSection);
} else {
    initGitHubSection();
}