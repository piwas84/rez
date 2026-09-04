/**
 * HDRezka Style for Lampa — UA edition
 * на базі hdrezka-ui-full-ydesign(5).js
 *
 * Тільки CSS. Не чіпає логіку карток / YDesign / Nova Skin.
 * Жовто-блакитний акцент + повна обводка картки + смужки.
 * Оптимізовано під Android TV.
 */
(function () {
    'use strict';

    if (window.hdrezka_style_ua_v1) return;
    window.hdrezka_style_ua_v1 = true;

    var STYLE_ID = 'hdrezka-style-ua-v1';
    var VERSION = '7.4-ua';

    var BLUE = '#0057B8';
    var YELLOW = '#FFD700';
    var BLUE_SOFT = 'rgba(0, 87, 184, 0.35)';

    function inject() {
        if (document.getElementById(STYLE_ID)) return;

        var css = `
/* HDRezka Style ${VERSION} — UA + full outline + lighter for Android TV */

:root {
    --hd-accent: ${BLUE};
    --hd-accent-yellow: ${YELLOW};
    --hd-accent-soft: ${BLUE_SOFT};
    --hd-bg: #121212;
    --hd-card: #1c1c1c;
    --hd-border: #1e2a45;
    --hd-text: #f0f0f0;
    --hd-muted: #9a9a9a;
}

body {
    background: var(--hd-bg) !important;
}

.head {
    background: rgba(18, 18, 18, 0.96) !important;
    border-bottom: 1px solid var(--hd-border) !important;
}

.head__action.focus,
.head__action.hover {
    background: ${BLUE} !important;
    color: #fff !important;
    border-radius: 8px !important;
}

.menu {
    background: #161616 !important;
}

.menu__item {
    border-radius: 8px !important;
    margin: 2px 8px !important;
    transition: background 0.12s ease !important;
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

/* Картка: повна обводка + смужки з усіх боків */
.card {
    border-radius: 12px !important;
    overflow: hidden !important;
    background: var(--hd-card) !important;
    transition: transform 0.15s ease, box-shadow 0.15s ease !important;
    position: relative !important;
    box-shadow: 0 0 0 1px ${BLUE}, 0 0 0 3px ${YELLOW} !important;
    box-sizing: border-box !important;
}

/* верхня смужка: синя | жовта */
.card::before {
    content: "" !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 2px !important;
    background: linear-gradient(90deg, ${BLUE} 0%, ${BLUE} 50%, ${YELLOW} 50%, ${YELLOW} 100%) !important;
    z-index: 16 !important;
    pointer-events: none !important;
}

/* бокові + нижня смужки */
.card::after {
    content: "" !important;
    position: absolute !important;
    top: 2px !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    border-left: 2px solid ${BLUE} !important;
    border-right: 2px solid ${YELLOW} !important;
    border-bottom: 2px solid ${YELLOW} !important;
    border-radius: 0 0 12px 12px !important;
    z-index: 16 !important;
    pointer-events: none !important;
    box-sizing: border-box !important;
}

.card.focus,
.card.hover {
    transform: translateY(-2px) !important;
    box-shadow:
        0 6px 16px rgba(0, 0, 0, 0.55),
        0 0 0 2px ${BLUE},
        0 0 0 4px ${YELLOW} !important;
    z-index: 5 !important;
}

.card.focus .card__view,
.card.hover .card__view {
    box-shadow: none !important;
}

.card__view {
    border-radius: 12px 12px 0 0 !important;
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
