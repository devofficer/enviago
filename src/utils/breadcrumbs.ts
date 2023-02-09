import LINKS from './links';

const BREAD_CRUMBS = {
  [LINKS.home.path]: [{ label: 'Welcome', path: LINKS.home.path }],
  [LINKS.homeAfterSignUp.path]: [{ label: 'Welcome', path: LINKS.home.path }],
  [LINKS.trans.path]: [LINKS.home, LINKS.trans],
  [LINKS.transDetails.path]: [LINKS.home, LINKS.trans, LINKS.transDetails],
};

export default BREAD_CRUMBS;
