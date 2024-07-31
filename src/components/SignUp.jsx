import { Eye } from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const [registerDetails, setRegisterDetails] = useState({});
  const [success, setSuccess] = useState(false);

  const settingRegisterDetails = (e) => {
    e.preventDefault();
    if (e.target.id === "firstname")
      setRegisterDetails((prev) => ({ ...prev, firstname: e.target.value }));
    else if (e.target.id === "lastname")
      setRegisterDetails((prev) => ({ ...prev, lastname: e.target.value }));
    else if (e.target.id === "email")
      setRegisterDetails((prev) => ({ ...prev, email: e.target.value }));
    else if (e.target.id === "phone")
      setRegisterDetails((prev) => ({ ...prev, phone: e.target.value }));
    else if (e.target.id === "password")
      setRegisterDetails((prev) => ({ ...prev, password: e.target.value }));
    else if (e.target.id === "confirmPassword")
      setRegisterDetails((prev) => ({
        ...prev,
        password_confirmation: e.target.value,
      }));
    else if (e.target.id === "kitchenName")
      setRegisterDetails((prev) => ({ ...prev, kitchen_name: e.target.value }));
  };

  const userRegister = async () => {
    const payload = {
      ...registerDetails,
      name: registerDetails.firstname + "" + registerDetails.lastname,
    };
    delete payload.firstname;
    delete payload.lastname;
    await fetch("https://app.smnfood.app/api/kitchen/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
        localStorage.setItem("token", data.data.token);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <section
        id="signin"
        className="flex flex-col justify-start items-center gap-y-5 md:gap-y-10 lg:gap-y-16 z-10"
      >
        <div className="flex justify-center w-[120px] lg:w-[180px] h-[120px] lg:h-[180px]  ">
          <img src="src/assets/logo.svg" alt="SMN Homemade Food Logo" />
        </div>
        <div className="flex flex-col gap-y-2 lg:gap-y-10 justify-center items-center">
          <p className="text-xl font-bold ">Sign Up</p>
          <div className="grid grid-cols-1 gap-y-2 md:gap-y-4 lg:gap-y-6  lg:grid-cols-2 lg:gap-x-5">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs rounded-md"
              id="firstname"
              onChange={(e) => settingRegisterDetails(e)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs rounded-md"
              id="lastname"
              onChange={(e) => settingRegisterDetails(e)}
            />

            <label className="input input-bordered flex items-center gap-2 rounded-md">
              <input
                type="email"
                className="grow rounded-md font-[#B5B5B5]"
                placeholder="Email"
                id="email"
                onChange={(e) => settingRegisterDetails(e)}
              />
              <Eye color="#c2bcbc" />
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs rounded-md"
              id="phone"
              onChange={(e) => settingRegisterDetails(e)}
            />
            <input
              type="text"
              placeholder="Your Kitchen Name"
              className="input input-bordered w-full max-w-xs rounded-md"
              id="kitchenName"
              onChange={(e) => settingRegisterDetails(e)}
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs rounded-md"
              id="password"
              onChange={(e) => settingRegisterDetails(e)}
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs rounded-md"
              id="confirmPassword"
              onChange={(e) => settingRegisterDetails(e)}
            />
            <div className="flex justify-start items-center gap-2 w-full">
              <input
                type="radio"
                name="radio-1"
                className="radio w-4 h-4 border-black"
              />
              Accept our terms
            </div>
          </div>
          <button
            className="btn  w-[250px] bg-[#122B38] text-white hover:text-black hover:bg-[gray]"
            onClick={userRegister}
          >
            Sign Up
          </button>
        </div>
        <div>
          <a href="#" className="hover:text-blue-700">
            I forgot my password
          </a>
        </div>
      </section>
      <div
        className={`toast toast-end transition ease-in delay-1000 duration-1000 ${
          success ? "block" : "hidden"
        }`}
      >
        <div className="alert alert-success">
          <span>Registration Done Successfully.</span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
