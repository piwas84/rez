/**
 * HDRezka Style for Lampa — UA edition
 * Версія 7.5-ua
 *
 * Виправлено: зникнення верхнього меню та карток при фокусі
 * Оптимізовано під Android TV
 */
(function () {
    'use strict';

    if (window.hdrezka_style_ua_v1) return;
    window.hdrezka_style_ua_v1 = true;

    var STYLE_ID = 'hdrezka-style-ua-v1';
    var VERSION = '7.5-ua';

    var BLUE = '#0057B8';
    var YELLOW = '#FFD700';

    function inject() {
        if (document.getElementById(STYLE_ID)) return;

        var css = `
/* HDRezka Style ${VERSION} — UA + stable focus for Android TV */

:root {
    --hd-accent: ${BLUE};
    --hd-accent-yellow: ${YELLOW};
    --hd-bg: #121212;
    --hd-card: #1c1c1c;
    --hd-border: #1e2a45;
    --hd-text: #f0f0f0;
}

body {
    background: var(--hd-bg) !important;
}

/* ===== Верхнє меню ===== */
.head {
    background: rgba(18, 18, 18, 0.97) !important;
    border-bottom: 1px solid var(--hd-border) !important;
}

.head__action {
    border-radius: 8px !important;
}

.head__action.focus,
.head__action.hover {
    background: ${BLUE} !important;
    color: #fff !important;
}

/* ===== Бічне меню ===== */
.menu {
    background: #161616 !important;
}

.menu__item {
    border-radius: 8px !important;
    margin: 2px 8px !important;
}

.menu__item.focus,
.menu__item.hover {
    background: ${BLUE} !important;
    color: #fff !important;
}

.menu__item.focus .menu__ico,
.menu__item.hover .menu__ico {
    color: #fff !important;
}

/* ===== Картки ===== */
.card {
    border-radius: 12px !important;
    background: var(--hd-card) !important;
    position: relative !important;
    box-sizing: border-box !important;
    /* Проста обводка замість складних тіней */
    border: 2px solid ${BLUE} !important;
    box-shadow: 0 0 0 2px ${YELLOW} !important;
    transition: border-color 0.15s ease, box-shadow 0.15s ease !important;
    overflow: visible !important; /* важливо — не ріжемо картку */
}

/* Верхня смужка */
.card::before {
    content: "" !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 2px !important;
    background: linear-gradient(90deg, ${BLUE} 50%, ${YELLOW} 50%) !important;
    z-index: 2 !important;
    pointer-events: none !important;
    border-radius: 12px 12px 0 0 !important;
}

/* Нижня смужка */
.card::after {
    content: "" !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 2px !important;
    background: linear-gradient(90deg, ${YELLOW} 50%, ${BLUE} 50%) !important;
    z-index: 2 !important;
    pointer-events: none !important;
    border-radius: 0 0 12px 12px !important;
}

/* Фокус картки — без transform, тільки підсвітка */
.card.focus,
.card.hover {
    border-color: ${YELLOW} !important;
    box-shadow: 0 0 0 3px ${BLUE}, 0 4px 14px rgba(0, 0, 0, 0.45) !important;
    z-index: 10 !important;
}

.card__view {
    border-radius: 10px 10px 0 0 !important;
    overflow: hidden !important;
}

.card__title {
    color: var(--hd-text) !important;
    font-weight: 600 !important;
}

.card__vote {
    background: ${BLUE} !important;
    color: #fff !important;
    border-radius: 6px 0 8px 0 !important;
    font-weight: 700 !important;
}

/* ===== Заголовки рядів ===== */
.items-line__title {
    font-weight: 700 !important;
    color: #fff !important;
}

.items-line__title::before {
    content: "" !important;
    display: inline-block !important;
    width: 3px !important;
    height: 0.9em !important;
    background: linear-gradient(180deg, ${BLUE} 50%, ${YELLOW} 50%) !important;
    border-radius: 2px !important;
    margin-right: 9px !important;
    vertical-align: -0.1em !important;
}

/* ===== Кнопки ===== */
.full-start__button {
    border-radius: 8px !important;
}

.full-start__button.focus,
.full-start__button.hover {
    background: ${BLUE} !important;
    color: #fff !important;
}

.selectbox-item.focus,
.selectbox-item.hover {
    background: ${BLUE} !important;
    color: #fff !important;
    border-radius: 8px !important;
}

.selectbox__content,
.modal__content,
.settings__content {
    border-radius: 12px !important;
}

.search__input {
    border-bottom: 2px solid ${YELLOW} !important;
}

.simple-keyboard .hg-button.focus {
    background: ${BLUE} !important;
    color: #fff !important;
}

/* Скролбар */
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
    background: ${BLUE};
}

.noty {
    border-radius: 8px !important;
}

.explorer-card__head-img.focus::after {
    border-color: ${BLUE} !important;
}
`;

        var style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = css;
        document.head.appendChild(style);
    }

    function start() {
        inject();
        console.log('[HDRezka Style UA] v' + VERSION + ' loaded');
    }

    if (window.appready) {
        start();
    } else {
        if (window.Lampa && Lampa.Listener) {
            Lampa.Listener.follow('app', function (e) {
                if (e && e.type === 'ready') start();
            });
        }
        setTimeout(start, 1000);
    }
})();
