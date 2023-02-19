const LINKS = {
  home: {
    path: '/',
    label: 'Home',
    breadcrumb: 'Enviago',
  },
  homeAfterSignUp: {
    path: '/home-after-signup',
    label: 'Home',
    breadcrumb: 'Enviago',
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
  settings: {
    path: '/settings',
    label: 'Settings',
    payment: {
      path: '/settings/payment',
      label: 'Payment methods',
      addCard: {
        path: '/settings/payment/add-card',
        label: 'Add new card',
      },
    },
  },
  profile: {
    path: '/profile',
    label: 'Profile',
  },
};

export default LINKS;
