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
  [LINKS.settings.payment.addCard.path]: [
    LINKS.home,
    LINKS.settings,
    LINKS.settings.payment,
    LINKS.settings.payment.addCard,
  ],
  [LINKS.settings.payment.linkBank.path]: [
    LINKS.home,
    LINKS.settings,
    LINKS.settings.payment,
    LINKS.settings.payment.linkBank,
  ],
  [LINKS.settings.invite.path]: [
    LINKS.home,
    LINKS.settings,
    LINKS.settings.invite,
  ],
  [LINKS.settings.myContacts.path]: [
    LINKS.home,
    LINKS.settings,
    LINKS.settings.myContacts,
  ],
  [LINKS.settings.myContacts.noSynced.path]: [
    LINKS.home,
    LINKS.settings,
    LINKS.settings.myContacts,
  ],
  [LINKS.settings.preferences.path]: [
    LINKS.home,
    LINKS.settings,
    LINKS.settings.preferences,
  ],
  [LINKS.profile.path]: [LINKS.home, LINKS.profile],
};

export default BREAD_CRUMBS;
