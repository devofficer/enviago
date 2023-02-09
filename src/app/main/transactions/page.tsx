import TransactionCard from '@/components/TransactionCard';

const transactions: Array<Transaction> = [
  {
    username: 'Hu Guiying',
    type: 'request',
    status: 'done',
    timestamp: '3 hours',
    amount: '$250',
  },
  {
    username: 'Gibby Radki',
    type: 'send',
    status: 'done',
    timestamp: '3 hours',
    amount: '$500',
  },
  {
    username: 'Freddy Kauschke',
    type: 'request',
    status: 'done',
    timestamp: '4 hours',
    amount: '$202',
  },
  {
    username: 'Jube Bowman',
    type: 'send',
    status: 'awaiting',
    timestamp: '4 hours',
    amount: '$11',
  },
  {
    username: 'Izumi Katsuyoshi',
    type: 'send',
    status: 'done',
    timestamp: '2 days',
    amount: '$2,391',
  },
  {
    username: 'Harmen Porter',
    type: 'request',
    status: 'done',
    timestamp: '4 hours',
    amount: '$3,358',
  },
  {
    username: 'Abbie Wilson',
    type: 'request',
    status: 'done',
    timestamp: '4 hours',
    amount: '$313',
  },
];

export default function Home() {
  return (
    <div>
      {transactions.map((trans, idx) => (
        <TransactionCard key={idx} className="mb-[16px]" data={trans} />
      ))}
    </div>
  );
}
