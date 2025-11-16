import React from "react";
import TextInput from "../components/forms/TextInput";
import PrimaryButton from "../components/button/PrimaryButton";
import { useForm } from "react-hook-form";
import AuthAPI from "../shared/AuthAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { setAuth } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    const response = await AuthAPI.Login({
      email: data.email,
      password: data.password,
    });

    if (response.status == "success") {
      localStorage.setItem("token", response.token);
      const decoded = jwtDecode(response.token);
      setAuth({
        role: decoded.role,
        name: decoded.name,
        id: decoded.user_id,
      });
      navigate("/admin");
    }
  };
  return (
    <div className="max-w-lg w-full">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextInput
          label={"Email"}
          name={"email"}
          type={"email"}
          {...register("email", { required: true })}
        />
        <TextInput
          label={"Password"}
          name={"password"}
          type={"password"}
          {...register("password", { required: true })}
        />
        <PrimaryButton text={"Sign in"} type={"submit"} />
      </form>
    </div>
  );
};

export default Login;
