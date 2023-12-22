import React, { useState } from 'react'

export default function Tinhtuoi() {
    const [Name, setName] = useState("Trần Ngọc Quỳnh Anh")
    const [Year, setYear] = useState("1997")
    let CurrentYear = new Date().getFullYear()
    // const [kq,setKq] = useState(0)
  return (
    <div>
        <label>Nhập tên</label><input type="text" value={Name} onChange={(e) => setName(e.target.value) } />
        <br/>
        <label>Nhập năm sinh</label><input type="text" value={Year} onChange={(e) => setYear(e.target.value) } />
        <br/>
        <p>Tuổi là: {CurrentYear - Year} </p>
    </div>
  )
}
