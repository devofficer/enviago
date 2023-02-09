import TransactionCard from '@/components/TransactionCard';
import transactions from '@/mock/transactions';

export default function Home() {
  return (
    <div>
      {transactions.map((trans, idx) => (
        <TransactionCard key={idx} className="mb-[16px]" data={trans} />
      ))}
    </div>
  );
}
