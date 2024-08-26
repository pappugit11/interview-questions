import React, { useState } from "react";

const Interview = () => {
  const [countries, setCountries] = useState([
    {
      country_name: "India",
      value: "IN",
      cities: ["Pune", "Kolkata", "Mumbai"],
    },
    {
      country_name: "Pakistan",
      value: "PAK",
      cities: ["Karachi", "Lahore", "Islamabad"],
    },
    {
      country_name: "Bangladesh",
      value: "BAN",
      cities: ["Dhaka", "Mirpur"],
    },
  ]);

  const [country, setCountry] = useState("");
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="todo_wrapper">
            <h1 className="mb-5">Country List</h1>
            <p>{country}</p>
            <div className="select_group">
              <div className="form-group mb-2">
                <select
                  className="form-control"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((currCountry, ind) => (
                    <option value={currCountry.value} key={ind}>
                      {currCountry.country_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                {/* <select>
                  <option value={country}>
                    {countries[country].cities.map((item, ind) => {
                      return <option value={ind}>{item}</option>;
                    })}
                  </option>
                </select> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interview;
