type Transaction = {
  username: string;
  type: 'request' | 'send';
  status: 'done' | 'awaiting';
  timestamp: string;
  amount: string;
};
