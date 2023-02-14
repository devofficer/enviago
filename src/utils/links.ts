const LINKS = {
  home: {
    path: '/main/home',
    label: 'Enviago',
  },
  homeAfterSignUp: {
    path: '/main/home-after-signup',
    label: 'Home',
  },
  trans: {
    path: '/main/transactions',
    label: 'Transactions',
  },
  transDetails: {
    path: '/main/transactions/details',
    label: 'Transaction details',
  },
  reqSend: {
    path: '/main/request-send',
    label: 'Send or Request Money',
    breadcrumb: 'Send or Request',
    amount: {
      path: '/main/request-send/amount',
    },
    noPaymentMethod: {
      path: '/main/request-send/no-payment-method',
    },
  },
};

export default LINKS;
