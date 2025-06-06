<!-- PROJECT TITLE AND BADGE -->
<h1 align="center">Tulong Turo</h1>
<h3 align="center">An Educational Web Application Enhancing Peer Learning and Collaboration </h3>

[![Contributors][contributors-shield]][contributors-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#sdg">Sustainable Developement Goal</a></li>
      </ul>
    </li>
    <li><a href="#features">Key Features</a></li>
    <li><a href="#framework">Programming Language and Frameworks Used</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
      <ul>
        <li><a href="#pre">Prerequisites</a></li>
        <li><a href="#ins">Installation</a></li>
      </ul>
    <li><a href="#preview">Preview</a></li>
    <li><a href="#contributing">Contributors</a></li>
    <li><a href="#acknowledgments">Acknowledegments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project">🏥 About The Project </h2>
<p align="justify">
  &nbsp;&nbsp;&nbsp;&nbsp;<a href="#top"><strong>Tulong Turo</strong></a> is a student-centered web application that empowers learners to create, share, and explore educational lessons within a collaborative environment. The application aims to enhance peer-to-peer learning by allowing students to contribute their subject-based content, participate in discussions, and access lessons created by others. Through its personalized approach, Tulong Turo promotes active engagement, creativity, and a supportive community where students take ownership of their learning journey.
</p>

<!-- SUSTAINABLE DEVELOPMENT GOAL -->
<h2 id="sdg">🌍 Sustainable Development Goal </h2>
<table style="border: none; border-collapse: collapse; width: 100%;">
  <tr style="border: none;">
    <td width="30%" style="border: none; vertical-align: top; padding-right: 20px;">
      <img src="https://github.com/user-attachments/assets/e177e006-3f32-4dde-82ec-b8dbbc0c6a5c" width="100%">
    </td>
    <td width="70%" align="justify" style="border: none;">
      Tulong Turo aligns with <strong>SDG 3: Quality Education</strong> by ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all
    </td>
  </tr>
</table>

<h2 id="features">🔑 Key Features </h2>
        <ul>
          <li>User registration and login</li>
          <li>Subject Creation and Collaboration</li>
          <li>Lesson Creation Under Existing Subject</li>
          <li>Subject Subscription and Discovery</li>
          <li>Interactive Chatroom</li>
        </ul>

<!-- PROGRAMMING LANGUAGE AND FRAMEWORKS -->
<h2 id="framework">🤖 Programming Language and Frameworks Used</h2>
<ul>
  <li><strong>Frontend</strong>: 
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    </a>
  </li>
  <li><strong>Backend</strong>: 
    <a href="https://expressjs.com/">
      <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    </a>
    <a href="https://nodejs.org/">
      <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    </a>
    <a href="https://supabase.com/">
      <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    </a>
  </li>
</ul>

<!-- PROJECT STRUCTURE -->
<h2 id="project-structure">📁 Project Structure</h2>

<details>
  <summary>📂 Click to view</summary>

<pre>
TulongTuro-main/
├── .gitignore
├── README.md
├── index.js
├── package-lock.json
├── package.json
├── config/
│   ├── jwtUtils.js
│   └── supabaseClient.js
├── controllers/
│   ├── chatController.js
│   ├── commonController.js
│   ├── lessonController.js
│   └── userController.js
├── models/
│   └── user.js
├── public/
│   ├── css/
│   │   ├── add.css
│   │   ├── auth.css
│   │   ├── create.css
│   │   ├── global.css
│   │   ├── index.css
│   │   ├── lesson.css
│   │   └── subject.css
│   └── js/
│       └── main.js
├── routes/
│   ├── chatRouter.js
│   ├── lessonRouter.js
│   └── userRouter.js
└── views/
    ├── add.ejs
    ├── create.ejs
    ├── edit.ejs
    ├── index.ejs
    ├── lesson.ejs
    ├── login.ejs
    ├── signup.ejs
    ├── subject.ejs
    └── partials/
        ├── header.ejs
        └── sidenav.ejs
</pre>

</details>

<h2 id="getting-started">🚀 Getting Started </h2>

Follow these steps to set up the **TulongTuro** application on your local machine.

<h3 id="pre">✅ Prerequisites </h3>
Ensure the following are installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- [Supabase](https://supabase.com/) account with a project
- PostgreSQL database (provided by Supabase)

<h3 id="ins">🔧 Installation </h3>

1. **Clone the repository**

   ```bash
   git clone https://github.com/e4677/TulongTuro.git
   cd TulongTuro
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Set up environment variables**

   Create a `.env` file in the root directory and add your Supabase credentials:

   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_or_service_role_key
   ```
4. **Run the development server**

   ```bash
   npm run dev
   ```
5. **Open the application**

   ```bash
   http://localhost:3000
   ```
<!-- PREVIEW -->
<h2 id="preview">🫣 Preview </h2>

<div align="center">
  <table>
    <tr> 
      <td><img src="https://github.com/user-attachments/assets/6a4063e5-0eb7-401f-88c6-46a1e66344ee" width="380"></td>
      <td><img src="https://github.com/user-attachments/assets/44b695ba-128d-413f-8a1e-e95f54cd01e7" width="380"></td>
      <td><img src="https://github.com/user-attachments/assets/926c1cd1-7973-4aac-a3ad-9ba9c0856d38" width="380"></td>
      <td><img src="https://github.com/user-attachments/assets/8844866b-9a4f-4db6-9528-ee6851ee78b2" width="380"></td>
      <td><img src="https://github.com/user-attachments/assets/43b623b7-3961-46b1-bcb5-04aa1180ce71" width="380"></td>
    </tr>
  </table>
</div>

<!-- CONTRIBUTORS --> 
<h2 id="contributing">👩‍💻 Contributors</h2> 
<table width="100%" style="border-collapse: collapse;"> 
  <tr> 
    <td align="center" width="20%" style="padding: 10px;"> 
      <b>Alimagno, Timothy Dave C.</b><br>
      <a href="https://github.com/mothy-08">
        <img src="https://img.shields.io/badge/GitHub-mothy--08-181717?style=for-the-badge&logo=github&logoColor=white" alt="Timothy's GitHub Profile Badge"/>
      </a>
    </td> 
    <td align="center" width="20%" style="padding: 10px;"> 
      <b>Barican, John Andrei A.</b><br>
      <a href="https://github.com/e4677">
        <img src="https://img.shields.io/badge/GitHub-e4677-181717?style=for-the-badge&logo=github&logoColor=white" alt="Andrei's GitHub Profile Badge"/>
      </a>
    </td> 
    <td align="center" width="20%" style="padding: 10px;"> 
      <b>Genil, Gemma Rose L.</b><br>
      <a href="https://github.com/maroseeeee">
        <img src="https://img.shields.io/badge/GitHub-maroseeeee-181717?style=for-the-badge&logo=github&logoColor=white" alt="Gemma's GitHub Profile Badge"/>
      </a>
    </td> 
    <td align="center" width="20%" style="padding: 10px;"> 
      <b>Jocson, Vladimir M.</b><br>
      <a href="https://github.com/baddddddddd">
        <img src="https://img.shields.io/badge/GitHub-baddddddddd-181717?style=for-the-badge&logo=github&logoColor=white" alt="Faith's GitHub Profile Badge"/>
      </a>
    </td> 
    <td align="center" width="20%" style="padding: 10px;"> 
      <b>Marasigan, Eljay P.</b><br>
      <a href="https://github.com/Eljay-Marasigan">
        <img src="https://img.shields.io/badge/GitHub-Eljay--Marasigan-181717?style=for-the-badge&logo=github&logoColor=white" alt="Eljay's GitHub Profile Badge"/>
      </a>
    </td> 
  </tr> 
</table>


<!-- ACKNOLEDGEMENT -->
<h2 id="acknowledgments">🙏 Acknowledgement </h2>
  <p align="justify" >  We extend our heartfelt gratitude to our team members for their dedication, collaboration, and invaluable contributions to Tulong Turo. Each member played a crucial role, bringing unique ideas and skills that enriched the project. The successful completion of this system was made possible through teamwork, shared commitment, and countless hours of research, development, and refinement. This experience not only strengthened our ability to work together but also provided us with valuable insights into software engineering practices.

We also sincerely appreciate Ms. Fatima Marie P. Agdon, MSCS, our course instructor, for her invaluable guidance, support, and encouragement throughout the development of this project. Her expertise and insights greatly contributed to our understanding and implementation of key concepts in software engineering.

Thank you for your hard work, passion, and unwavering support in achieving our goal.</p>


[contributors-shield]: https://img.shields.io/github/contributors/e4677/TulongTuro?style=for-the-badge  
[contributors-url]: https://github.com/e4677/TulongTuro/graphs/contributors
[HTML-logo]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white  
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML  
[CSS-logo]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white  
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS  
[JS-logo]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black  
[JS-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript  
[Express-logo]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white  
[Express-url]: https://expressjs.com/

[Node-logo]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white  
[Node-url]: https://nodejs.org/

[Supabase-logo]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white  
[Supabase-url]: https://supabase.com/
