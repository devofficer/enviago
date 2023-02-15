const LINKS = {
  home: {
    path: '/home',
    label: 'Enviago',
  },
  homeAfterSignUp: {
    path: '/home-after-signup',
    label: 'Home',
  },
  trans: {
    path: '/transactions',
    label: 'Transactions',
  },
  transDetails: {
    path: '/transactions/details',
    label: 'Transaction details',
  },
  reqSend: {
    path: '/request-send',
    label: 'Send or Request Money',
    breadcrumb: 'Send or Request',
    amount: {
      path: '/request-send/amount',
    },
    noPaymentMethod: {
      path: '/request-send/no-payment-method',
    },
  },
};

export default LINKS;
