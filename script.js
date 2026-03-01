// SENA LUCIEN - Portfolio Script

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initTheme();
    initCounters();
    initButtonGlow();
});

// Navbar
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile on link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            hamburger?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        });
    });
}

// Theme toggle
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
        
        showNotification(
            document.body.classList.contains('light-theme') ? 'Light mode activated' : 'Dark mode activated',
            'info'
        );
    });
}

// Counters
function initCounters() {
    const counters = [
        { element: 'stat1', target: 0 },
        { element: 'stat2', target: 30 },
    ];
    
    counters.forEach(counter => {
        const el = document.getElementById(counter.element);
        if (!el || counter.target === 0) return;
        
        let current = 0;
        const increment = counter.target / 100;
        
        const updateCounter = () => {
            current += increment;
            if (current < counter.target) {
                el.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = counter.target;
            }
        };
        
        updateCounter();
    });
}

// Button glow effect
function initButtonGlow() {
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            btn.style.setProperty('--x', `${x}%`);
            btn.style.setProperty('--y', `${y}%`);
        });
    });
}

// Copy Discord function
function copyDiscord() {
    const discord = '_senalucien';
    navigator.clipboard.writeText(discord).then(() => {
        showNotification('Discord username copied!', 'success');
    }).catch(() => {
        showNotification('Failed to copy', 'error');
    });
}

// Contact form
function submitContact() {
    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');
    
    if (!name.value || !email.value || !message.value) {
        showNotification('Isi semua form dulu bang!', 'error');
        return;
    }
    
    // Simulate send
    showNotification('Pesan terkirim! (simulasi)', 'success');
    
    // Clear form
    name.value = '';
    email.value = '';
    message.value = '';
}

// Notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 
                      type === 'error' ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 
                      'linear-gradient(135deg, #7c3aed, #3b82f6)'};
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideIn 0.3s ease;
        font-family: 'Inter', sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
// Function untuk handle project click (sudah di-handle via onclick di HTML)
// Tapi kita tambahin prevent biar gak konflik

// Update function submitContact yang udah ada, atau tambah ini:
document.addEventListener('DOMContentLoaded', function() {
    // Handle project card click (selain tombol)
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Cek apakah yang diklik adalah link atau tombol
            if (e.target.closest('a') || e.target.closest('button')) {
                return; // Biarin link/tombol jalan sendiri
            }
            // Kalau klik di luar link, buka link project
            const liveLink = this.querySelector('.project-link.live');
            if (liveLink) {
                window.open(liveLink.href, '_blank');
            }
        });
    });
});
// ===== AUTO UPDATE STATS BERDASARKAN PROJECT =====
function updateProjectStats() {
    // Hitung jumlah project yang ADA (bukan coming soon)
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');
    const projectCount = projectCards.length;
    
    // Update angka projects
    const projectsElement = document.getElementById('projectsCount');
    const codeProjectsElement = document.getElementById('codeProjects');
    
    if (projectsElement) {
        projectsElement.textContent = projectCount;
    }
    
    if (codeProjectsElement) {
        codeProjectsElement.textContent = projectCount;
    }
    
    // Days Learning tetap 30 (TIDAK BERUBAH)
    // Enthusiasm tetap ∞ (TIDAK BERUBAH)
    
    console.log(`Projects updated: ${projectCount} project(s)`);
}

// ===== TAMBAH PROJECT BARU (FUNCTION) =====
function addNewProject(projectData) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Hapus coming soon kalo ada (opsional)
    const comingSoon = document.querySelector('.project-card.coming-soon');
    
    // Buat project card baru
    const newCard = document.createElement('div');
    newCard.className = 'project-card';
    newCard.setAttribute('onclick', `window.open('${projectData.url}', '_blank')`);
    newCard.style.cursor = 'pointer';
    
    newCard.innerHTML = `
        <div class="project-banner">
            <img src="${projectData.image}" alt="${projectData.title}" class="project-image">
            <div class="project-overlay">
                <i class="fas fa-external-link-alt"></i>
                <span>Visit Website</span>
            </div>
        </div>
        <div class="project-info">
            <h3 class="project-title">${projectData.title}</h3>
            <p class="project-description">${projectData.description}</p>
            <div class="project-tech">
                ${projectData.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links" style="justify-content: center;">
                <a href="${projectData.url}" target="_blank" class="project-link live">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;
    
    // Tambahin ke grid (sebelum coming soon)
    if (comingSoon) {
        projectsGrid.insertBefore(newCard, comingSoon);
    } else {
        projectsGrid.appendChild(newCard);
    }
    
    // Update stats
    updateProjectStats();
    
    // Show notification
    // showNotification(`Project "${projectData.title}" berhasil ditambahkan!`, 'success');
}

// ===== CONTOH CARA PAKAI =====
// Nanti kalo ada project baru, tinggal panggil function ini:
/*
addNewProject({
    title: "Nama Project Baru",
    description: "Deskripsi project keren",
    image: "https://link.ke/gambar.jpg",
    url: "https://link.ke/project.com",
    tech: ["HTML", "CSS", "JS", "React"]
});
*/

// Panggil saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Update stats pertama kali
    setTimeout(updateProjectStats, 500); // Kasih waktu biar DOM kebaca
});

addNewProject({
    title: "Web to ZIP Generator",
    description: "Website archiver yang bisa mengunduh halaman web beserta semua asetnya (HTML, CSS, JS, gambar) dan mengemasnya menjadi file ZIP. Cocok untuk backup website offline.",
    image: "https://files.catbox.moe/q2un24.png",
    url: "https://ramaxyz22.github.io/web-to-zip/",
    tech: ["HTML5", "CSS3", "JavaScript", "JSZip"]
});

addNewProject({
    title: "Linktree Alternatif rama766hi",
    description: "Website Linktree alternatif dengan desain modern dan futuristik. Dilengkapi profil, link-card interaktif, sosial media, dan view counter. Tema purple-blue khas SENA.",
    image: "https://files.catbox.moe/i2cui8.png",
    url: "https://linktree-rama.vercel.app",
    tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome"]
});

addNewProject({
    title: "RAMA SILALAHI BUTTON V2",
    description: "Versi terbaru dari koleksi button UI dengan 9 efek unik (Gooey, Aurora, Glow Bar, Wave, Shake, Glitch, Squishy, Electric dengan petir, dan Bubble). Dilengkapi dengan active state (efek saat ditekan) dan code snippets siap copy.",
    image: "https://files.catbox.moe/eoyz4g.png",
    url: "https://ramaxyz22.github.io/button-v2/",
    tech: ["HTML5", "CSS3", "JavaScript", "SVG Filters"]
});