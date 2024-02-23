import s from "./TodoList/TodoList.module.scss";

type Props = {
  text: string;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputField({ text, setText, handleSubmit }: Props) {
  return (
    <label className={s.inputField}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Add TODO</button>
    </label>
  );
}
