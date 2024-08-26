// import React, { useState } from "react";

// const Interview2 = () => {
//   const arr = ["Play Cricket", "Play Video Games", "Read Books"];

//   const [hobbies, setHobbies] = useState(arr);
//   const [isChecked, setIsChecked] = useState(true);

//   const handleDelete = (id) => {
//     const f_item = hobbies.filter((item, ind) => {
//       return ind !== id;
//     });
//     console.log(id);
//     setHobbies(f_item);
//   };

//   const changeHandler = (id, i) => {
//     // const new_arr = hobbies.filter((item, ind) => {});
//     // setIsChecked(!isChecked);
//   };
//   return (
//     <>
//       <section className="section">
//         <div className="container">
//           <div className="todo_wrapper">
//             <h1 className="mb-4">Interview 2</h1>

//             <ul className="todo_list">
//               {hobbies.map((item, ind) => (
//                 <li key={ind}>
//                   <span>
//                     <input
//                       type="checkbox"
//                       //   checked={isChecked}
//                       onChange={(e, i) => changeHandler(e.target.value, i)}
//                       className="me-2"
//                     />
//                     {item}
//                   </span>
//                   <button
//                     className={`btn btn-danger ${isChecked ? "" : "d-none"}`}
//                     style={{ padding: "0 5px" }}
//                     onClick={() => handleDelete(ind)}
//                   >
//                     X
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Interview2;

import React, { useState } from "react";

function Interview2() {
  const items = ["Play Cricket", "Play Video Games", "Read Books"];
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevChecked) => {
      if (prevChecked.includes(index)) {
        return prevChecked.filter((item) => item !== index);
      } else {
        return [...prevChecked, index];
      }
    });
  };

  const handleDelete = (index) => {
    // Handle deletion logic here, e.g., remove item from a data source
    console.log("Deleting item at index:", index);
    setCheckedItems(checkedItems.filter((item) => item !== index));
  };

  return (
    <div>
      <h2>Interview 2</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={checkedItems.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
            {item}
            {checkedItems.includes(index) && (
              <button onClick={() => handleDelete(index)}>X</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Interview2;
