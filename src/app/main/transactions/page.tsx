import TransactionCard from '@/components/TransactionCard';
import transactions from '@/mock/transactions';

export default function Home() {
  return (
    <div>
      <ul className="flex flex-wrap text-[14px] font-manrope-bold text-center text-gray mb-[31px]">
        <li>
          <a
            href="#"
            className="inline-block px-[42px] py-[8px] text-white bg-blue rounded-[39px] active"
            aria-current="page"
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-block px-[42px] py-[8px] rounded-[39px] hover:text-gray-dark hover:bg-gray-light"
          >
            Sent
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-block px-[42px] py-[8px] rounded-[39px] hover:text-gray-dark hover:bg-gray-light"
          >
            Requested
          </a>
        </li>
      </ul>
      {transactions.map((trans, idx) => (
        <TransactionCard key={idx} className="mb-[16px]" data={trans} />
      ))}
    </div>
  );
}
