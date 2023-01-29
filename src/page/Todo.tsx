import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

const Todo = () => {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    setValue("todo", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todo", {
            required: "todo를 작성해주세요.",
          })}
          placeholder="todo placeholder"
        />
        <button>추가</button>
      </form>
    </>
  );
};

export default Todo;
