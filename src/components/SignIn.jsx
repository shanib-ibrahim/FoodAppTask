import { Eye } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const [loginDetails, setLoginDetails] = useState({});

  const settingLoginDetails = (e) => {
    e.preventDefault();
    if (e.target.id === "username")
      setLoginDetails((prev) => ({ ...prev, email: e.target.value }));
    else setLoginDetails((prev) => ({ ...prev, password: e.target.value }));
  };

  const userLoginCheck = async () => {
    await fetch("https://app.smnfood.app/api/kitchen/auth/login", {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <section
      id="signin"
      className="flex flex-col justify-center items-center gap-y-16 z-10"
    >
      <div className="flex justify-center w-[180px] h-[150px]">
        <img src="src/assets/logo.svg" alt="SMN Homemade Food Logo" />
      </div>
      <div className="flex flex-col gap-y-5 justify-center items-center">
        <p className="text-xl font-bold ">Sign in</p>
        <input
          type="text"
          id="username"
          placeholder="Username or Phone number"
          className="input input-bordered w-full max-w-xs rounded-md"
          onChange={(e) => settingLoginDetails(e)}
          value={loginDetails.username}
        />

        <label className="input input-bordered flex items-center gap-2 rounded-md">
          <input
            type="password"
            className="grow rounded-md font-[#B5B5B5]"
            placeholder="Password"
            id="password"
            onChange={(e) => settingLoginDetails(e)}
            value={loginDetails.password}
          />
          <Eye color="#c2bcbc" />
        </label>
        <div className="flex justify-start gap-2 w-full">
          <input type="radio" name="radio-1" className="radio" />
          Keep me signed in
        </div>
        <button
          className="btn  w-full bg-[#122B38] text-white hover:text-black hover:bg-[gray]"
          onClick={userLoginCheck}
        >
          Sign in
        </button>
      </div>
      <div>
        <a href="#" className="hover:text-blue-700">
          I forgot my password
        </a>
      </div>
    </section>
  );
};

export default SignIn;
