# Портфолио — Матвей

Vanilla JS + Vite. Сцена — SVG, камера — анимация viewBox.

## Команды
    npm install
    npm run dev       # локальный сервер
    npm run build     # сборка в dist/

## Структура
    index.html            оболочка
    src/main.js           точка входа
    src/app.js            сборка приложения, открытие/закрытие разделов
    src/config/           profile.js (имя, контакты), sections.js (разделы и камера)
    src/locales/          ru.js и en.js — все тексты сайта на двух языках
    src/i18n/             выбор языка (?lang=en, localStorage, язык браузера)
    src/data/             язык-независимое: цены, теги, картинки, ссылки
    src/components/       шапка, панель, лайтбокс, мобильное меню
    src/components/sections/  содержимое панелей
    src/scene/            части SVG-сцены (стол, кот, лампа, мониторы...)
    src/lib/              camera, parallax, grain, dom
    src/styles/           CSS по темам
    public/projects/      скриншоты проектов

## Как добавить
- Проект: запись в `BASE` в `src/data/projects.js` (id, название, теги, картинка) + текст в `projects.texts` в обоих файлах `src/locales/`; скриншот в `public/projects/`
- Услугу: текст в `services.items` в `ru.js` и `en.js` (одинаковый `id`) + цена в `PRICES` в `src/data/services.js`
- Навык: `skills.groups` в обоих файлах `src/locales/`
- Telegram: `TELEGRAM_URL` и `TELEGRAM_HANDLE` в `src/config/profile.js`
- Язык: переключатель RU / EN в шапке; страница открывается на языке браузера, выбор запоминается. Ссылка на конкретный язык: `?lang=en`
