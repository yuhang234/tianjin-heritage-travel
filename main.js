// 全局变量
let heroImages = [
    'resources/jingwei1.png',
    'resources/jingwei2.png',
    'resources/jingwei3.png'
];
let currentImageIndex = 0;
let particleSystem;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initHeroBackground();
    initScrollAnimations();
    initParticleSystem();
    initMobileMenu();
    initSmoothScroll();
});

// 初始化英雄区域背景
function initHeroBackground() {
    const heroBg = document.getElementById('heroBg');
    
    // 创建图片轮换
    function changeBackground() {
        heroBg.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
        heroBg.style.backgroundSize = 'cover';
        heroBg.style.backgroundPosition = 'center';
        heroBg.style.transition = 'background-image 2s ease-in-out';
        
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    }
    
    // 初始设置
    changeBackground();
    
    // 每5秒切换一次背景
    setInterval(changeBackground, 5000);
}

// 初始化粒子系统
function initParticleSystem() {
    const container = document.getElementById('particles-container');
    
    // 使用p5.js创建粒子效果
    new p5(function(p) {
        let particles = [];
        
        p.setup = function() {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-container');
            
            // 创建粒子
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    opacity: p.random(0.1, 0.3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // 绘制粒子
            particles.forEach(particle => {
                p.fill(184, 134, 11, particle.opacity * 255); // 古铜金色
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
                
                // 更新位置
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // 边界检测
                if (particle.x < 0 || particle.x > p.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > p.height) particle.vy *= -1;
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

// 初始化滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 初始化移动端菜单
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // 这里可以添加移动端菜单的展开/收起逻辑
            alert('移动端菜单功能即将推出');
        });
    }
}

// 初始化平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 滚动到建筑区域
function scrollToBuildings() {
    const buildingsSection = document.getElementById('buildings');
    if (buildingsSection) {
        buildingsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 显示即将推出提示
function showComingSoon() {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <h3 class="text-2xl font-bold mb-4" style="color: var(--ink-blue);">即将推出</h3>
            <p class="text-gray-600 mb-6">这个功能正在开发中，敬请期待！</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    class="px-6 py-2 rounded-lg text-white" 
                    style="background-color: var(--bronze-gold);">
                知道了
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加动画
    anime({
        targets: modal.querySelector('div'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
}

// 建筑卡片悬停效果
document.addEventListener('DOMContentLoaded', function() {
    const buildingCards = document.querySelectorAll('.building-card');
    
    buildingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});

// 视差滚动效果
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// 导航栏滚动效果
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 向下滚动，隐藏导航栏
        nav.style.transform = 'translateY(-100%)';
    } else {
        // 向上滚动，显示导航栏
        nav.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// 页面加载完成后的动画
document.addEventListener('DOMContentLoaded', function() {
    // 标题动画
    anime({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutQuad'
    });
    
    // 文字动画
    anime({
        targets: '.fade-in',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: anime.stagger(200, {start: 1000}),
        easing: 'easeOutQuad'
    });
});

// 知识问答相关功能
function startQuiz() {
    window.location.href = 'quiz.html';
}

// 建筑详情页面跳转
function navigateToBuilding(buildingId) {
    const buildingPages = {
        'tianhougong': 'tianhougong.html',
        'dulesi': 'dulesi.html',
        'shijiadayuan': 'shijiadayuan.html'
    };
    
    if (buildingPages[buildingId]) {
        window.location.href = buildingPages[buildingId];
    } else {
        showComingSoon();
    }
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 性能监控
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`页面加载时间: ${loadTime.toFixed(2)}ms`);
});