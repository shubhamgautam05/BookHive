const books = [
    {
        id: 1,
        title: "1984",
        author: "George Orwell",
        price: 14.99,
        rating: "4.8",
        category: "sci-fi",
        description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
        pages: 328,
        publisher: "Secker & Warburg",
        year: 1949,
        color: "#1e1e24",
        accent: "#ef4444"
    },
    {
        id: 2,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 18.50,
        rating: "4.7",
        category: "classic",
        description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession'.",
        pages: 180,
        publisher: "Scribner",
        year: 1925,
        color: "#0f172a",
        accent: "#eab308"
    },
    {
        id: 3,
        title: "Dune",
        author: "Frank Herbert",
        price: 22.00,
        rating: "4.9",
        category: "sci-fi",
        description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange.",
        pages: 412,
        publisher: "Chilton Books",
        year: 1965,
        color: "#451a03",
        accent: "#f97316"
    },
    {
        id: 4,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 16.99,
        rating: "4.9",
        category: "classic",
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, told through the eyes of a young girl learning about prejudice and truth.",
        pages: 281,
        publisher: "J. B. Lippincott & Co.",
        year: 1960,
        color: "#14532d",
        accent: "#10b981"
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 12.99,
        rating: "4.6",
        category: "classic",
        description: "A classic of English literature, Pride and Prejudice spins a tale of love, reputation, and class in early nineteenth-century England.",
        pages: 279,
        publisher: "T. Egerton",
        year: 1813,
        color: "#312e81",
        accent: "#a855f7"
    },
    {
        id: 6,
        title: "Brave New World",
        author: "Aldous Huxley",
        price: 15.50,
        rating: "4.7",
        category: "sci-fi",
        description: "A dystopian social science fiction novel and visionary masterpiece describing a futuristic society controlled by technology, sleep-learning, and a mood-altering drug called soma.",
        pages: 268,
        publisher: "Chatto & Windus",
        year: 1932,
        color: "#111827",
        accent: "#0ea5e9"
    },
    {
        id: 7,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        price: 14.00,
        rating: "4.8",
        category: "sci-fi",
        description: "Ray Bradbury's deeply canonical and terrifyingly relevant classic. In a world where television reigns and literature is on the brink of extinction, firemen start fires rather than put them out.",
        pages: 249,
        publisher: "Ballantine Books",
        year: 1953,
        color: "#450a0a",
        accent: "#dc2626"
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 19.99,
        rating: "4.9",
        category: "fantasy",
        description: "A great modern classic and the prelude to The Lord of the Rings. Smaug certainly looked fast asleep, almost dead and dark, with scarcely a snore more than a whiff of unseen steam...",
        pages: 310,
        publisher: "George Allen & Unwin",
        year: 1937,
        color: "#064e3b",
        accent: "#fbbf24"
    },
    {
        id: 9,
        title: "Moby-Dick",
        author: "Herman Melville",
        price: 17.50,
        rating: "4.5",
        category: "classic",
        description: "The epic tale of the obsessive quest of Ahab, captain of the whaler Pequod, for revenge on Moby Dick, the white whale that on the previous whaling voyage bit off Ahab's leg at the knee.",
        pages: 635,
        publisher: "Richard Bentley",
        year: 1851,
        color: "#0c4a6e",
        accent: "#38bdf8"
    },
    {
        id: 10,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 13.99,
        rating: "4.6",
        category: "classic",
        description: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.",
        pages: 234,
        publisher: "Little, Brown and Company",
        year: 1951,
        color: "#4a044e",
        accent: "#d946ef"
    },
    {
        id: 11,
        title: "Frankenstein",
        author: "Mary Shelley",
        price: 11.99,
        rating: "4.7",
        category: "sci-fi",
        description: "The story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.",
        pages: 280,
        publisher: "Lackington, Hughes, Harding, Mavor & Jones",
        year: 1818,
        color: "#052e16",
        accent: "#84cc16"
    },
    {
        id: 12,
        title: "The Odyssey",
        author: "Homer",
        price: 21.00,
        rating: "4.9",
        category: "classic",
        description: "One of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other Homeric epic.",
        pages: 541,
        publisher: "Ancient Greece",
        year: "-800",
        color: "#2e1065",
        accent: "#f472b6"
    },
    {
        id: 13,
        title: "Akira",
        author: "Katsuhiro Otomo",
        price: 24.99,
        rating: "4.9",
        category: "manga",
        description: "The cyberpunk masterpiece that revolutionized global manga and anime. Set in Neo-Tokyo, surviving the rubble of a government-led disaster.",
        pages: 2000,
        publisher: "Kodansha",
        year: 1982,
        color: "#b91c1c",
        accent: "#ef4444"
    },
    {
        id: 14,
        title: "Death Note",
        author: "Tsugumi Ohba",
        price: 15.50,
        rating: "4.8",
        category: "manga",
        description: "Light Yagami finds a notebook that allows him to kill anyone whose name he writes in it. A psychological thriller between two geniuses.",
        pages: 2400,
        publisher: "Shueisha",
        year: 2003,
        color: "#18181b",
        accent: "#e4e4e7"
    },
    {
        id: 15,
        title: "One Piece",
        author: "Eiichiro Oda",
        price: 9.99,
        rating: "4.9",
        category: "manga",
        description: "Join Monkey D. Luffy and his swashbuckling crew in their search for the ultimate treasure, the One Piece, to become the next Pirate King.",
        pages: 200,
        publisher: "Shueisha",
        year: 1997,
        color: "#c2410c",
        accent: "#f97316"
    },
    {
        id: 16,
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        price: 18.00,
        rating: "4.9",
        category: "kids",
        description: "A beautifully illustrated story about Max, a mischievous boy who creates his own jungle world after being sent to bed without supper.",
        pages: 40,
        publisher: "Harper & Row",
        year: 1963,
        color: "#164e63",
        accent: "#06b6d4"
    },
    {
        id: 17,
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        price: 12.50,
        rating: "4.8",
        category: "kids",
        description: "Follow the ravenous caterpillar's path as he eats his way through one apple, two pears, and more before transforming into a beautiful butterfly.",
        pages: 26,
        publisher: "World Publishing Company",
        year: 1969,
        color: "#84cc16",
        accent: "#bef264"
    },
    {
        id: 18,
        title: "Charlotte's Web",
        author: "E.B. White",
        price: 11.99,
        rating: "4.8",
        category: "kids",
        description: "A tender, timeless tale about a pig named Wilbur and his devoted friend Charlotte, a beautiful gray spider.",
        pages: 192,
        publisher: "Harper & Brothers",
        year: 1952,
        color: "#7e22ce",
        accent: "#d8b4fe"
    }
];

// App State
let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const themeBtn = document.getElementById('themeBtn');
const typeSun = document.querySelector('.sun-icon');
const typeMoon = document.querySelector('.moon-icon');
const bgCanvas = document.getElementById('bgCanvas');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const bookModal = document.getElementById('bookModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const filterTabs = document.querySelectorAll('.filter-tab');
const toastContainer = document.getElementById('toastContainer');
const floatingNav = document.querySelector('.floating-nav');

// Initialize On Load
document.addEventListener('DOMContentLoaded', () => {
    // Determine Theme
    const savedTheme = localStorage.getItem('bookHiveTheme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light');
    }
    
    initCanvas();
    loadCart();
    renderBooks();
    setupEventListeners();
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bookHiveTheme', theme);
    if (theme === 'light') {
        typeSun.style.display = 'none';
        typeMoon.style.display = 'block';
    } else {
        typeSun.style.display = 'block';
        typeMoon.style.display = 'none';
    }
}

// Window Scroll Effect for Nav
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        floatingNav.classList.add('scrolled');
    } else {
        floatingNav.classList.remove('scrolled');
    }
});

function renderBooks() {
    booksGrid.innerHTML = '';
    
    // Filter
    let filtered = books;
    if (currentCategory !== 'all') {
        filtered = filtered.filter(b => b.category === currentCategory);
    }
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
        booksGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding: 4rem; color:var(--text-secondary);">
                <span style="font-size:3rem; margin-bottom:1rem; display:block;">📚</span>
                <p>No literary pieces found matching your criteria.</p>
            </div>
        `;
        return;
    }

    // Render with stagger
    filtered.forEach((book, index) => {
        const card = createBookCard(book);
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        booksGrid.appendChild(card);
        
        // Stagger animation
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    const visualId = `visual-${book.id}`;
    const gradientGen = `linear-gradient(135deg, ${book.color} 0%, #000 100%)`;
    
    card.innerHTML = `
        <div class="book-visual" id="${visualId}" style="background: ${gradientGen}">
            <div class="glare-container"><div class="glare"></div></div>
            <div class="cover-inner">
                <div class="cover-title">${book.title}</div>
                <div class="cover-author">${book.author}</div>
            </div>
        </div>
        <div class="book-info">
            <div class="book-details-header">
                <h4 class="book-title" title="${book.title}">${book.title}</h4>
                <div class="book-price">$${book.price.toFixed(2)}</div>
            </div>
            <p class="book-author-text">${book.author}</p>
            <div class="book-actions">
                <button class="add-btn" onclick="event.stopPropagation(); addToCart(${book.id})">
                    Add to Collection
                </button>
            </div>
        </div>
    `;

    // Add 3D Hover Tilt Effects
    attachTiltEffect(card);

    // Click to view Quick Details
    card.addEventListener('click', () => openBookModal(book));
    
    return card;
}

function attachTiltEffect(card) {
    const visual = card.querySelector('.book-visual');
    const glare = card.querySelector('.glare');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;
        
        visual.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        
        // Glare follows mouse
        glare.style.transform = `translate(${x - rect.width}px, ${y - rect.height}px)`;
        glare.style.opacity = '0.3';
    });
    
    card.addEventListener('mouseleave', () => {
        visual.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        glare.style.opacity = '0';
    });
}

function openBookModal(book) {
    const gradientGen = `linear-gradient(135deg, ${book.color} 0%, #000 100%)`;
    const tagColor = 
        book.category === 'sci-fi' ? '#0ea5e9' : 
        book.category === 'classic' ? '#eab308' : 
        book.category === 'fantasy' ? '#a855f7' : 
        book.category === 'manga' ? '#f43f5e' : 
        book.category === 'kids' ? '#10b981' : '#a855f7';
    
    modalBody.innerHTML = `
        <div class="modal-visual-container">
            <div class="modal-visual" style="background: ${gradientGen}">
                <div class="cover-inner">
                    <div class="cover-title">${book.title}</div>
                    <div class="cover-author">${book.author}</div>
                </div>
            </div>
        </div>
        <div class="modal-info">
            <span class="modal-badge" style="color:${tagColor}; border:1px solid ${tagColor}40;">${book.category}</span>
            <h2 class="modal-title">${book.title}</h2>
            <div class="modal-author">by ${book.author}</div>
            
            <p class="modal-desc">${book.description}</p>
            
            <div class="modal-meta-grid">
                <div class="meta-item">
                    <div class="meta-label">Pages</div>
                    <div class="meta-value">${book.pages}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Publisher</div>
                    <div class="meta-value">${book.publisher}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Published Year</div>
                    <div class="meta-value">${book.year}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Rating</div>
                    <div class="meta-value">★ ${book.rating}/5.0</div>
                </div>
            </div>
            
            <div class="modal-actions">
                <div class="modal-price" style="color:${book.accent}">$${book.price.toFixed(2)}</div>
                <button class="modal-btn" style="background:${book.accent}" onclick="addToCart(${book.id}); closeBookModal()">
                    Add to Collection
                </button>
            </div>
        </div>
    `;
    bookModal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookModal() {
    bookModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

/* ================= CART & NOTIFICATIONS ================= */

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    if (cart.find(item => item.id === bookId)) {
        showToast(`"${book.title}" is already in collection.`, 'info');
        return;
    }
    
    cart.push(book);
    updateCart();
    saveCart();
    
    // Animation for cart counter
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
    
    showToast(`Added "${book.title}" to collection!`, 'success');
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    updateCart();
    saveCart();
}

function updateCart() {
    if (cart.length === 0) {
        cartCount.textContent = '0';
        cartCount.style.display = 'none';
        cartItems.innerHTML = '<div class="empty-state">Your library is completely empty.</div>';
    } else {
        cartCount.textContent = cart.length;
        cartCount.style.display = 'block';
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-visual" style="background: linear-gradient(135deg, ${item.color} 0%, #000 100%)"></div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                    </svg>
                </button>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function saveCart() {
    localStorage.setItem('bookHiveCartData', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('bookHiveCartData');
    if (saved) {
        cart = JSON.parse(saved);
        updateCart();
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icon = type === 'success' 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
        
    toast.innerHTML = `${icon} <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

/* ================= EVENT LISTENERS ================= */

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderBooks();
    });
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            filterTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            currentCategory = e.target.dataset.filter;
            renderBooks();
        });
    });
    
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });
    
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    modalClose.addEventListener('click', closeBookModal);
    modalOverlay.addEventListener('click', closeBookModal);
    
    // Theme Toggle logic
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        showToast(`Switched to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode`, 'info');
    });
    
    // Checkout simulated
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Your collection is empty.", "info");
            return;
        }
        showToast("Order Processed Successfully!", "success");
        cart = [];
        updateCart();
        saveCart();
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
}

/* ================= CANVAS ANIMATIONS ================= */
function initCanvas() {
    if (!bgCanvas) return;
    const ctx = bgCanvas.getContext('2d');
    let width, height;
    let particles = [];
    
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        bgCanvas.width = width;
        bgCanvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 0.5;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            const theme = document.documentElement.getAttribute('data-theme');
            ctx.fillStyle = theme === 'light' ? 'rgba(79, 70, 229, 0.4)' : 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
            
            if (mouse.x && mouse.y) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 150) {
                    const theme = document.documentElement.getAttribute('data-theme');
                    const alpha = (1 - dist/150) * 0.3;
                    ctx.strokeStyle = theme === 'light' ? `rgba(79, 70, 229, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}
