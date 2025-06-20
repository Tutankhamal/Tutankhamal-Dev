// GitHub Profile Integration
// Configurações otimizadas
const GITHUB_USERNAME = 'Tutankhamal';
const GITHUB_API_BASE = 'https://api.github.com';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas
const FALLBACK_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 dias para fallback
const MAX_REQUESTS_PER_HOUR = 50;
const REQUEST_INTERVAL = 2000; // 2 segundos entre requests

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

// Utilitários otimizados
let requestCount = 0;
let lastRequestTime = 0;

function getFromCache(key, allowExpired = false) {
    try {
        const cached = localStorage.getItem(key);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            const isExpired = Date.now() - timestamp > CACHE_DURATION;
            
            if (!isExpired) {
                console.log(`✅ Cache hit: ${key}`);
                return data;
            }
            
            if (allowExpired && Date.now() - timestamp < FALLBACK_CACHE_DURATION) {
                console.log(`⚠️ Cache expired but using fallback: ${key}`);
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
        const cacheData = {
            data,
            timestamp: Date.now(),
            version: '1.0'
        };
        localStorage.setItem(key, JSON.stringify(cacheData));
        console.log(`💾 Cache saved: ${key}`);
    } catch (e) {
        console.warn('Erro ao salvar cache:', e);
        if (e.name === 'QuotaExceededError') {
            clearOldCache();
        }
    }
}

function clearOldCache() {
    const keys = Object.keys(localStorage);
    const githubKeys = keys.filter(key => key.startsWith('github_'));
    
    githubKeys.sort((a, b) => {
        const aData = JSON.parse(localStorage.getItem(a));
        const bData = JSON.parse(localStorage.getItem(b));
        return aData.timestamp - bData.timestamp;
    });
    
    const toRemove = githubKeys.slice(0, Math.floor(githubKeys.length / 2));
    toRemove.forEach(key => localStorage.removeItem(key));
    console.log(`🧹 Cleaned ${toRemove.length} old cache entries`);
}

function canMakeRequest() {
    const now = Date.now();
    const lastHourRequests = parseInt(localStorage.getItem('github_requests_count') || '0');
    const lastHourTimestamp = parseInt(localStorage.getItem('github_requests_timestamp') || '0');
    
    if (now - lastHourTimestamp > 60 * 60 * 1000) {
        localStorage.setItem('github_requests_count', '0');
        localStorage.setItem('github_requests_timestamp', now.toString());
        requestCount = 0;
    } else {
        requestCount = lastHourRequests;
    }
    
    return requestCount < MAX_REQUESTS_PER_HOUR;
}

function incrementRequestCount() {
    requestCount++;
    localStorage.setItem('github_requests_count', requestCount.toString());
    console.log(`📊 Requests this hour: ${requestCount}/${MAX_REQUESTS_PER_HOUR}`);
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

// Funções de API otimizadas
async function fetchGitHubData(endpoint) {
    const cacheKey = `github_${endpoint.replace(/\//g, '_')}`;
    
    // Tentar cache primeiro
    const cached = getFromCache(cacheKey);
    if (cached) {
        return cached;
    }
    
    // Verificar rate limiting
    if (!canMakeRequest()) {
        console.warn('⚠️ Rate limit reached, using fallback cache');
        const fallback = getFromCache(cacheKey, true);
        if (fallback) {
            return fallback;
        }
        throw new Error('Rate limit exceeded and no fallback data available');
    }
    
    // Implementar delay entre requests
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    if (timeSinceLastRequest < REQUEST_INTERVAL) {
        const delay = REQUEST_INTERVAL - timeSinceLastRequest;
        console.log(`⏱️ Waiting ${delay}ms before next request`);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    try {
        console.log(`🌐 Making API request: ${endpoint}`);
        const response = await fetch(`${GITHUB_API_BASE}${endpoint}`);
        lastRequestTime = Date.now();
        incrementRequestCount();
        
        if (!response.ok) {
            if (response.status === 403) {
                console.warn('⚠️ API rate limit hit, using fallback');
                const fallback = getFromCache(cacheKey, true);
                if (fallback) return fallback;
            }
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setCache(cacheKey, data);
        return data;
    } catch (error) {
        console.error(`❌ Error fetching GitHub data (${endpoint}):`, error);
        
        // Tentar fallback cache em caso de erro
        const fallback = getFromCache(cacheKey, true);
        if (fallback) {
            console.log('🔄 Using fallback cache due to API error');
            return fallback;
        }
        
        throw error;
    }
}

async function loadPinnedRepositories() {
    try {
        const repos = await fetchGitHubData(`/users/${GITHUB_USERNAME}/repos?sort=stars&direction=desc&per_page=6`);
        displayRepositories(repos);
    } catch (error) {
        console.error('Erro ao carregar repositórios:', error);
        const container = document.getElementById('pinned-repos');
        const loadingElement = document.getElementById('repos-loading');
        
        if (loadingElement) loadingElement.style.display = 'none';
        container.innerHTML = '<p style="color: #ff6b6b; text-align: center;">Erro ao carregar repositórios. Tente novamente mais tarde.</p>';
        throw error;
    }
}

async function loadRecentCommits() {
    try {
        const events = await fetchGitHubData(`/users/${GITHUB_USERNAME}/events?per_page=30`);
        displayCommits(events);
    } catch (error) {
        console.error('Erro ao carregar commits:', error);
        const container = document.getElementById('recent-commits');
        const loadingElement = document.getElementById('commits-loading');
        
        if (loadingElement) loadingElement.style.display = 'none';
        container.innerHTML = '<p style="color: #ff6b6b; text-align: center;">Erro ao carregar commits. Tente novamente mais tarde.</p>';
        throw error;
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

// Dados de fallback estáticos
const FALLBACK_DATA = {
    repositories: [
        {
            name: 'tutankhamal-website',
            description: 'Website oficial da Tutankhamal com portfólio e projetos',
            html_url: 'https://github.com/Tutankhamal/tutankhamal-website',
            language: 'HTML',
            stargazers_count: 5,
            forks_count: 2,
            size: 1024
        }
    ],
    commits: [
        {
            message: 'Implementação da seção GitHub otimizada',
            repo: 'Tutankhamal/tutankhamal-website',
            repo_url: 'https://github.com/Tutankhamal/tutankhamal-website',
            date: new Date().toISOString(),
            sha: 'abc123'
        }
    ]
};

function loadCachedDataOnly() {
    const reposCache = getFromCache('github__users_Tutankhamal_repos_sort_stars_direction_desc_per_page_6', true);
    const eventsCache = getFromCache('github__users_Tutankhamal_events_per_page_30', true);
    
    if (reposCache) {
        displayRepositories(reposCache);
    } else {
        displayRepositories(FALLBACK_DATA.repositories);
    }
    
    if (eventsCache) {
        displayCommits(eventsCache);
    } else {
        displayCommits(FALLBACK_DATA.commits);
    }
}

async function loadDataWithPriority() {
    try {
        await loadPinnedRepositories();
    } catch (error) {
        console.error('Failed to load repositories:', error);
        displayRepositories(FALLBACK_DATA.repositories);
    }
    
    setTimeout(async () => {
        try {
            await loadRecentCommits();
        } catch (error) {
            console.error('Failed to load commits:', error);
            displayCommits(FALLBACK_DATA.commits);
        }
    }, 3000);
}

function displayRepositories(repos) {
    const container = document.getElementById('pinned-repos');
    const loadingElement = document.getElementById('repos-loading');
    
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
}

function displayCommits(events) {
    const container = document.getElementById('recent-commits');
    const loadingElement = document.getElementById('commits-loading');
    
    if (loadingElement) loadingElement.style.display = 'none';
    
    if (Array.isArray(events) && events.length > 0) {
        // Se são eventos da API
        if (events[0].type === 'PushEvent') {
            const pushEvents = events.filter(event => event.type === 'PushEvent');
            const commits = [];
            
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
            // Se são commits diretos (fallback)
            container.innerHTML = events.map(commit => `
                <div class="commit-item">
                    <div class="commit-message">${truncateText(commit.message, 80)}</div>
                    <div class="commit-info">
                        <a href="${commit.repo_url}" target="_blank" class="commit-repo">${commit.repo}</a>
                        <span class="commit-date">${formatDate(commit.date)}</span>
                    </div>
                </div>
            `).join('');
        }
    } else {
        container.innerHTML = '<p style="color: #888; text-align: center;">Nenhuma atividade recente encontrada.</p>';
    }
}

// Inicialização otimizada
function initGitHubSection() {
    if (!document.querySelector('.github-section')) {
        return;
    }
    
    console.log('🚀 Inicializando seção GitHub com otimizações...');
    
    setupImageLoading();
    
    if (!navigator.onLine) {
        console.log('📱 Offline mode - using cached data only');
        loadCachedDataOnly();
        return;
    }
    
    loadDataWithPriority();
    
    window.addEventListener('online', () => {
        console.log('🌐 Back online - refreshing data');
        loadDataWithPriority();
    });
    
    window.addEventListener('offline', () => {
        console.log('📱 Gone offline - using cached data');
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'r' && e.shiftKey) {
            e.preventDefault();
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