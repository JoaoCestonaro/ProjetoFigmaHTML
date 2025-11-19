// js/acessibilidade.js - VERSÃO FINAL COM FILTROS DE DALTONISMO

document.addEventListener('DOMContentLoaded', () => {
    // --- SELETORES DE ELEMENTOS ---
    const themeToggle = document.getElementById('theme-toggle');
    const colorFilterSelect = document.getElementById('color-filter-select'); // Novo select
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const resetFontButton = document.getElementById('reset-font');
    const htmlElement = document.documentElement;
    const backToTopButton = document.getElementById('voltar-ao-topo');

    // ==========================================================
    // LÓGICA DE TEMAS E FILTROS
    // ==========================================================
    const applyThemeAndFilter = (theme, filter) => {
        // Limpa todas as classes de tema/filtro antes de aplicar as novas
        htmlElement.classList.remove('dark-mode', 'protanopia', 'deuteranopia', 'tritanopia');

        if (theme === 'dark-mode') {
            htmlElement.classList.add('dark-mode');
        }
        
        if (filter && filter !== 'default') {
            htmlElement.classList.add(filter);
        }
    };

    // Alternador de tema claro/escuro
    themeToggle.addEventListener('click', () => {
        const isDarkMode = htmlElement.classList.toggle('dark-mode');
        const newTheme = isDarkMode ? 'dark-mode' : 'light-mode';
        
        // Desativa qualquer filtro de cor ao trocar o tema
        colorFilterSelect.value = 'default';
        htmlElement.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        
        localStorage.setItem('theme', newTheme);
        localStorage.setItem('color_filter', 'default');
    });
    
    // Seletor de filtro de cor
    colorFilterSelect.addEventListener('change', (event) => {
        const selectedFilter = event.target.value;

        // Desativa o modo escuro se um filtro for selecionado
        htmlElement.classList.remove('dark-mode');
        
        applyThemeAndFilter('light-mode', selectedFilter);

        localStorage.setItem('theme', 'light-mode');
        localStorage.setItem('color_filter', selectedFilter);
    });

    // ==========================================================
    // LÓGICA DO TAMANHO DA FONTE (sem alterações)
    // ==========================================================
    const setRootFontSize = (size) => {
        const newSize = Math.max(12, Math.min(24, size));
        htmlElement.style.fontSize = `${newSize}px`;
        localStorage.setItem('font-size', `${newSize}px`);
    };
    increaseFontButton.addEventListener('click', () => setRootFontSize(parseFloat(getComputedStyle(htmlElement).fontSize) + 1));
    decreaseFontButton.addEventListener('click', () => setRootFontSize(parseFloat(getComputedStyle(htmlElement).fontSize) - 1));
    resetFontButton.addEventListener('click', () => {
        htmlElement.style.removeProperty('font-size');
        localStorage.removeItem('font-size');
    });

    // ==========================================================
    // LÓGICA DO BOTÃO VOLTAR AO TOPO (sem alterações)
    // ==========================================================
    if (backToTopButton) {
        const handleScroll = () => backToTopButton.classList.toggle('mostrar', window.scrollY > 300);
        const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        window.addEventListener('scroll', handleScroll);
        backToTopButton.addEventListener('click', scrollToTop);
    }

    // ==========================================================
    // CARREGAR PREFERÊNCIAS SALVAS
    // ==========================================================
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    const savedFilter = localStorage.getItem('color_filter') || 'default';
    
    if (savedFilter !== 'default') {
        colorFilterSelect.value = savedFilter;
        applyThemeAndFilter('light-mode', savedFilter);
    } else {
        applyThemeAndFilter(savedTheme, 'default');
    }

    const savedFontSize = localStorage.getItem('font-size');
    if (savedFontSize) {
        htmlElement.style.fontSize = savedFontSize;
    }
});