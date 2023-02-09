import LINKS from './links';

const BREAD_CRUMBS: {
  [key: string]: Array<{ label: string; path: string; breadcrumb?: string }>;
} = {
  [LINKS.home.path]: [{ label: 'Welcome', path: LINKS.home.path }],
  [LINKS.homeAfterSignUp.path]: [{ label: 'Welcome', path: LINKS.home.path }],
  [LINKS.trans.path]: [LINKS.home, LINKS.trans],
  [LINKS.transDetails.path]: [LINKS.home, LINKS.trans, LINKS.transDetails],
  [LINKS.reqSend.path]: [LINKS.home, LINKS.reqSend],
};

export default BREAD_CRUMBS;
