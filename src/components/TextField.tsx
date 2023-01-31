import cls from 'classnames';

type TextFieldProps = {
  placeholder?: string;
  className?: string;
};

export default function TextField(props: TextFieldProps) {
  return (
    <input type="text" className={cls("textfield", props.className)} placeholder={props.placeholder} />
  )
}