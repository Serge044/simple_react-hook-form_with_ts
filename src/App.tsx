import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

type Profile = {
  firstname: string;
  lastname: string;
  age: number;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          {...register("firstname", {
            required: true,
          })}
          id="firstname"
          name="firstname"
          type="text"
        />
        {errors.firstname && <div className="error">Enter your name</div>}
      </div>
      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          {...register("lastname", {
            required: true,
          })}
          id="lastname"
          name="lastname"
          type="text"
        />
        {errors.lastname && <div className="error">Enter your lastname</div>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          {...register("age", {
            // set value as number
            valueAsNumber: true,
            required: true,
          })}
          id="age"
          name="age"
          type="number"
        />
        {errors.age && <div className="error">Enter your age</div>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
