import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmitHandler = (evnet: React.FormEvent<HTMLFormElement>) => {
    evnet.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={onChangeHandler}
          value={todo}
          placeholder="todo placeholder"
        />
        <button>추가</button>
      </form>
    </>
  );
};

export default Todo;
