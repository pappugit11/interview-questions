import React, { useEffect, useState } from "react";

const Interview4 = () => {
  const input = [5, 7, 9, 11, 15, 17];

  // const result = input.filter((item, ind) => {
  //   return(
  //     (item %  2) = 1
  //   )
  // });

  useEffect(() => {
    console.log("Rerenderd");
  }, []);

  const [count, setCount] = useState(0);

  const btnClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="todo_wrapper">
            <h1 className="mb-4">Interview 4</h1>

            <button onClick={btnClick}>Click</button>
            <p>{count}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interview4;
