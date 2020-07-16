# TakeMeTour's Job Quest 2018 Edition

Thank you for your interest in working at TakeMeTour. First, we would like to take a simple test on your coding skill.

Please fork this repo and work on the test. After finishing the test, please send your repo to WantToWork@takemetour.com (Subject: JavaScript Engineer Application).

The quest has 2 major parts: **Front-end** and **Back-end**. If you interesting on which part you can work on the test only that part. But you can do both. (Or in case you want to apply as **Full-stack Engineer** you should done both. Obviously.)

Also in both part has some question needed to be answer. So don't forget to done that. Answer can be both in Thai or English.

## Front-End

You are going to make a web application which allow users to get some joke from **Chuck Norris**.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

In case you don't know who the heck is Chuck Norris. See his statement.

![](https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTI4OTk1Mjg4MDE3OTEzODY2/18.webp)

(Sorry. Please just google it)

### Features

- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- How to display the result is up to you.

### Technical description

- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components etc.) will be a plus.
- Any extra feature will be a plus.

### Front-end Questions

1. Please explain a situation that using Redux to manage application state is more helpful than original React's state.
   Ans. Redux ช่วยในการจัดการโปรเจคขนาดใหญ่ของเราทำให้ง่ายขึ้น เพราะจะทำให้สามารถข้ามไปจัดการอีก state ข้ามไปจัดการ state อีกอันได้ง่าย โดยผ่านตัว store ถ้ามีไม่มีตัว store มาช่วยละก็ นั้งแก้กันหัวหมุนไปเถอะ โดยตัว Redux จะมีหลักการง่ายๆ 3 หลักการ Single Source of Truth, State is read-only, Changes are made with pure functions แต่ผมไม่เคยใช้หรอกครับ พึ่งจะได้ลองจับไม่กี่สัปดาห์ ผมก็ยังนั้งเอ๋อไม่เข้าใจอยู่เลย แต่ผมมีเว็บดีที่ช่วยคือ microbenz
2. Why do we need "Server-Side Rendering". Please explain.
   Ans. ไว้สำหรับในการทำเช่น โปรโมท website หรือที่เรียกกันว่า SEO เพื่อให้ตัว spider google มาตรวจสอบเจอข้อความของเราโดย React-Redux ที่เป็น client ก็สามารถทำได้ แต่ก็จะมี Framework ที่ชื่อว่า Nextjs มาช่วยจัดการให้อยู่แล้ว
3. Explain the differences of `null` and `undefined`
   Ans. null คือ object or Array ที่ว่างเปล่าเหมือนกับกล่องที่ไม่มีอะไรข้างในเปิดไปเจอแต่ความว่างเปล่า undefined คือไม่มีอะไรเลยไม่ถูกประกาศไว้ ไม่ถูกสร้างไว้
4. Tell us the benefit of using ESLint.
   Ans. ช่วยในการเช็คว่าเราพิมพ์อะไรตกไปหรือไม่ได้เติม ; หรืออาจจะเป็นการช่วยด่าที่เราพิมพ์ไม่ถูกหลักจากแต่ละ framework หรือที่พูดง่ายๆสั้นๆ คือทำให้ โค้ดดูสวยและเป้นมาตรฐาน ไม่รู้จะพูดยาวๆทำไม

## Back-End

You are going to made a simple **Thai's joke API**. And this API is follow to REST API pattern.

Thai's joke API can allow user to explore, add, delete, like or dislike Thai's joke.

### Endpoints

- `GET /` Get all jokes.
- `POST /` Add new joke.
- `GET /:id` Get joke by id.
- `DELETE /:id` Delete joke. (In case you hate it)
- `POST /:id/like` Like a joke. (Because we don't have authentication system yet. Like spaming is fine here.)
- `POST /:id/dislike` Dislike a joke. (Same as above. Dislike spaming is fine here.)

### Technical description

- All data must store to the database. Any database is fine. But we prefer MongoDB.
- Back-end code must written in Node.js. Any library or helper tools is up to you.

### Bonus

- If you can make like/dislike system can't be spammed (like or dislike action only happen once for each joke respect to user). We will give you a bonus on that.
- If you deploy this API publicly to anywhere with some **GOOD Thai's joke** to get. We will give you a bonus on that as well. (Deploy to where and how is up to you. But don't forget to send us your work.)

### Back-end Questions

1. Explain a benefit gain from using JavaScript to implements back-end API server.

2. Explain what is a GraphQL?

3. If you have a task to convert existing back-end API which follow to REST API pattern to GraphQL. Which approach you will make?
