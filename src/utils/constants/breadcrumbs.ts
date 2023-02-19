import LINKS from './links';

const BREAD_CRUMBS: {
  [key: string]: Array<{ label: string; path: string; breadcrumb?: string }>;
} = {
  [LINKS.home.path]: [{ label: 'Welcome', path: LINKS.home.path }],
  [LINKS.homeAfterSignUp.path]: [{ label: 'Welcome', path: LINKS.home.path }],
  [LINKS.trans.path]: [LINKS.home, LINKS.trans],
  [LINKS.transDetails.path]: [LINKS.home, LINKS.trans, LINKS.transDetails],
  [LINKS.reqSend.path]: [LINKS.home, LINKS.reqSend],
  [LINKS.reqSend.amount.path]: [LINKS.home, LINKS.reqSend],
  [LINKS.reqSend.noPaymentMethod.path]: [LINKS.home, LINKS.reqSend],
  [LINKS.settings.path]: [LINKS.home, LINKS.settings],
  [LINKS.settings.payment.path]: [
    LINKS.home,
    LINKS.settings,
    LINKS.settings.payment,
  ],
};

export default BREAD_CRUMBS;
