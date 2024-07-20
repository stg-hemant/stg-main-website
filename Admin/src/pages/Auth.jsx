import React from "react";
import CustomInput from "../components/UI/CustomInput";
import Button from "../components/UI/Buttons";
import { useLogin } from "../hooks/useAuth";

const Auth = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    handleLogin,
  } = useLogin();

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="h-96 w-96 p-6 shadow flex flex-col justify-around"
        onSubmit={handleLogin}
      >
        <h2 className="text-center text-2xl mb-6">Login</h2>
        <CustomInput
          title="Email"
          type="email"
          id="email"
          name="email"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <CustomInput
          title="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Logging In..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Auth;
