import Webank from "./images/Webank.png"
import Bankmanager from "./images/Bankmanager.jpg"
import Footer from "./components/footer";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb, faPlug } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [show, setShow] = useState(false);

  const toggleForm = () => {
    setShow(!show);
  }

  const [count, setCount] = useState(0);

  // Step 2: Functions to update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [isVisible, setIsVisible] = useState(false);
  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  const [Like, setLike] = useState(0);
  
  const incrementLike = () => setLike(Like + 1);
  const decrementLike = () => setLike(Like - 1);

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [isShowing, setIsShowing] = useState(false);
  const toggleBio = () => {
    setIsShowing(!isShowing);
  };

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleGreet = () => {
    alert(`Hello, ${formData.name}! You are ${formData.age} years old. Your email is ${formData.email} and your password is ${formData.password}.`);
  };

  const [studentformData, setstudentFormData] = useState({
    "Full Name": "",
    Age: "",
    Email: "",
    Course: "",
  });


  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setstudentFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleStudentRegister = () => {
    const { "Full Name": fullName, Age: age, Email: email, Course: course } = studentformData;
    if (!fullName || !age || !email || !course) {
      alert("Please fill in all fields.");
      return;
    }


    alert(
      `Hello, ${studentformData["Full Name"]}! You are ${studentformData.Age} years old. Your email is ${studentformData.Email} and your course is ${studentformData.Course}.`
    );
  };

  const handleReset = () => {
    setstudentFormData({
      "Full Name": "",
      Age: "",
      Email: "",
      Course: "",
    });
  };


  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // const handleGreet = () => {
  //   alert(`Hello, ${name}! You are ${age} years old.`);
  // };

  

  return (
    <>
      <div className="relative">
        <div
          className="bg-cover bg-center h-[105vh] "
          style={{ backgroundImage: `url(${Bankmanager})` }}
        >
          <div className="max-w-7xl mx-auto pt-10">
            <div className="flex flex-row items-center justify-between">
              <div>
                <img src={Webank} className="h-15" alt="" />
              </div>

              <div className="flex flex-row gap-4 bg-amber-950 rounded-full px-4 py-2 text-white">
                <p>Personal</p>
                <p>Management</p>
                <p>Business</p>
                <p>Corporate</p>
                <p>Solution</p>
              </div>

              <div className="flex flex-row gap-4">
                <button className="bg-stone-50 rounded-full p-3 text-black">
                  Open account
                </button>
                <button
                  onClick={toggleForm}
                  className="bg-stone-50 rounded-full px-8 py-2 text-black z-20"
                >
                  Sign in
                </button>
              </div>
            </div>

            <div>
              <div className="space-y-5 mt-50">
                <p className="text-7xl font-bold">
                  Welcome <br /> to Webank.
                </p>
                <p className="text-1xl font-semibold">
                  Your Trusted Partner for Financial Success <br /> in the
                  Digital Age
                </p>
                <button className="bg-amber-950 rounded-full px-6 py-2 text-white">
                  Explore Webank
                </button>
              </div>
            </div>
          </div>
          <Footer />

          <div className="flex flex-col items-center justify-center  bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Counter: {count}</h1>
            <div className="flex gap-4">
              <button
                onClick={increment}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Increase
              </button>
              <button
                onClick={decrement}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Decrease
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-5  bg-gray-100">
            <button
              onClick={toggleMessage}
              className="bg-blue-500 text-white px-6 py-2 rounded-full mb-10"
            >
              {isVisible ? "Hide" : "Show"}
            </button>

            {isVisible && <p>This is a message</p>}
          </div>

          <div className="flex flex-col items-center justify-center mt-5 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">
              Likes: {Like}
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 ml-2 text-xl"
              />
            </h1>
            <div className="flex gap-4 mb-9">
              <button
                onClick={incrementLike}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Increase
              </button>
              <button
                onClick={decrementLike}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Decrease
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-5 bg-gray-100">
            <p>
              The light is:{" "}
              <FontAwesomeIcon icon={isOn ? faLightbulb : faPlug} />
            </p>
            <div>
              <button
                onClick={toggleSwitch}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-9"
              >
                {isOn ? "Turn Off" : "Turn On"}
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col items-center justify-center mt-5 bg-gray-100">
              <button
                onClick={toggleBio}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-9"
              >
                {isShowing ? "Hide Bio" : "Show Bio"}
              </button>

              {isShowing && <p>Hi, I'm a web developer.</p>}
            </div>
          </div>

          <div className="flex flex-row items-center justify-center mt-5 gap-15">
            <h1 className="">Greeting's</h1>

            {Object.entries(formData).map(([field, value]) => (
              <div
                key={field}
                className="flex flex-row items-center justify-center gap-5"
              >
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  className="border border-gray-300 rounded-xl px-2 py-2 "
                  type={
                    field === "age"
                      ? "number"
                      : field === "email"
                      ? "email"
                      : field === "password"
                      ? "password"
                      : "text"
                  }
                  name={field}
                  value={value}
                  onChange={handleChange}
                />
              </div>
            ))}

            <button onClick={handleGreet}>Greet</button>
          </div>

          <div>
            <div>
              <h1>Student Registered</h1>
            </div>

            {Object.entries(studentformData).map(([field, value]) => (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={
                    field === "age"
                      ? "number"
                      : field === "email"
                      ? "email"
                      : field === "password"
                      ? "password"
                      : "text"
                  }
                  name={field}
                  value={value}
                  onChange={handleStudentChange}
                />
              </div>
            ))}

            <button onClick={handleStudentRegister}>Register</button>
            <button onClick={handleReset}>Reset</button>
          </div>

          {/* <div>
          <h1>Greeting's</h1>
          
          <div>
            <label>Name:</label>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div>
            <label>Age:</label>
            <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button onClick={handleGreet}>Greet</button>
        </div> */}

          <div
            className={`max-w-7xl mx-auto absolute top-30 right-10 bg-gray-300 px-9 py-5 ${
              show ? "" : "scale-0"
            } transition duration-300 ease-in-out rounded-3xl z-10`}
          >
            <div>
              <p className="text-5xl font-semibold">Hello again!</p>
              <p className="mt-5">Welcome back to Webank</p>
            </div>

            <div className="mt-20">
              <label className="block mb-5">Account no or user ID</label>
              <input
                type="Account no or user ID"
                placeholder="Enter your account no or user ID"
                className="border border-gray-300 rounded-md p-2 w-full pl-5"
              />
            </div>

            <div className="mt-10">
              <label className="block mb-5">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-md p-2 w-full pl-5"
              />
            </div>

            <div className="justify-between flex items-center mt-5">
              <Link to={"/details"} className="underline underline-offset-3 decoration-1">
                Remember ID
              </Link>
              <Link className="underline underline-offset-3 decoration-1">
                Forgot Password?
              </Link>
            </div>

            <button className="bg-amber-950 rounded-full px-6 py-2 w-full text-white mt-10">
              Sign in
            </button>

            <button className="bg-amber-950 rounded-full px-6 py-2 w-full text-white block mt-8">
              Open a checking account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
