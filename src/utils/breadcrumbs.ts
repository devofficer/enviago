import LINKS from './links';

const BREAD_CRUMBS = {
  [LINKS.home]: [{ label: 'Welcome', path: LINKS.home }],
  [LINKS.homeAfterSignUp]: [{ label: 'Welcome', path: LINKS.home }],
  [LINKS.trans]: [
    { label: 'Enviago', path: LINKS.home },
    { label: 'Transactions', path: LINKS.trans },
  ],
};

export default BREAD_CRUMBS;
