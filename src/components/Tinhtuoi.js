import React, { useState } from "react";

export default function Tinhtuoi() {
    const [Name, setName] = useState("");
    const [text, setText] = useState("");
    const [Year, setYear] = useState("");
    const [age, setAge] = useState("");
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
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setAge(new Date().getFullYear() - Year);
                        setName(text);
                    }
                }}
            />
            <br />
            <p>{Name && "Name: " + Name}</p>
            <p>{age && "Age: " + age}</p>
        </div>
    );
}
