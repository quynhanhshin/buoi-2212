import React, { useState } from "react";

export default function Tinhtuoi() {
    const [Name, setName] = useState("");
    const [text, setText] = useState("");
    const [Year, setYear] = useState("");
    const [age, setAge] = useState("");
    const handle_keydown = (e) => {
        if (e.key == "Enter") {
            setAge(new Date().getFullYear() - Year);
            setName(text);
        }
    };
    //  function nhan(x, y) {
    //     return x * y;
    // }
    // const x = (x, y) => { return x * y };

    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];
    const list = [...q1, ...q2]; // ["Jan", "Feb", "Mar","Apr", "May", "Jun"]

    const o1 = { name: "Meo", age: 3 };
    const o2 = { name: "Ga", age: 4 };
    const newObject = { ...o1, ...o2 }; //{name: "Meo", age: 3, name: "Ga", age: 4}

    console.log(newObject);
    console.log({ id: 4, name: "Meo", age: 3, name: "Gà", age: 4, sex: "male" });

    return (
        <div>
            <label>Nhập tên </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập tên" />
            <br />
            <label>Nhập năm sinh </label>
            <input
                type="text"
                value={Year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Nhập tuổi"
                // onKeyDown={(e) => {
                //     if (e.key == "Enter") {
                //         setAge(new Date().getFullYear() - Year);
                //         setName(text);
                //     }
                // }}
                onKeyDown={handle_keydown}
            />
            <br />
            <p>{Name && "Name: " + Name}</p>
            <p>{age && "Age: " + age}</p>
        </div>
    );
}
