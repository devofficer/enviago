import Icon from '@/components/Icon';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen bg-gradient-to-r from-[#2961ff_50%] to-[#ffffff_50%]">
      <div className="container flex h-screen overflow-hidden bg-gradient-to-r from-[#2961ff_55%] to-[#ffffff_45%]">
        <div className="w-[55%] py-10 px-12 text-white xl:pl-[9.375rem] xl:pr-[6.875rem]">
          <Icon className="mb-10" type="logo" />
          <p className="font-manrope-extrabold text-[4.75rem] leading-[4.75rem] mb-8">
            Fast, safe, social payments
          </p>
          <p className="font-manrope-bold text-[1.375rem]">
            Pay. Get paid. Shop. Share. Join tens of millions of people on
            Enviago.
          </p>
        </div>
        <div className="w-[45%]">
          {children}
        </div>
      </div>
    </div>
  );
}
