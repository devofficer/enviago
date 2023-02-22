'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';
import CheckMarkSvg from '@/assets/icons/checkmark.svg';

export default function ConfirmPassword() {
  const [password1, setPassword1] = useState('123456789');
  const [password2, setPassword2] = useState('123456789');

  return (
    <div className="relative flex flex-col items-center lg:justify-center justify-start xl:px-[10.25rem] px-10 pt-[120px] pb-[42px] lg:py-0 w-full h-full">
      <IconButton
        className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute"
        icon="backward"
      />
      <span className="absolute top-[2.625rem] lg:hidden text-[.875rem] font-manrope-semibold">
        Reset Password
      </span>
      <p className="font-manrope-bold text-[1.375rem] text-black mb-[2.25rem]">
        Enter your new password
      </p>
      <TextField
        placeholder="Password"
        password
        value={password1}
        onChange={(val) => setPassword1(val)}
        className="mb-[1rem]"
      />
      <TextField
        placeholder="Confirm Password"
        password
        value={password2}
        onChange={(val) => setPassword2(val)}
        endAdornment={password1 === password2 ? <CheckMarkSvg /> : null}
        className="mb-[1rem]"
      />
      <Button className="bg-purple text-white">Set</Button>
    </div>
  );
}
