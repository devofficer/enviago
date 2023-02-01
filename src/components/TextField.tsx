import cls from 'classnames';

type TextFieldProps = {
  placeholder?: string;
  className?: string;
  value?: string;
};

export default function TextField(props: TextFieldProps) {
  return (
    <input
      type="text"
      value={props.value}
      className={cls('textfield', props.className)}
      placeholder={props.placeholder}
    />
  );
}
