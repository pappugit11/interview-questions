import React, { useState } from "react";

const Interview3 = () => {
  const games = ["Cricket", "Footbll", "Hockey"];
  const days = ["Wednesday", "Saturday", "Sunday"];

  const [allGames, setAllGames] = useState("");
  const [allDays, setAllDays] = useState("");

  // const handleChange = (gameName) => {
  //   setAllGames(gameName);
  // };
  // const handleChange2 = (dayName) => {
  //   setAllDays(dayName);
  // };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="todo_wrapper">
            <h1 className="mb-4">Interview 3</h1>
            <div className="row">
              <div className="col-lg-6">
                <ul className="todo_list">
                  {games.map((item, ind) => {
                    return (
                      <li key={ind}>
                        <label>
                          <input
                            type="radio"
                            name="games"
                            value={item}
                            onChange={(e) => setAllGames(e.target.value)}
                          />
                          <span className="ms-2">{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="todo_list">
                  {days.map((item, ind) => {
                    return (
                      <li key={ind}>
                        <label>
                          <input
                            type="radio"
                            name="days"
                            value={item}
                            onChange={(e) => setAllDays(e.target.value)}
                          />
                          <span className="ms-2">{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <p>{allGames}</p>
              </div>
              <div className="col-lg-6">
                <p>{allDays}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interview3;
