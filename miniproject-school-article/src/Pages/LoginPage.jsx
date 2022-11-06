import { useLazyQuery } from "@apollo/client";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_LOGIN } from "../Apollo/GraphQL/Query/Login";
import DashboardImage from "../Assets/img/DashboardImg.jpg";
import loginStatus from "../Utils/auth";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getUser, { data }] = useLazyQuery(GET_LOGIN);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await getUser({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  useEffect(() => {
    if (data?.miniProject_user.length === 1) {
      loginStatus.setLogin(data?.miniProject_user[0].email);
      return navigate("/secret-admin");
    }
  });

  return (
    <div className="container font-roboto">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <img
              src={DashboardImage}
              alt="School Dashboard"
              className="min-w-[400px] max-w-2xl"
            />
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-lg rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Login Page
              </h2>
              <form action className="w-full" onSubmit={handleLogin}>
                <div id="input" className="flex flex-col w-full my-5">
                  <Label htmlFor="email" className="text-gray-500 mb-2">
                    Email
                  </Label>
                  <TextInput
                    type="email"
                    id="email"
                    placeholder="Please insert your email"
                    required={true}
                    name="email"
                    onChange={handleChangeEmail}
                    value={email}
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <Label htmlFor="password" className="text-gray-500 mb-2">
                    Password
                  </Label>
                  <TextInput
                    type="password"
                    id="password"
                    placeholder="Please insert your password"
                    required={true}
                    name="password"
                    onChange={handleChangePassword}
                    value={password}
                  />
                </div>
                <Button
                  type="submit"
                  outline={true}
                  gradientDuoTone="redToYellow"
                >
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
