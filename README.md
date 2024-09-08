# React + TypeScript + Bun
## โปรเจคนี้เป็นการเรียนรู้การใช้ React + TypeScript + Bun
หลักการออกแบบ
1. ทำการเรียก API จะ https://official-joke-api.appspot.com/random_joke เพื่อเรียกค่า json ดังตัวอย่าง
```json
{
  "type": "general",
  "setup": "Why did the girl smear peanut butter on the road?",
  "punchline": "To go with the traffic jam.",
  "id": 324
} 
```
โดย setup คือคำถาม และ punchline คือ คำตอบ

2. แสดงคำถาม(setup) 

3. มีปุ่ม Answer เพื่อแสดงคำตอบ(punchline) ของคำถาม(setup) เมื่อกดที่ ปุ่ม Answer จะแสดงคำตอบของคำถามนั้นๆ
4. มีปุ่ม Next Question เพื่อแสดงคำถามใหม่


การทำงาน (file App.tsx)

1. import useEffect และ useState

useEffect สำหรับเรียกใช้งาน API เมื่อมีการใช้งาน App.tsx

useState สำหรับ เก็บค่า json ที่เรียกได้จาก API
```
import { useEffect, useState } from "react";
```
2. ประกาศ type ของตัวแปร
```
interface User {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
```

3. สร้างตัวแปร users สำหรับเก็บค่าที่ได้จากการเรียกใช้งาน API
สร้างตัวแปร showAnswer สำหรับแสดงคำตอบ 
```
const [users, setUsers] = useState<User | null>(null);
const [showAnswer, setShowAnswer] = useState(false);
```

4. สร้าง function fetchJoke สำหรับเรียก API จาก https://official-joke-api.appspot.com/random_joke โดยตั้งค่าให้ ตัวแปร data คือค่าที่ตอบกลับมาจาก API และ setUsers ให้มีค่าเท่ากับ data ดังนั้นจะได้ ค่าของตัวแปร users มีค่าเท่ากับ json ที่มาจากการเรียกใช้งาน API 
```
  const fetchJoke = async () => {    
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setUsers(data);
  };
```
5. ใช้ useEffect เพื่อเรียกใช้งาน function fetchJoke 
```
useEffect(() => {
    fetchJoke();
  }, []);
  ```

6. แสดงค่า setup(คำถาม) ที่เก็บอยู่ไม่รูปของ users.setup
```
      <h1>{users && users.setup}</h1>
```

7. แสดงปุ่ม Answer โดยเมื่อกดที่ปุ่มจะทำการเปลี่ยนค่า showAnswer จาก false (ตั้งค่าไว้ที่ข้อ 3.) เป็น true

```
        <button className="answer" onClick={() => setShowAnswer(!showAnswer)}>Answer</button>
        
        {/*  Show Answer */}
        {showAnswer ? <p className="read-the-docs">{users && users.punchline}</p> : null}
```

8. แสดงปุ่ม Next Question โดยเมื่อกดที่ปุ่มจะทำการเรียนใช้งาน function fetchJoke หรือ ทำการเรียก API อีกรอบ เผื่อทำการเปลี่ยนคำถาม
```
<button onClick={() => fetchJoke()}>Next Question</button>
```

9. ในกรณีที่ showAnswer = true ให้แสดงคำตอบ(users.punchline) ของคำถามนั้นๆ
```
    {/*  Show Answer */}
    {showAnswer ? <p className="read-the-docs">{users && users.punchline}</p> : null}
```





สมาชิก

1. 
2. 66130226 อรวรรณ  เห็นศิริศักด์
3. 66130835 สุดารัตน์  ภู่ทอง
