/**
 * 津门华章 (Tianjin Heritage Travel Web)
 * 交互脚本 - 核心交互逻辑与文旅增强功能
 */

// 1. 英雄区域大片轮播数据
const HERO_SLIDES = [
    {
        image: 'resources/hero_tianjin_eye.jpg',
        tag: '津沽溯源 · 海河风华',
        title: '津门华章 · 一眼千年',
        subtitle: '九河下梢金翅鸟，循千载文脉，寻卫城古韵。从辽代木构到明清大院，感受津门大地的一砖一瓦与岁月回响。'
    },
    {
        image: 'resources/dulesi_real.jpg',
        tag: '辽代木构 · 无上国宝',
        title: '独乐寺 · 辽构巍然',
        subtitle: '历经28次地震巍然屹立，梁思成先生盛赞的营造奇迹，中国现存最古老的木结构楼阁式建筑。'
    },
    {
        image: 'resources/hero_guwenhuajie.jpg',
        tag: '津门故里 · 运河首善',
        title: '天后宫与古文化街',
        subtitle: '先有大直沽，后有天津卫。元代海神天妃祖庙，见证漕运兴衰与津门民俗六百年繁华。'
    },
    {
        image: 'resources/gulou_real.jpg',
        tag: '老城之心 · 晨钟暮鼓',
        title: '天津鼓楼 · 津门原点',
        subtitle: '明永乐二年筑卫城之中心，老城厢记忆的活态博物馆，叩响回荡数百年的浑厚钟声。'
    },
    {
        image: 'resources/shijiadayuan_real.jpg',
        tag: '北方民居 · 巨贾风云',
        title: '石家大院 · 华北第一宅',
        subtitle: '清代津门八大家之一尊美堂，堂院通透、砖雕绝伦，北方最大民宅与民间木构戏楼典范。'
    },
    {
        image: 'resources/yuhuangge_real.jpg',
        tag: '敕建仙阙 · 道骨仙风',
        title: '玉皇阁 · 凌虚古阁',
        subtitle: '坐落于三岔河口漕运要津，天津市区现存最古老的明代木构道教建筑遗存。'
    }
];

let currentSlide = 0;
let slideInterval = null;

// 2. 初始化核心逻辑
document.addEventListener('DOMContentLoaded', function() {
    initHeroCarousel();
    initFilterTabs();
    initWishlist();
    initMobileNav();
    initAmbientAudio();
    initScrollAnimations();
    initBackToTop();
    initItineraryTabs();
});

/**
 * 英雄区域轮播初始化
 */
function initHeroCarousel() {
    const heroSection = document.getElementById('heroBgSlide');
    const heroTag = document.getElementById('heroTag');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const dotsContainer = document.getElementById('heroDots');

    if (!heroSection || !dotsContainer) return;

    // 生成轮播圆点
    dotsContainer.innerHTML = '';
    HERO_SLIDES.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white'}`;
        dot.setAttribute('aria-label', `切换至幻灯片 ${idx + 1}`);
        dot.addEventListener('click', () => {
            goToSlide(idx);
            resetSlideTimer();
        });
        dotsContainer.appendChild(dot);
    });

    function renderSlide(index) {
        const slide = HERO_SLIDES[index];
        if (!slide) return;

        // 渐变切换背景
        heroSection.style.opacity = '0.3';
        setTimeout(() => {
            heroSection.style.backgroundImage = `linear-gradient(rgba(17, 30, 46, 0.65), rgba(17, 30, 46, 0.85)), url('${slide.image}')`;
            heroSection.style.opacity = '1';
        }, 200);

        // 文字淡入切换
        if (heroTag) heroTag.textContent = slide.tag;
        if (heroTitle) heroTitle.textContent = slide.title;
        if (heroSubtitle) heroSubtitle.textContent = slide.subtitle;

        // 更新圆点
        const dots = dotsContainer.children;
        for (let i = 0; i < dots.length; i++) {
            if (i === index) {
                dots[i].className = 'w-8 h-3 rounded-full bg-amber-400 transition-all duration-300';
            } else {
                dots[i].className = 'w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300';
            }
        }
    }

    function goToSlide(idx) {
        currentSlide = (idx + HERO_SLIDES.length) % HERO_SLIDES.length;
        renderSlide(currentSlide);
    }

    window.nextSlide = function() {
        goToSlide(currentSlide + 1);
        resetSlideTimer();
    };

    window.prevSlide = function() {
        goToSlide(currentSlide - 1);
        resetSlideTimer();
    };

    function startSlideTimer() {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 6000);
    }

    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    renderSlide(0);
    startSlideTimer();
}

/**
 * 古建分类筛选器
 */
function initFilterTabs() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.building-grid-card');

    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');

            // 样式高亮切换
            filterButtons.forEach(b => {
                b.classList.remove('bg-amber-600', 'text-white', 'shadow-md');
                b.classList.add('bg-white/10', 'text-slate-200');
            });
            this.classList.add('bg-amber-600', 'text-white', 'shadow-md');
            this.classList.remove('bg-white/10', 'text-slate-200');

            // 过滤卡片
            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat.includes(category)) {
                    card.style.display = 'block';
                    card.classList.remove('scale-95', 'opacity-0');
                    card.classList.add('scale-100', 'opacity-100');
                } else {
                    card.classList.remove('scale-100', 'opacity-100');
                    card.classList.add('scale-95', 'opacity-0');
                    setTimeout(() => {
                        if (card.classList.contains('opacity-0')) {
                            card.style.display = 'none';
                        }
                    }, 200);
                }
            });
        });
    });
}

/**
 * 研学游览路线选项卡
 */
function initItineraryTabs() {
    const tabs = document.querySelectorAll('.itinerary-tab-btn');
    const panels = document.querySelectorAll('.itinerary-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

            tabs.forEach(t => {
                t.classList.remove('border-amber-500', 'text-amber-400', 'bg-white/10');
                t.classList.add('border-transparent', 'text-slate-400');
            });
            this.classList.add('border-amber-500', 'text-amber-400', 'bg-white/10');
            this.classList.remove('border-transparent', 'text-slate-400');

            panels.forEach(p => {
                if (p.id === targetId) {
                    p.classList.remove('hidden');
                    p.classList.add('block');
                } else {
                    p.classList.add('hidden');
                    p.classList.remove('block');
                }
            });
        });
    });
}

/**
 * 行程心愿单 (Wishlist) 状态管理
 */
const WISHLIST_KEY = 'tianjin_heritage_wishlist_v1';

function getWishlist() {
    try {
        const stored = localStorage.getItem(WISHLIST_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(list) {
    try {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
    } catch (e) {
        console.warn('LocalStorage error', e);
    }
}

function initWishlist() {
    updateWishlistBadges();
    renderWishlistDrawer();

    // 绑定卡片上的收藏按钮
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const id = this.getAttribute('data-id');
            const title = this.getAttribute('data-title');
            const time = this.getAttribute('data-time') || '1.5小时';
            const loc = this.getAttribute('data-loc') || '天津市';
            const img = this.getAttribute('data-img') || '';

            toggleWishlistItem({ id, title, time, loc, img });
        });
    });
}

function toggleWishlistItem(item) {
    let list = getWishlist();
    const index = list.findIndex(i => i.id === item.id);

    if (index >= 0) {
        list.splice(index, 1);
        showToast(`已从行程心愿单中移除【${item.title}】`);
    } else {
        list.push(item);
        showToast(`✨ 已成功将【${item.title}】加入行程心愿单！`);
    }

    saveWishlist(list);
    updateWishlistBadges();
    renderWishlistDrawer();
}

function updateWishlistBadges() {
    const list = getWishlist();
    const countBadge = document.getElementById('wishlistCount');
    if (countBadge) {
        countBadge.textContent = list.length;
        countBadge.style.display = list.length > 0 ? 'inline-flex' : 'none';
    }

    // 更新各个卡片上的心愿单按钮状态
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        const id = btn.getAttribute('data-id');
        const inList = list.some(i => i.id === id);
        if (inList) {
            btn.innerHTML = '❤️ <span class="hidden sm:inline">已加入心愿单</span>';
            btn.classList.add('bg-red-500/20', 'text-red-300', 'border-red-400/40');
            btn.classList.remove('bg-white/10', 'text-slate-300', 'border-white/20');
        } else {
            btn.innerHTML = '🤍 <span class="hidden sm:inline">加入心愿单</span>';
            btn.classList.remove('bg-red-500/20', 'text-red-300', 'border-red-400/40');
            btn.classList.add('bg-white/10', 'text-slate-300', 'border-white/20');
        }
    });
}

function renderWishlistDrawer() {
    const container = document.getElementById('wishlistItemsContainer');
    const totalTimeEl = document.getElementById('wishlistTotalTime');
    if (!container) return;

    const list = getWishlist();

    if (list.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-400">
                <div class="text-4xl mb-3">🏮</div>
                <p class="font-medium text-slate-300">您的心愿单还是空的</p>
                <p class="text-sm mt-1 text-slate-400">在古建胜境卡片中点击「加入心愿单」，定制属于您的专属津门寻古旅程。</p>
            </div>
        `;
        if (totalTimeEl) totalTimeEl.textContent = '建议耗时：0 小时';
        return;
    }

    let html = '';
    list.forEach((item, idx) => {
        html += `
            <div class="flex items-center justify-between p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 transition-all hover:border-amber-500/40">
                <div class="flex items-center space-x-3">
                    <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center text-xs">${idx + 1}</span>
                    <div>
                        <h4 class="font-bold text-white text-sm">${item.title}</h4>
                        <p class="text-xs text-slate-400">${item.loc} · 游玩参考 ${item.time}</p>
                    </div>
                </div>
                <button onclick="removeWishlistItem('${item.id}')" class="text-slate-400 hover:text-red-400 text-xs px-2 py-1 rounded transition-colors" title="移除此项">
                    ✕
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
    if (totalTimeEl) {
        totalTimeEl.textContent = `共精选 ${list.length} 处古迹 · 建议规划 1-2 日游`;
    }
}

window.removeWishlistItem = function(id) {
    let list = getWishlist();
    list = list.filter(i => i.id !== id);
    saveWishlist(list);
    updateWishlistBadges();
    renderWishlistDrawer();
    showToast('已从心愿单移除');
};

window.toggleWishlistDrawer = function() {
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('wishlistBackdrop');
    if (!drawer) return;

    const isOpen = !drawer.classList.contains('translate-x-full');
    if (isOpen) {
        drawer.classList.add('translate-x-full');
        if (backdrop) backdrop.classList.add('hidden');
    } else {
        drawer.classList.remove('translate-x-full');
        if (backdrop) backdrop.classList.remove('hidden');
        renderWishlistDrawer();
    }
};

window.copyWishlistPlan = function() {
    const list = getWishlist();
    if (list.length === 0) {
        showToast('心愿单中暂无景点，请先添加！');
        return;
    }

    let text = `【我的津门古建研学旅行清单】\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    list.forEach((item, idx) => {
        text += `${idx + 1}. ${item.title}（${item.loc} | 建议游玩：${item.time}）\n`;
    });
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `来源：津门华章 · 天津古建文旅宣传门户 (https://github.com/Johnwatson1234/tjgj)\n`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 行程清单已复制到剪贴板，可粘贴分享！');
        }).catch(() => {
            alert(text);
        });
    } else {
        alert(text);
    }
};

/**
 * 移动端侧边抽屉菜单
 */
function initMobileNav() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileNavDrawer');
    const closeBtn = document.getElementById('closeMobileNav');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.remove('hidden');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    }

    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

/**
 * 国风传统雅音合成播放器 (Web Audio API - 零外链防阻断)
 * 基于五声调式（宫、商、角、徵、羽）合成清雅的古筝与编钟轻音
 */
let audioCtx = null;
let isAudioPlaying = false;
let audioTimer = null;

function initAmbientAudio() {
    const toggleBtn = document.getElementById('ambientMusicBtn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function() {
        if (!isAudioPlaying) {
            startAmbientAudio();
            toggleBtn.innerHTML = '🎵 <span class="hidden sm:inline">雅音：播放中</span>';
            toggleBtn.classList.add('text-amber-300', 'border-amber-400');
            showToast('🎶 已开启古韵雅音伴奏（轻柔国风环境音）');
        } else {
            stopAmbientAudio();
            toggleBtn.innerHTML = '🔇 <span class="hidden sm:inline">古韵雅音</span>';
            toggleBtn.classList.remove('text-amber-300', 'border-amber-400');
            showToast('已静音伴奏');
        }
    });
}

function startAmbientAudio() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    isAudioPlaying = true;

    // 中国传统五声宫调频率 (C4, D4, E4, G4, A4, C5, D5, E5, G5)
    const pentatonicFreqs = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];

    function playNote() {
        if (!isAudioPlaying || !audioCtx) return;

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        // 随机挑选五声音符
        const freq = pentatonicFreqs[Math.floor(Math.random() * pentatonicFreqs.length)];
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        // 模拟古琴/古筝弹拨音衰减包络
        const now = audioCtx.currentTime;
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 2.0);

        // 随机下一次弹奏时机（1.2秒 - 2.8秒之间）
        const nextDelay = 1200 + Math.random() * 1600;
        audioTimer = setTimeout(playNote, nextDelay);
    }

    playNote();
}

function stopAmbientAudio() {
    isAudioPlaying = false;
    if (audioTimer) clearTimeout(audioTimer);
}

/**
 * 页面全局滚动观察
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
        observer.observe(el);
    });
}

/**
 * 返回顶部按钮
 */
function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.remove('opacity-0', 'pointer-events-none');
            btn.classList.add('opacity-100');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none');
            btn.classList.remove('opacity-100');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * 轻量全局提示气泡 (Toast)
 */
function showToast(message, duration = 2800) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 text-white px-6 py-3 rounded-full shadow-2xl border border-amber-500/40 backdrop-blur-md text-sm font-medium transition-all duration-300 opacity-0 pointer-events-none flex items-center space-x-2';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<span>🏮</span><span>${message}</span>`;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    if (toast.timer) clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none');
    }, duration);
}