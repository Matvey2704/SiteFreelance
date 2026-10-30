// Личные данные. Тексты (имя, заголовок, подсказки) — в locales/*.js, контакты — здесь.
import { L } from '../i18n/index.js';

const TELEGRAM_URL = ''; // пусто — строка отображается, но не ведёт никуда (пока нет ника)
const TELEGRAM_HANDLE = '@your_username';

export const PROFILE = {
  ...L.profile,
  contacts: {
    ...L.profile.contacts,
    telegram: {
      label: TELEGRAM_URL ? TELEGRAM_HANDLE : `${TELEGRAM_HANDLE} ${L.ui.tgPlaceholder}`,
      url: TELEGRAM_URL,
    },
    email: 'yuminmatvei@gmail.com',
    github: { label: 'github.com/Matvey2704', url: 'https://github.com/Matvey2704' },
  },
};
