import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <main className="relative flex justify-center items-center h-screen ">
      <div className="absolute bottom-[-12rem] lg:bottom-[-15rem] xl:bottom-[-19rem] left-[-5.8rem] xl:left-[-5rem] w-[500px] lg:w-[600px] xl:w-[700px] h-[500px] lg:h-[600px] xl:h-[700px] z-0">
        <img src="src/assets/bg1.svg" alt="" />
      </div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div className="absolute top-[-12rem] xl:top-[-13rem] right-[-7rem] xl:right-[-5.5rem] w-[500px] lg:w-[600px] xl:w-[700px] h-[500px] lg:h-[600px] xl:h-[700px] z-0">
        <img src="src/assets/bg2.svg" alt="" />
      </div>
    </main>
  );
}

export default App;
