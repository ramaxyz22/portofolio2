
:root {
    /* Primary Colors - Purple Blue Theme */
    --primary-purple: #7c3aed;
    --primary-blue: #3b82f6;
    --primary-gradient: linear-gradient(135deg, var(--primary-purple), var(--primary-blue));
    --secondary-gradient: linear-gradient(135deg, #8b5cf6, #4f46e5);
    
    /* Dark Theme */
    --dark-bg: #0a0a0a;
    --darker-bg: #000000;
    --card-bg: #111111;
    --card-hover: #1a1a1a;
    
    /* Light Theme */
    --light-bg: #f5f5f5;
    --light-darker: #e5e5e5;
    --light-card: #ffffff;
    --light-hover: #f0f0f0;
    
    /* Text Colors */
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #6a6a6a;
    
    /* UI Elements */
    --border-radius: 12px;
    --border-radius-lg: 24px;
    --border-radius-xl: 36px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    --shadow-hover: 0 30px 60px rgba(124, 58, 237, 0.3);
    --shadow-light: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    /* Spacing */
    --section-padding: 100px 20px;
    --container-width: 1200px;
    --header-height: 80px;
}

/* ===== LIGHT THEME VARIABLES ===== */
body.light-theme {
    --dark-bg: var(--light-bg);
    --darker-bg: var(--light-darker);
    --card-bg: var(--light-card);
    --card-hover: var(--light-hover);
    --text-primary: #333333;
    --text-secondary: #666666;
    --text-muted: #999999;
    --shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 30px 60px rgba(124, 58, 237, 0.2);
}

/* ===== RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--dark-bg);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
    min-height: 100vh;
}

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

.gradient-text {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
}

/* ===== BACKGROUND ELEMENTS ===== */
.cyber-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: -1;
}

.gradient-orb {
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle at center, var(--primary-purple), transparent);
    filter: blur(60px);
    opacity: 0.3;
    animation: float 20s infinite;
    z-index: -1;
}

.orb1 {
    top: -100px;
    left: -100px;
    background: radial-gradient(circle, var(--primary-purple), transparent);
}

.orb2 {
    bottom: -100px;
    right: -100px;
    background: radial-gradient(circle, var(--primary-blue), transparent);
    animation-delay: -5s;
}

.orb3 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #8b5cf6, transparent);
    opacity: 0.2;
    animation: pulse 15s infinite;
}

@keyframes float {
    0%, 100% { 
        transform: translate(0, 0); 
    }
    33% { 
        transform: translate(50px, -50px); 
    }
    66% { 
        transform: translate(-30px, 30px); 
    }
}

@keyframes pulse {
    0%, 100% { 
        transform: translate(-50%, -50%) scale(1); 
        opacity: 0.2; 
    }
    50% { 
        transform: translate(-50%, -50%) scale(1.2); 
        opacity: 0.3; 
    }
}

/* ===== NAVIGATION ===== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 900;
    padding: 20px 0;
    transition: var(--transition);
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

body.light-theme .navbar {
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar.scrolled {
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.95);
    box-shadow: var(--shadow);
}

body.light-theme .navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
}

.nav-container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Logo */
.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
}

.logo-icon {
    width: 45px;
    height: 45px;
    background: var(--primary-gradient);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: white;
    transform: rotate(10deg);
    transition: var(--transition);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

.logo:hover .logo-icon {
    transform: rotate(0deg) scale(1.1);
    box-shadow: 0 15px 30px rgba(124, 58, 237, 0.5);
}

.logo-text {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
}

/* Navigation Links */
.nav-links {
    display: flex;
    gap: 40px;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: var(--transition);
    font-size: 16px;
    padding: 5px 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-gradient);
    transition: width 0.3s ease;
    border-radius: 2px;
}

.nav-link:hover,
.nav-link.active {
    color: var(--text-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

/* Navigation Actions */
.nav-actions {
    display: flex;
    gap: 15px;
    align-items: center;
}

.theme-toggle {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: var(--transition);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

body.light-theme .theme-toggle {
    background: rgba(0, 0, 0, 0.05);
    color: #333;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
    background: var(--primary-gradient);
    transform: rotate(180deg);
    color: white;
    border-color: transparent;
}

/* Hamburger Menu */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
}

.hamburger span {
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: var(--transition);
    border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
    transform: translateX(-10px);
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    background: var(--darker-bg);
    padding: 20px;
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: var(--shadow);
}

body.light-theme .mobile-menu {
    background: var(--light-darker);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
    transform: translateY(0);
}

.mobile-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 18px;
    padding: 15px 20px;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background: rgba(255, 255, 255, 0.02);
}

.mobile-link:hover {
    background: var(--primary-gradient);
    color: white;
    padding-left: 30px;
}

/* ===== HERO SECTION ===== */
.hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: var(--section-padding);
    gap: 60px;
    position: relative;
}

.hero-content {
    animation: slideInLeft 1s ease;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-badge {
    display: inline-block;
    background: rgba(124, 58, 237, 0.1);
    color: var(--primary-purple);
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 25px;
    border: 1px solid rgba(124, 58, 237, 0.3);
    backdrop-filter: blur(5px);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero-title {
    font-size: 64px;
    margin-bottom: 20px;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 40px;
    max-width: 500px;
    line-height: 1.8;
}

/* Hero Buttons */
.hero-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
    padding: 15px 35px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--primary-gradient);
    color: white;
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    border-color: var(--primary-purple);
}

/* Hero Stats */
.hero-stats {
    display: flex;
    gap: 50px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 42px;
    font-weight: 700;
    display: block;
    background: var(--primary-gradient);
    
    -webkit-text-fill-color: transparent;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 14px;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Hero Visual */
.hero-visual {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap; /* penting buat responsif */
}

.profile-card{
    display:flex;
    align-items:center;
    gap:25px;
    background:rgba(255,255,255,0.05);
    backdrop-filter:blur(10px);
    padding:25px;
    border-radius:20px;
    width:420px;
}

.profile-img{
    width:120px;
    height:150px;
    object-fit:cover;
    border-radius:60px;
    border:3px solid #6c63ff;
}

.code-window {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    transform: perspective(1000px) rotateY(-5deg);
    transition: var(--transition);
}

.code-window:hover {
    transform: perspective(1000px) rotateY(0deg);
    box-shadow: var(--shadow-hover);
}

.window-header {
    background: rgba(255, 255, 255, 0.05);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.window-dots {
    display: flex;
    gap: 8px;
}

.window-dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: var(--transition);
}

.window-dots span:nth-child(1) { background: #ff5f56; }
.window-dots span:nth-child(2) { background: #ffbd2e; }
.window-dots span:nth-child(3) { background: #27c93f; }

.window-dots span:hover {
    transform: scale(1.2);
}

.window-content {
    padding: 25px;
    font-family: 'Space Grotesk', monospace;
    font-size: 14px;
    line-height: 1.8;
    background: var(--darker-bg);
}

/* Code Highlighting */
.comment { color: #6a9955; }
.keyword { color: #569cd6; }
.string { color: #ce9178; }
.function { color: #dcdcaa; }

/* ===== ABOUT SECTION ===== */
.about {
    padding: var(--section-padding);
    max-width: var(--container-width);
    margin: 0 auto;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-size: 48px;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-gradient);
    border-radius: 2px;
}

.section-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    margin-top: 30px;
}

.about-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
}

.about-card {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius-lg);
    padding: 40px 30px;
    text-align: center;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--primary-gradient);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
}

.about-card:hover::before {
    transform: translateX(0);
}

.about-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-purple);
    box-shadow: var(--shadow-hover);
}

.about-icon {
    width: 80px;
    height: 80px;
    background: rgba(124, 58, 237, 0.1);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
    font-size: 36px;
    color: var(--primary-purple);
    transition: var(--transition);
}

.about-card:hover .about-icon {
    background: var(--primary-gradient);
    color: white;
    transform: rotate(360deg) scale(1.1);
}

.about-card h3 {
    font-size: 24px;
    margin-bottom: 15px;
}

.about-card p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 16px;
}

/* ===== PROJECTS SECTION ===== */
.projects {
    padding: var(--section-padding);
    max-width: var(--container-width);
    margin: 0 auto;
}

.projects-empty {
    text-align: center;
    padding: 80px 20px;
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius-lg);
    animation: fadeIn 1s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.projects-empty i {
    font-size: 80px;
    color: var(--primary-purple);
    margin-bottom: 30px;
    opacity: 0.5;
    animation: float 3s infinite;
}

.projects-empty h3 {
    font-size: 32px;
    margin-bottom: 15px;
}

.projects-empty p {
    color: var(--text-secondary);
    margin-bottom: 40px;
    font-size: 18px;
}

.empty-progress {
    max-width: 400px;
    margin: 0 auto;
}

.progress-text {
    margin-bottom: 10px;
    color: var(--text-secondary);
    font-weight: 500;
}

.progress-bar-container {
    width: 100%;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress-fill {
    height: 100%;
    background: var(--primary-gradient);
    border-radius: 5px;
    transition: width 1s ease;
    position: relative;
    animation: progressPulse 2s infinite;
}

@keyframes progressPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

/* ===== SKILLS SECTION ===== */
.skills {
    padding: var(--section-padding);
    background: var(--darker-bg);
    position: relative;
    overflow: hidden;
}

.skills::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-purple), var(--primary-blue), transparent);
}

.skills-container {
    max-width: var(--container-width);
    margin: 0 auto;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
}

.skill-category {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius-lg);
    padding: 35px;
    transition: var(--transition);
}

.skill-category:hover {
    transform: translateY(-5px);
    border-color: var(--primary-purple);
    box-shadow: var(--shadow-hover);
}

.skill-category h3 {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--primary-purple);
    margin-bottom: 25px;
    font-size: 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 15px;
}

.skill-category h3 i {
    font-size: 24px;
}

.skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.skill-item {
    background: rgba(124, 58, 237, 0.1);
    padding: 8px 18px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    border: 1px solid rgba(124, 58, 237, 0.3);
    transition: var(--transition);
    cursor: default;
}

.skill-item:hover {
    background: var(--primary-gradient);
    border-color: transparent;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

/* ===== CONTACT SECTION ===== */
.contact {
    padding: var(--section-padding);
    max-width: var(--container-width);
    margin: 0 auto;
}

.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius-lg);
    padding: 50px;
    margin-top: 50px;
    box-shadow: var(--shadow);
}

/* Contact Buttons */
.contact-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-btn {
    position: relative;
    text-decoration: none;
    color: white;
    border-radius: 20px;
    padding: 25px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    cursor: pointer;
}

.contact-btn:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 40px rgba(0, 0, 0, 0.4);
}

/* Button Colors */
.contact-btn.github:hover {
    border-color: #7c3aed;
    box-shadow: 0 30px 40px rgba(124, 58, 237, 0.4);
    background: rgba(124, 58, 237, 0.1);
}

.contact-btn.discord:hover {
    border-color: #5865f2;
    box-shadow: 0 30px 40px rgba(88, 101, 242, 0.4);
    background: rgba(88, 101, 242, 0.1);
}

.contact-btn.email:hover {
    border-color: #3b82f6;
    box-shadow: 0 30px 40px rgba(59, 130, 246, 0.4);
    background: rgba(59, 130, 246, 0.1);
}

.btn-content {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    z-index: 2;
}

.btn-icon {
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.contact-btn:hover .btn-icon {
    transform: rotate(360deg) scale(1.1);
    background: var(--primary-gradient);
}

.btn-text {
    flex: 1;
}

.btn-label {
    display: block;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}

.btn-handle {
    display: block;
    font-size: 15px;
    color: var(--text-secondary);
}

/* Glow Effect */
.btn-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
                                rgba(255, 255, 255, 0.3) 0%, 
                                transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
}

.contact-btn:hover .btn-glow {
    opacity: 1;
}

/* Particle Animation */
.btn-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
}

.btn-particles::before,
.btn-particles::after,
.btn-particles span {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    animation: particleFloat 3s infinite;
}

.btn-particles::before {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.btn-particles::after {
    bottom: 30%;
    right: 15%;
    animation-delay: 1.5s;
}

.btn-particles span {
    top: 60%;
    left: 80%;
    animation-delay: 0.8s;
    display: block;
}

@keyframes particleFloat {
    0%, 100% {
        transform: translate(0, 0);
        opacity: 0;
    }
    25% {
        transform: translate(15px, -15px);
        opacity: 0.8;
    }
    50% {
        transform: translate(30px, -30px);
        opacity: 0;
    }
}

/* Contact Form */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-form input,
.contact-form textarea {
    padding: 18px 22px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    transition: var(--transition);
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-purple);
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: var(--text-muted);
}

.contact-form button {
    margin-top: 10px;
    width: 100%;
    justify-content: center;
}

/* ===== FOOTER ===== */
.footer {
    background: var(--darker-bg);
    padding: 70px 20px 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    position: relative;
}

.footer::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-purple), var(--primary-blue), transparent);
}

.footer-content {
    max-width: var(--container-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 50px;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 15px;
}

.footer-brand .logo-icon {
    width: 50px;
    height: 50px;
    font-size: 24px;
}

.footer-brand span {
    font-size: 24px;
    font-weight: 700;
}

.footer-links {
    display: flex;
    gap: 40px;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition);
    font-size: 16px;
    font-weight: 500;
}

.footer-links a:hover {
    color: var(--primary-purple);
    transform: translateY(-2px);
}

.footer-social {
    display: flex;
    gap: 25px;
}

.footer-social a {
    color: var(--text-secondary);
    font-size: 22px;
    transition: var(--transition);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-social a:hover {
    color: white;
    background: var(--primary-gradient);
    transform: translateY(-5px) rotate(360deg);
    border-color: transparent;
}

.footer-bottom {
    max-width: var(--container-width);
    margin: 0 auto;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    color: var(--text-muted);
    font-size: 14px;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
    }
  
    .hero-subtitle {
        margin: 0 auto 30px;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .about-container {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .contact-container {
        grid-template-columns: 1fr;
    }
    
    .code-window {
        max-width: 600px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: #0a0a0a;
        padding: 20px;
        transform: translateY(-150%);
        transition: 0.3s;
        display: flex;
    }

    .nav-links.active {
        transform: translateY(0);
    }
}
    
    .hamburger {
        display: flex;
    }
    
    .hero-title {
        font-size: 48px;
    }
    
    .section-title {
        font-size: 36px;
    }
    
    .about-container {
        grid-template-columns: 1fr;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-links {
        flex-direction: column;
        gap: 20px;
    }
    
    .footer-social {
        justify-content: center;
    }
    
    .contact-container {
        padding: 30px;
    }
    
    .btn-content {
        flex-direction: column;
        text-align: center;
    }
    
    .btn-icon {
        margin: 0 auto;
    }


@media (max-width: 480px) {
    .hero-title {
        font-size: 36px;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .btn-primary,
    .btn-secondary {
        width: 100%;
        justify-content: center;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .stat-item {
        width: 100%;
    }
    
    .contact-container {
        padding: 20px;
    }
    
    .contact-btn {
        padding: 20px;
    }
    
    .btn-icon {
        width: 60px;
        height: 60px;
        font-size: 30px;
    }
}

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: var(--darker-bg);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--primary-purple), var(--primary-blue));
    border-radius: 6px;
    border: 3px solid var(--darker-bg);
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
}

::-webkit-scrollbar-corner {
    background: var(--darker-bg);
}

/* ===== SELECTION ===== */
::selection {
    background: var(--primary-purple);
    color: white;
}

::-moz-selection {
    background: var(--primary-purple);
    color: white;
}

/* ===== LOADING ANIMATION ===== */
.loading {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: var(--primary-purple);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* ===== TOOLTIP ===== */
[data-tooltip] {
    position: relative;
    cursor: help;
}

[data-tooltip]:before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    background: var(--card-bg);
    color: var(--text-primary);
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 14px;
    white-space: nowrap;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: var(--shadow);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    pointer-events: none;
    z-index: 1000;
}

[data-tooltip]:hover:before {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-5px);
}

/* ===== FOCUS OUTLINE ===== */
:focus-visible {
    outline: 2px solid var(--primary-purple);
    outline-offset: 2px;
}

/* ===== PRINT STYLES ===== */
@media print {
    .navbar,
    .footer,
    .contact-form,
    .hero-buttons {
        display: none;
    }
    
    body {
        background: white;
        color: black;
    }
    
    .gradient-text {
        -webkit-text-fill-color: black;
        background: none;
    }
}
/* ===== LOGO-ONLY CONTACT BUTTONS ===== */
.contact-buttons.logo-only {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    padding: 20px;
}

.contact-buttons.logo-only .contact-btn {
    width: 100px;
    height: 100px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    cursor: pointer;
}

.contact-buttons.logo-only .contact-btn .btn-icon {
    width: 60px;
    height: 60px;
    margin: 0;
    background: transparent;
    font-size: 40px;
    transition: all 0.5s ease;
}

.contact-buttons.logo-only .contact-btn:hover {
    transform: translateY(-10px) scale(1.1);
    border-color: var(--primary-purple);
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.4);
}

.contact-buttons.logo-only .contact-btn:hover .btn-icon {
    transform: scale(1.2) rotate(360deg);
    color: white;
}

/* Tooltip */
.contact-buttons.logo-only .btn-tooltip {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-gradient);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    white-space: nowrap;
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
    pointer-events: none;
    z-index: 10;
}

.contact-buttons.logo-only .contact-btn:hover .btn-tooltip {
    opacity: 1;
    visibility: visible;
    bottom: -40px;
}

/* Warna spesifik per button */
.contact-buttons.logo-only .github:hover {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.1);
}

.contact-buttons.logo-only .discord:hover {
    border-color: #5865f2;
    background: rgba(88, 101, 242, 0.1);
}

.contact-buttons.logo-only .email:hover {
    border-color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
}

/* Particle effects */
.contact-buttons.logo-only .btn-particles::before,
.contact-buttons.logo-only .btn-particles::after {
    width: 4px;
    height: 4px;
}

/* Responsive */
@media (max-width: 768px) {
    .contact-buttons.logo-only {
        gap: 20px;
    }
    
    .contact-buttons.logo-only .contact-btn {
        width: 80px;
        height: 80px;
    }
    
    .contact-buttons.logo-only .contact-btn .btn-icon {
        width: 50px;
        height: 50px;
        font-size: 30px;
    }
}

@media (max-width: 480px) {
    .contact-buttons.logo-only {
        gap: 15px;
    }
    
    .contact-buttons.logo-only .contact-btn {
        width: 70px;
        height: 70px;
    }
}
/* Biar progress bar keliatan bagus di atas */
.projects-empty {
    text-align: center;
    padding: 40px 20px;
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius-lg);
    margin-bottom: 50px;
}

.projects-empty i {
    font-size: 60px;
    color: var(--primary-purple);
    margin-bottom: 20px;
    opacity: 0.8;
}

.projects-empty h3 {
    font-size: 28px;
    margin-bottom: 10px;
}

.projects-empty p {
    color: var(--text-secondary);
    margin-bottom: 30px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.empty-progress {
    max-width: 400px;
    margin: 0 auto;
}

.progress-text {
    margin-bottom: 10px;
    color: var(--text-secondary);
    font-weight: 500;
}

.progress-bar-container {
    width: 100%;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress-fill {
    height: 100%;
    background: var(--primary-gradient);
    border-radius: 5px;
    transition: width 1s ease;
    position: relative;
    animation: progressPulse 2s infinite;
}

@keyframes progressPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}
/* ===== PROJECT CARDS ===== */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.project-card {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    transition: var(--transition);
    box-shadow: var(--shadow);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-purple);
}

.project-banner {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .project-image {
    transform: scale(1.1);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(124, 58, 237, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;
}

.project-overlay i {
    font-size: 40px;
    animation: bounce 2s infinite;
}

.project-overlay span {
    font-size: 18px;
    font-weight: 600;
}

.project-banner:hover .project-overlay {
    opacity: 1;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Coming Soon Card */
.coming-soon {
    opacity: 0.7;
    cursor: default;
}

.coming-soon .project-banner {
    background: linear-gradient(135deg, #333, #666);
    display: flex;
    align-items: center;
    justify-content: center;
}

.coming-soon-overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: white;
}

.coming-soon-overlay i {
    font-size: 50px;
    animation: float 3s infinite;
}

.coming-soon-overlay span {
    font-size: 24px;
    font-weight: 600;
    background: rgba(255,255,255,0.2);
    padding: 8px 20px;
    border-radius: 50px;
}

.project-info {
    padding: 20px;
}

.project-title {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--text-primary);
}

.project-description {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 15px;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.tech-tag {
    background: rgba(124, 58, 237, 0.1);
    padding: 5px 12px;
    border-radius: 50px;
    font-size: 12px;
    color: var(--primary-purple);
    border: 1px solid rgba(124, 58, 237, 0.3);
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition);
}

.project-link.live {
    background: var(--primary-gradient);
    color: white;
}

.project-link.live:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

.project-link.code {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-link.code:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .project-banner {
        height: 180px;
    }
}
.gradient-orb {
    position: fixed;      /* supaya jadi background */
    z-index: -1;          /* TARUH DI BELAKANG SEMUA */
    pointer-events: none; /* supaya tidak ganggu klik */
}
body {
    position: relative;
    overflow-x: hidden;
}
/* ================= SCHEDULE ================= */

.schedule {
    padding: 100px 5%;
    position: relative;
    z-index: 2;
}

.schedule-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.schedule-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 30px;
    transition: 0.4s ease;
}

.schedule-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
}

.schedule-day {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    background: var(--primary-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.schedule-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}

.schedule-item .time {
    opacity: 0.7;
}

.schedule-item .course {
    font-weight: 500;
}
.footer {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(10px);
}

.gradient-orb,
.cyber-grid {
    z-index: -1;
    position: fixed;
}.hero-content,
.hero-stats {
    position: relative;
    z-index: 10;
}
.hero-visual {
    position: relative;
    z-index: 1;
}

.code-window {
    z-index: 1;
}
.hero {
    position: relative;
    z-index: 5;
}
.projects,
.schedule {
    margin-top: 100px;
}

.typing-text {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(90deg, #7f5af0, #2cb67d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-right: 3px solid #7f5af0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    display: inline-block;
    animation: typing 3s steps(20) forwards, blink 0.7s infinite;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink {
    50% { border-color: transparent }
}
.logo-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #7f5af0;
}
.typing-text {
    animation: typing 3s steps(20) forwards, blink 0.7s infinite, glow 2s infinite alternate;
}

@keyframes glow {
    from { text-shadow: 0 0 5px #7f5af0; }
    to { text-shadow: 0 0 20px #7f5af0, 0 0 30px #2cb67d; }
}
.profile-card {
    text-align: center;
    padding: 30px;
    border-radius: 20px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(15px);
    animation: float 4s ease-in-out infinite;
}

.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #7f5af0;
    object-fit: cover;
    margin-bottom: 15px;
}

@keyframes float {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
.profile-card h3 {
    margin: 0;
    font-size: 20px;
}

.profile-card p {
    margin: 5px 0 0;
    opacity: 0.8;
    font-size: 14px;
}
@media (max-width: 768px) {
    .hero-visual {
        flex-direction: column;
        text-align: center;
    }

    .profile-card {
        flex-direction: column;
        text-align: center;
    }

    .profile-img {
        width: 90px;
        height: 90px;
    }
}
.hero-right{
    display:flex;
    gap:30px;
    align-items:center;
    margin-top:40px;
    flex-wrap:wrap;
}

/* profile card */
.profile-card{
    background:rgba(255,255,255,0.05);
    backdrop-filter:blur(10px);
    padding:20px;
    border-radius:15px;
    text-align:center;
    width:220px;
}

.profile-img{
    width:120px;
    height:120px;
    border-radius:50%;
    object-fit:cover;
    border:3px solid #7c5cff;
}

/* code window */
.code-window{
    flex:1;
    min-width:300px;
}
.hero-container{
    display:flex;
    justify-content:center;
    align-items:flex-start;
    gap:50px;
    margin-top:80px;
    flex-wrap:wrap;
}

.hero-left{
    width:250px;
}

.hero-right{
    flex:1;
    max-width:600px;
}

/* profile card */
.profile-card{
    background:rgba(255,255,255,0.05);
    backdrop-filter:blur(10px);
    padding:25px;
    border-radius:20px;
    text-align:center;
}

.profile-img{
    width:130px;
    height:130px;
    border-radius:50%;
    border:3px solid #7c5cff;
    object-fit:cover;
}
.biodata{
    margin-left:30px;
    display:flex;
    flex-direction:column;
    gap:10px;
}

.bio-row{
    display:grid;
    grid-template-columns:120px 1fr;
    gap:10px;
}

.bio-label{
    font-weight:bold;
    color:#a0a0ff;
}

.bio-value{
    color:#ffffff;
}
.biodata{
    display:flex;
    flex-direction:column;
    gap:10px;
}

.bio-row{
    display:grid;
    grid-template-columns:90px 1fr;
    gap:10px;
}

.bio-label{
    color:#8f8fff;
    font-weight:600;
}

.bio-value{
    color:white;
}
.profile-card:hover{
transform:translateY(-5px);
box-shadow:0 10px 30px rgba(108,99,255,0.4);
}
.about-container.pro {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
}

/* FOTO */
.about-photo img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 20px;
    border: 3px solid rgba(138, 43, 226, 0.4);
    box-shadow: 0 0 30px rgba(138, 43, 226, 0.3);
    transition: 0.3s;
}

.about-photo img:hover {
    transform: scale(1.05);
}

/* BIODATA */
.about-bio {
    max-width: 500px;
}

.about-bio h3 {
    font-size: 28px;
    margin-bottom: 10px;
}

.bio-role {
    color: #a855f7;
    margin-bottom: 20px;
    font-weight: 500;
}

.bio-info p {
    margin: 5px 0;
    font-size: 14px;
}

.bio-desc {
    margin-top: 15px;
    line-height: 1.6;
    opacity: 0.8;
}
/* FOTO DALAM CARD */
.profile-photo {
    background: transparent;
    padding: 0;
}

.profile-photo img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(138, 43, 226, 0.5);
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.4);
}

/* ROLE */
.profile-role {
    color: #a855f7;
    font-size: 14px;
    margin-bottom: 10px;
}

/* INFO */
.profile-info {
    font-size: 13px;
    opacity: 0.8;
    margin-bottom: 10px;
}

.profile-info p {
    margin: 4px 0;
}

/* DESKRIPSI */
.profile-desc {
    font-size: 13px;
    opacity: 0.7;
}
.profile-terminal {
    text-align: center;
}

/* FOTO */
.terminal-photo {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #8b5cf6;
    margin-bottom: 10px;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

/* NAMA */
.terminal-profile h3 {
    margin: 5px 0;
}

/* ROLE */
.terminal-role {
    color: #a855f7;
    font-size: 13px;
    margin-bottom: 15px;
}

/* BIODATA STYLE CODE */
.terminal-info {
    text-align: left;
    font-family: 'Space Grotesk', monospace;
    font-size: 13px;
    line-height: 1.6;
}

/* KEY = kayak JS */
.code-key {
    color: #22c55e; /* hijau */
}

/* VALUE */
.code-value {
    color: #facc15; /* kuning */
}
/* CONTAINER */
.cyber-logo {
    width: 60px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

/* TEXT NEON */
.neon-text {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #a855f7;

    text-shadow:
        0 0 5px #a855f7,
        0 0 10px #a855f7,
        0 0 20px #7c3aed,
        0 0 40px #7c3aed;

    animation: flicker 2s infinite alternate;
}

/* GLOW BACKGROUND */
.cyber-logo::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: linear-gradient(45deg, #7c3aed, #3b82f6);
    filter: blur(20px);
    opacity: 0.3;
    z-index: -1;
    animation: pulseGlow 3s infinite;
}

/* FLICKER EFFECT */
@keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.85; }
    100% { opacity: 1; }
}

/* GLOW PULSE */
@keyframes pulseGlow {
    0% { opacity: 0.2; }
    50% { opacity: 0.5; }
    100% { opacity: 0.2; }
}
.neon-text::before,
.neon-text::after {
    content: "R766";
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.6;
}

.neon-text::before {
    color: #00ffff;
    animation: glitch 2s infinite;
}

.neon-text::after {
    color: #ff00ff;
    animation: glitch 1.5s infinite;
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-1px, 1px); }
    80% { transform: translate(1px, -1px); }
    100% { transform: translate(0); }
}
.cyber-logo {
    width: 50px;
    height: 50px;
    border-radius: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 22px;
    color: #00f0ff; /* biru cyber */

    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 240, 255, 0.4);

    position: relative;
    overflow: hidden;

    /* animasi */
    animation: floatLogo 3s ease-in-out infinite;

    box-shadow: 
        0 0 10px #00f0ff,
        0 0 20px rgba(0,240,255,0.5);
}

/* ICON */
.cyber-logo i {
    z-index: 2;
    text-shadow: 0 0 10px #00f0ff;
}

/* SCANLINE */
.cyber-logo::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00f0ff, transparent);
    animation: scanLine 2s linear infinite;
}

/* BORDER GLOW ANIMASI */
.cyber-logo::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 14px;
    border: 1px solid #00f0ff;
    opacity: 0.5;
    animation: pulse 2s infinite;
}

/* FLOAT */
@keyframes floatLogo {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
}

/* SCAN */
@keyframes scanLine {
    0% { top: 0; }
    100% { top: 100%; }
}

/* PULSE */
@keyframes pulse {
    0% { opacity: 0.3; }
    50% { opacity: 0.8; }
    100% { opacity: 0.3; }
}
.profile-terminal {
    text-align: center;
}

/* FOTO DI TERMINAL */
.terminal-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;

    border: 2px solid #00f0ff;

    box-shadow: 
        0 0 10px #00f0ff,
        0 0 20px rgba(0,240,255,0.5);

    animation: floatPhoto 3s ease-in-out infinite;
}

/* ANIMASI */
@keyframes floatPhoto {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
/* TERMINAL STYLE */
.hacker-terminal {
    font-family: 'Space Grotesk', monospace;
    font-size: 13px;
    color: #00ff9c;
    text-align: left;
    position: relative;
}

/* FOTO */
.terminal-photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 2px solid #00ff9c;
    box-shadow: 0 0 15px #00ff9c;
}

/* TEXT */
.terminal-text {
    white-space: pre-line;
    line-height: 1.6;
}

/* CURSOR */
.cursor {
    display: inline-block;
    width: 8px;
    background: #00ff9c;
    margin-left: 5px;
    animation: blink 1s infinite;
}

/* BLINK */
@keyframes blink {
    0%,100% { opacity: 1; }
    50% { opacity: 0; }
}

/* SCANLINE */
.hacker-terminal::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(0,255,156,0.3);
    animation: scan 3s linear infinite;
}

@keyframes scan {
    0% { top: 0; }
    100% { top: 100%; }
}
