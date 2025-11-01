import React from "react";
import TextInput from "../components/forms/TextInput";
import PrimaryButton from "../components/button/PrimaryButton";

const Login = () => {
  return (
    <div className="max-w-lg w-full">
      <form className="flex flex-col gap-4">
        <TextInput label={"Email"} name={"email"} type={"email"} />{" "}
        <TextInput label={"Password"} name={"password"} type={"password"} />
        <PrimaryButton text={"Sign in"} />
      </form>
    </div>
  );
};

export default Login;
