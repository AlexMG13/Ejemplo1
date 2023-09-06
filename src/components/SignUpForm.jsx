import React, { useEffect, useState } from "react";
import { getContries } from "../services/citiesQueries";

export default function SignUpForm() {
  const [countries, setContries] = useState([]);
  useEffect(() => {
    getContries()
      .then((response) => setContries(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <form className=" bg-blue-400 w-[50%] h-[30%] flex flex-col items-stretch m-3 p-3 gap-4 rounded-xl font-bold text-xl">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="m-2 rounded-lg"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="lastname">Lastname:</label>
        <input
          className="m-2 rounded-lg"
          type="text"
          id="lastname"
          name="lastname"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="m-2 rounded-lg"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="m-2 rounded-lg"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <div>
        <label htmlFor="url">URL photo:</label>
        <input
          className="m-2 rounded-lg"
          type="url"
          id="url"
          name="url"
          required
        />
      </div>
      <div>
        <select className="m-2 rounded-lg" id="country" name="country" required>
          <option value="">Select country</option>
          {countries.map((country, i) => (
            <option key={i} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-white hover:bg-blue-600 w-48 self-center rounded-lg"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}
