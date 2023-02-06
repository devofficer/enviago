import Icon from '@/components/Icon';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen lg:bg-gradient-to-r from-[#2961ff_50%] to-[#ffffff_50%]">
      <div className="lg:container flex h-screen overflow-hidden lg:bg-gradient-to-r from-[#2961ff_55%] to-[#ffffff_45%]">
        <div className="w-[55%] hidden lg:flex flex-col justify-between py-[2.5rem] px-12 xl:pl-[9.375rem] xl:pr-[6.875rem] bg-[url(/images/auth/bg.svg)] bg-no-repeat bg-right-bottom">
          <div className="text-white">
            <Icon className="mb-[5.625rem]" type="logo" />
            <p className="font-manrope-extrabold text-[4.75rem] leading-[4.75rem] mb-[3rem]">
              Fast, safe, social payments
            </p>
            <p className="font-manrope-bold text-[1.375rem] mb-[2rem]">
              Pay. Get paid. Shop. Share. Join tens of millions of people on
              Enviago.
            </p>
          </div>

          <div className="xl:flex hidden flex-col">
            <Image
              className="self-center"
              src="/images/auth/group1.png"
              width={254}
              height={136}
              alt="group"
            />
            <Image
              className="-mt-[1rem]"
              src="/images/auth/group2.png"
              width={254}
              height={136}
              alt="group"
            />
          </div>
        </div>
        <div className="lg:w-[45%] lg:overflow-hidden w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
