import Icon from '@/components/Icon';
import TextField from '@/components/TextField';

export default function RequestOrSend() {
  return (
    <div>
      <ul className="flex flex-wrap text-[14px] font-manrope-bold text-center text-gray mb-[28px]">
        <li>
          <a
            href="#"
            className="inline-block px-[42px] py-[8px] text-white bg-blue rounded-[39px] active"
            aria-current="page"
          >
            Request
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-block px-[42px] py-[8px] rounded-[39px] hover:text-gray-dark hover:bg-gray-light"
          >
            Send
          </a>
        </li>
      </ul>
      <div className="bg-white px-[45px] pt-[34px] pb-[50px] rounded-[18px]">
        <TextField
          placeholder="Name, @username, email, phone"
          size="small"
          endAdornment={<Icon type="pen" />}
        />
      </div>
    </div>
  );
}
