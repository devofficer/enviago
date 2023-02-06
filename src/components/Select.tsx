import clsx from 'classnames';

type SelectProps = {
  options: Array<string>;
  placeholder?: string;
  className?: string;
};

export default function Select(props: SelectProps) {
  return (
    <select className={clsx('select', props.className)}>
      {props.placeholder && (
        <option disabled selected>
          {props.placeholder}
        </option>
      )}
      {props.options.map((option, idx) => (
        <option key={idx}>{option}</option>
      ))}
    </select>
  );
}
