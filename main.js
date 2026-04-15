// 许愿相关
const wishes = [];

// 初始化星空
function initWishStars() {
    const container = document.getElementById('wishContainer');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'wish-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.onclick = () => makeWish();
        container.appendChild(star);
    }
}

// 许愿
function makeWish() {
    const input = document.getElementById('wishInput');
    const wishText = input.value.trim();
    
    if (!wishText) {
        alert('请先输入愿望~');
        return;
    }
    
    wishes.push(wishText);
    input.value = '';
    
    // 添加到愿望列表
    const wishList = document.getElementById('wishList');
    const wishItem = document.createElement('div');
    wishItem.className = 'wish-item';
    wishItem.textContent = '⭐ ' + wishText;
    wishList.appendChild(wishItem);
    
    // 创建许愿特效
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createWishEffect(), i * 100);
    }
}

// 许愿特效
function createWishEffect() {
    const heart = document.createElement('div');
    const hearts = ['⭐', '✨', '💫'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.cssText = 'position:fixed;left:50%;top:70%;font-size:2rem;pointer-events:none;animation:wishFly 2s ease-out forwards;z-index:9999';
    document.body.appendChild(heart);
    
    const x = (Math.random() - 0.5) * 400;
    heart.style.setProperty('--x', x + 'px');
    
    setTimeout(() => heart.remove(), 2000);
}

// 情书内容
const letters = [
    {
        title: '第一封信',
        date: '2024年8月7日',
        content: '亲爱的张爽：今天是我们相遇的日子，也是我人生中最重要的一天。从第一眼看到你，我就知道，你是我一直在寻找的那个人。你的笑容像阳光一样温暖，照亮了我的世界。我想对你说，谢谢你出现在我的生命里。和你在一起的每一天，都是我最珍贵的时光。我会好好珍惜你，用心去爱你。爱你的吴宇航'
    },
    {
        title: '第二封信',
        date: '2024年9月',
        content: '亲爱的张爽：我们在一起一个月了。这一个月，我每天都很开心。记得我们第一次聊天到深夜，记得我们第一次视频通话。你的每一个瞬间都让我心动。我发现自己越来越喜欢你了。张爽，你知道吗，你是我的唯一。我想和你一直走下去。爱你的吴宇航'
    },
    {
        title: '第三封信',
        date: '2024年10月',
        content: '亲爱的张爽：今天是我们在一起两个月整。这两个月，我们一起经历了很多的第一次。第一次牵手，第一次拥抱，第一次接吻。每一个都在加深我对你的爱。张爽，谢谢你包容我的坏脾气，我会用行动证明，我对你的爱是真的。爱你的吴宇航'
    },
    {
        title: '第四封信',
        date: '2024年11月',
        content: '亲爱的张爽：和你在一起三个月了。时间过得真快，眨眼间我们已经一起经历了那么多。每一个回忆都是甜蜜的。这三个月中，我更加了解了你。你的每一个瞬间，都让我深深着迷。能够遇见你，是我这辈子最大的幸运。爱你的吴宇航'
    },
    {
        title: '第五封信',
        date: '2024年12月',
        content: '亲爱的张爽：今天是我们在一起四个月，也是我们一起过的第一个跨年。2024年，最幸运的事就是遇见你。2025年，我最大的愿望就是一直陪在你身边。张爽，谢谢你这一年的陪伴和包容。新年快乐！我爱你 ❤️ 爱你的吴宇航'
    },
    {
        title: '第六封信',
        date: '2025年4月15日',
        content: '亲爱的张爽：今天是我们的一周年纪念日！时间过得好快，一眨眼我们已经在一起一年了。回想这一年来，我们一起经历了很多。有欢笑，有泪水，有争吵，但更多的是甜蜜和幸福。感谢你一直陪在我身边，感谢你包容我的小脾气，感谢你用爱温暖我。张爽，谢谢你选择了我。一周年快乐！我爱你 ❤️ 爱你的吴宇航'
    }
];

// 渲染情书
function renderLetters() {
    const wrapper = document.getElementById('lettersWrapper');
    if (!wrapper) return;
    
    letters.forEach((letter, index) => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.onclick = () => openLetter(index);
        card.innerHTML = `
            <div class="letter-icon">💌</div>
            <div class="letter-title">${letter.title}</div>
            <div class="letter-date">${letter.date}</div>
            <div class="letter-preview">${letter.content.substring(0, 40)}...</div>
        `;
        wrapper.appendChild(card);
    });
}

// 打开信件弹窗（支持触摸关闭）
function openLetter(index) {
    const letter = letters[index];
    const modal = document.createElement('div');
    modal.className = 'letter-modal';
    modal.style.cssText = 'display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10000;';
    modal.innerHTML = `
        <div style="background:#fff;border-radius:20px;padding:40px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto;position:relative;touch-action:pan-y;">
            <span onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:15px;right:15px;font-size:1.5rem;cursor:pointer;padding:10px;">✕</span>
            <h3 style="font-size:1.5rem;color:var(--primary);margin-bottom:10px;">${letter.title}</h3>
            <p style="font-size:0.9rem;color:var(--text-light);margin-bottom:25px;">${letter.date}</p>
            <p style="font-size:1rem;line-height:2;text-align:left;white-space:pre-wrap;">${letter.content}</p>
        </div>
    `;
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    document.body.appendChild(modal);
}

// 情话数组
const sweetWords = [
    "张爽，这一年来，有你的每一天，都是我最珍贵的时光。",
    "不管未来多远，吴宇航都想陪你走下去。",
    "张爽，你是上天给我最好的礼物。",
    "遇见你，是我最美丽的意外。",
    "我想和你一起慢慢变老。",
    "张爽，你的笑容，比春天的花还要美。",
    "只要有你在，每一天都是晴天。",
    "我爱你，不止今天，而是每一天。",
    "和你一起的每个瞬间，我都想要珍藏。",
    "张爽，你是吴宇航的唯一，我的例外。",
    "我可能不是最好的，但爱你是最认真的。",
    "想陪你去看每一次日出日落。",
    "张爽的名字，是我写过最短的情书。",
    "我爱你，如鲸向海，如鸟投林。",
    "往后余生，风雪是你，平淡是你，清贫是你，荣华是你。",
    "张爽，谢谢你选择了我，我会用一生珍惜你。",
    "今天也要对张爽说：我爱你❤️",
    "吴宇航的心里，永远住着一个张爽。",
    "和张爽在一起的每一天，爱你如初。",
    "最好的风景，是和张爽一起看过的每一次。",
    "张爽，你是我平淡生活中的小确幸。",
    "不管发生什么，我都会陪在你身边。",
    "和张爽吵架不可怕，可怕的是失去你。",
    "你的喜怒哀乐，都牵动着我的心。",
    "这辈子最大的幸运，就是遇见张爽。",
    "只想和张爽一起，过简单幸福的生活。",
    "我的未来规划里，每一页都有张爽。",
    "张爽，余生请多指教。",
    "从相识到相恋，每一天都值得纪念。",
    "因为有你，这个世界变得格外温柔。",
    "张爽，我会永远爱你。",
    "和张爽一起的时光，都是美好的时光。"
];

let currentWordIndex = 0;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initPetals();
    initCounter();
    showNewWord();
    initStars();
    initMouseHeart();
    initScrollHeart();
    renderLetters();
    initWishStars();
    initDanmu();
});

// 飘落的花瓣
function initPetals() {
    const petalsContainer = document.getElementById('petals');
    const petalCount = 25;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
        petal.style.animationDelay = (Math.random() * 10) + 's';
        
        const size = Math.random() * 15 + 10;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        const opacity = Math.random() * 0.4 + 0.4;
        petal.style.opacity = opacity;
        
        const colors = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FFc0cb'];
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        petalsContainer.appendChild(petal);
    }
}

// 相恋天数计算器
function initCounter() {
    updateCounter();
    setInterval(updateCounter, 1000);
}

function updateCounter() {
    const startDate = new Date('2024-08-07T00:00:00');
    const now = new Date();
    
    const diff = now - startDate;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
}

// 显示新的情话
function showNewWord() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * sweetWords.length);
    } while (newIndex === currentWordIndex);
    
    currentWordIndex = newIndex;
    
    const wordElement = document.getElementById('daily-word');
    wordElement.style.opacity = 0;
    
    setTimeout(() => {
        wordElement.textContent = sweetWords[currentWordIndex];
        wordElement.style.opacity = 1;
    }, 300);
}

// 背景星星
function initStars() {
    const container = document.getElementById('bgStars');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'bg-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        
        const size = Math.random() * 3 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        container.appendChild(star);
    }
}

// 鼠标/触摸跟随爱心（仅桌面端）
function initMouseHeart() {
    if (window.matchMedia('(hover: hover)').matches) {
        const hearts = ['❤️', '💕', '💗', '💖'];
        const heart = document.createElement('div');
        heart.className = 'mouse-heart';
        heart.style.cssText = 'position:fixed;pointer-events:none;font-size:1.5rem;opacity:0;transition:opacity 0.3s;z-index:9999';
        document.body.appendChild(heart);
        
        document.addEventListener('mousemove', (e) => {
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            heart.style.opacity = '0';
        });
    }
}

// 滚动爱心（优化移动端性能）
function initScrollHeart() {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking && Math.random() > 0.95) {
            ticking = true;
            requestAnimationFrame(() => {
                const heart = document.createElement('div');
                heart.textContent = '❤️';
                heart.style.cssText = 'position:fixed;left:' + Math.random() * window.innerWidth + 'px;top:-50px;font-size:1.5rem;animation:scrollHeart 3s linear forwards;z-index:9999';
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 3000);
                ticking = false;
            });
        }
    });
}

// 点击爱心（支持触摸）
let clickTimes = 0;
function clickHeart(e) {
    if (e) e.preventDefault();
    clickTimes++;
    document.getElementById('clickCount').textContent = clickTimes;
    
    // 创建爆炸效果
    const hearts = ['❤️', '💕', '💗', '💖', '💘'];
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = 'position:fixed;left:50%;top:50%;font-size:2rem;pointer-events:none;animation:heartExplode 1s ease-out forwards;z-index:9999';
        document.body.appendChild(heart);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 100 + Math.random() * 100;
        heart.style.setProperty('--x', Math.cos(angle) * distance + 'px');
        heart.style.setProperty('--y', Math.sin(angle) * distance + 'px');
        
        setTimeout(() => heart.remove(), 1000);
    }
}

// 未来计划清单
function toggleBucket(element) {
    element.classList.toggle('completed');
    const check = element.querySelector('.bucket-check');
    if (element.classList.contains('completed')) {
        check.textContent = '✓';
    } else {
        check.textContent = '○';
    }
    updateProgress();
}

function updateProgress() {
    const completed = document.querySelectorAll('.bucket-item.completed').length;
    document.getElementById('completedCount').textContent = completed;
}

// 动态贺卡
let selectedCard = 0;
function selectCard(index) {
    selectedCard = index;
}

function createCard() {
    const message = document.getElementById('cardMessage').value.trim();
    if (!message) {
        alert('请先输入祝福语~');
        return;
    }
    
    const result = document.getElementById('cardResult');
    const emojis = ['❤️', '💕', '💖', '💗'];
    
    result.innerHTML = `
        <div class="card-display">
            <div style="font-size:3rem;margin-bottom:15px;">${emojis[selectedCard]}</div>
            <div class="card-display-text">${message}</div>
            <div class="card-display-from">— 吴宇航</div>
        </div>
    `;
}

// 情侣默契问答
const quizQuestions = [
    { q: '我们第一次见面是在哪里？', answers: ['咖啡店', '商场', '操场', '其他地方'], correct: 2 },
    { q: '她的生日是几月几号？', answers: ['4月15日', '6月21日', '8月7日', '10月1日'], correct: 1 },
    { q: '我们第一次约会去了哪里？', answers: ['电影院', '麻辣烫店', '游乐场', '公园'], correct: 1 },
    { q: '她最喜欢什么颜色？', answers: ['粉色', '蓝色', '白色', '绿色'], correct: 0 },
    { q: '我们在一起多久了？', answers: ['271天', '365天', '616天', '500天'], correct: 2 }
];

let currentQuestion = 0;
let score = 0;

function checkAnswer(answerIndex, element) {
    const correct = quizQuestions[currentQuestion].correct;
    const options = document.querySelectorAll('.option');
    
    if (answerIndex === correct) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
        options[correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showQuestion() {
    const q = quizQuestions[currentQuestion];
    document.getElementById('quizQuestion').querySelector('.q-num').textContent = currentQuestion + 1;
    document.getElementById('quizQuestion').querySelector('.q-text').textContent = q.q;
    
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.textContent = q.answers[i];
        opt.classList.remove('correct', 'wrong');
    });
}

function showResult() {
    document.getElementById('quizBox').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    document.getElementById('scoreNumber').textContent = score + '/' + quizQuestions.length;
    
    let text = '';
    if (score === 5) text = '💕 完美默契！我们是天生一对！';
    else if (score >= 3) text = '❤️ 很默契哦！继续加油！';
    else text = '💔 需要更了解对方啦~';
    
    document.getElementById('resultText').textContent = text;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quizBox').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    showQuestion();
}

// 许愿池
const pondWishes = [];

// 弹幕祝福
const danmuMessages = [
    '张爽，我爱你 ❤️',
    '一周年快乐 🎉',
    '永远在一起 💕',
    '你是我的唯一 💖',
    '有你是福气 💗',
    '幸福满满 💘',
    '爱你每一天 💞',
    ' sweet love  💟',
    '你是天使 👼',
    '宠你一生 🧡',
    '你是我的宝 💝',
    '永远爱你 💋'
];

function initDanmu() {
    setInterval(() => {
        showDanmu();
    }, 3000);
}

function showDanmu() {
    const container = document.getElementById('danmuContainer');
    if (!container) return;
    
    const danmu = document.createElement('div');
    danmu.className = 'danmu';
    danmu.textContent = danmuMessages[Math.floor(Math.random() * danmuMessages.length)];
    
    const top = Math.random() * 80 + 10;
    const delay = Math.random() * 2;
    const fontSize = Math.random() * 0.5 + 1;
    const colors = ['#FF6B9D', '#FFB6C1', '#FF69B4', '#FF1493'];
    
    danmu.style.top = top + '%';
    danmu.style.animationDelay = delay + 's';
    danmu.style.fontSize = fontSize + 'rem';
    danmu.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(danmu);
    
    setTimeout(() => danmu.remove(), 15000);
}
function throwCoin() {
    const input = document.getElementById('pondWish');
    const wishText = input.value.trim();
    
    if (!wishText) {
        alert('请先输入愿望~');
        return;
    }
    
    pondWishes.push(wishText);
    input.value = '';
    
    const container = document.getElementById('wishesInPond');
    
    const coin = document.createElement('span');
    coin.className = 'wish-coin';
    coin.textContent = '🪙';
    coin.style.animationDelay = Math.random() + 's';
    container.appendChild(coin);
    
    const wishDisplay = document.createElement('div');
    wishDisplay.style.cssText = 'position:fixed;left:50%;bottom:0;font-size:1.5rem;pointer-events:none;animation:wishThrow 1.5s ease-out forwards;z-index:9999';
    wishDisplay.textContent = '🪙';
    wishDisplay.style.setProperty('--targetX', (Math.random() - 0.5) * 200 + 'px');
    document.body.appendChild(wishDisplay);
    
    setTimeout(() => wishDisplay.remove(), 1500);
    
    if (pondWishes.length >= 10) {
        alert('🎉 许愿池已满！愿��成真！');
    }
}