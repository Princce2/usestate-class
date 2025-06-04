import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Reset = () => {
    setCity("");
    setWeatherData(null);
    setLoading(false);
    setError(null);
  }

  const fetchWeatherData = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message || "An error occurred");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Weather Checker
        </h2>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={fetchWeatherData}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Check Weather
        </button>

        <button
          onClick={Reset}
          className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition"
        >
          Reset
        </button>

        {loading && (
          <p className="mt-4 text-blue-500 text-center">Loading...</p>
        )}
        {error && (
          <p className="mt-4 text-red-500 text-center">Error: {error}</p>
        )}

        {weatherData && weatherData.main && (
          <div className="mt-6 text-center text-gray-700">
            <h3 className="text-xl font-semibold">{weatherData.name}</h3>
            <p className="mt-1">Temperature: {weatherData.main.temp}°C</p>
            <p>Condition: {weatherData.weather[0].description}</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;

// function LiveClock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // Cleanup when component unmounts
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <h2>Live Clock</h2>
//       <p>{time.toLocaleTimeString()}</p>
//     </div>
//   );
// }

// export default LiveClock;
// f98333f3101878d1d53e624380a3b61d;
