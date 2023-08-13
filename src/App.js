import './App.css'
function App() {
  
  var mail=()=>{
    var name=document.getElementById("name").value
    var Email=document.getElementById("email").value
    var Detail=document.getElementById("detail").value
    window.Email.send({
          
      Host : "smtp.elasticemail.com",
      Username : "shopmestore@info.com",
      Password : "B5A2DDEF3414ADD86BF7F8BD12A6C7159201",
      To : "kit.24.20bcs056@gmail.com",
      From : "shopme.store.info@gmail.com",
      Subject : "Mail From your Visitors",
      Body : "Name : "+name+"\nEmail : "+Email+"\nDetail : "+Detail
  }).then(
    message => alert("Successfully Submitted")
  );
   
  }
  return (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

   <div class="Nav">
     <div className='Nav-img'>
   <center><h1>Vasanth</h1></center>
     </div>
     <div className='Nav-button'>
     <a href='#Hom'><button>Home</button></a>
     <a href='#Education'><button>Education</button></a>
     <a href='#Programming'><button>Skills</button></a>
     <a href='#Internship'><button>Internship</button></a>
     <a href='#Project'><button>Project</button></a>
     <a href='#About'><button>About</button></a>
     </div>
   </div>
   <div className='Home' id='Hom'>
   <div class="Name-box">
       <div className='txt'>
        <div>
        <h1 id='hi'>Hi! I'm</h1><br></br>
       <h1 id='nam'>Vasantha</h1><h1 id='rol'>kumar</h1>
       <h2 id='rol1'>Software Developer  |</h2>
        <h2 id='rol1'>UI/UX Designer</h2>
        <button id='btn'>Contact Me  &#10148;</button>
        </div>
        
        </div>
      
        
   </div>
   <div class='Home-img'>

   </div>
   </div>
   <div class='Education' id='Education'>
    <div className='Edu-con'>
    <center>
    <div class='Edu-hd' id='Edu'><h1>Education</h1></div>
    <div class='hd'><h1> <div class='Edu-hd'><h1>Education</h1></div></h1></div>
     <div class='BE'>
     <div><h1 id='BE'>B.E COMPUTER SCIENCE AND ENGINEERING,</h1>
     <h1 id='BE'>KIT-KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY</h1>
     <h1 id='BE'>CGPA-9.0</h1>
     </div>
     <div>
     <h1 id='BE'>2020 – 2024 </h1>
     <h1 id='BE'>Coimbatore, India</h1>
     </div>
     </div>
     <div class='HSE'>
     <div><h1 id='BE'>HSC, IDEAL MATRIC HR SEC SCHOOL</h1>
     <h1 id='BE'>PERCENTAGE- 84.50%</h1>
     
     </div>
     <div>
     <h1 id='BE'>2019 – 2020</h1>
     <h1 id='BE'>Aranthangi, India</h1>
     </div>
     </div>
     <div class='SSLC'>
     <div><h1 id='BE'>SSLC, GOVERNMENT HIGH SCHOOL</h1>
     <h1 id='BE'>PERCENTAGE-86.40%</h1>
     
     </div>
     <div>
     <h1 id='BE'>2017 – 2018</h1>
     <h1 id='BE'>Aranthangi, India</h1>
     </div>
     </div>
     </center>

   </div>
   </div>
   <div className='Programming' id='Programming'>
    <center>
    <div id='Pro'><h1>.</h1></div>
    <div class="Pro-hd">
    <h1>Skills</h1>
    </div>
    <div className='tch'>
    <div className='Card' >
    <div class="Pro-h1">
    <h1>Technical</h1>
    </div>
    <div id='card'>
    <h1 id='BE1'>Programming Languages:</h1>
    <h1 id='BE2'>&#10147;  JAVA</h1>
    <h1 id='BE2'>&#10147;  C</h1>
    <h1 id='BE2'>&#10147;  PYTHON</h1>
    <h1 id='BE2'>&#10147;  KOTLIN</h1>
    <h1 id='BE1'>Web Development:</h1>
    <h1 id='BE2'>&#10147;  HTML</h1>
    <h1 id='BE2'>&#10147;  CSS</h1>
    <h1 id='BE2'>&#10147;  JAVASCRIPT</h1>
    <h1 id='BE2'>&#10147;  REACT JS</h1>
    <h1 id='BE2'>&#10147;  UI/UX - FIGMA TOOL</h1>
    <h1 id='BE1'>Database:</h1>
    <h1 id='BE2'>&#10147;  FIREBASE</h1>
    <h1 id='BE2'>&#10147;  SQL</h1>


    </div>
    </div>
    <div className='Card' >
    <div class="Pro-h2">
    <h1>Non Technical</h1>
    </div>
    <div id='card'>
    <h1 id='BE1'>Soft Skills:</h1>
    <h1 id='BE2'>&#10147;  PROBLEM SOLVING</h1>
    <h1 id='BE2'>&#10147;  COMMUNICATION</h1>
    <h1 id='BE2'>&#10147;  CRITICAL THINKING</h1>
    <h1 id='BE2'>&#10147;  LEADERSHIP</h1>
    <h1 id='BE2'>&#10147;  TIME MANAGEMENT</h1>
    <h1 id='BE2'>&#10147;  ADAPTABILITY</h1>
    <h1 id='BE2'>&#10147;  TEAM WORK</h1>
    </div>
    </div>
    </div>
    </center>
   </div>
   <div className='Internship' id='Internship'>
    <center>
   <div id='Int'><h1>.</h1></div>
    <div className='Int-hd'><h1>Certificates</h1></div>
    <div class='contnt'>
    <div className='Int-hd'><h1>Internship</h1></div>
    <div className='Int-hd'><h1>NPTEL</h1></div>
    </div>
    <div className='contnt'>
    
    <div class='Intern'>
    
      <div class='Int-img'></div>
      <div class='Int-txt'>
      <h1 id='BE3'>   Google Supported Virtual Internship Program on "Android Basics in Kotlin" Organised by SmartInternz in collaboration with AICTE during the period August to September 2022.</h1>
      </div>
      <button><a href='https://smartinternz.com/internships/google_stu_certificates/3cdad14c5d7c1e1fa307772a876b42d7'>View</a></button>

    </div>
    <div class='certify'>
    <div class='Cer-img'></div>
      <div class='Cer-txt'>
      <h1 id='BE3'>   This Certificate is awarded for successfully completing the course PROGRAMMING IN JAVA with the consolidated score of 90% .(ELITE + GOLD)</h1>
      </div>
      <button><a href='https://drive.google.com/file/d/1Rbppzx3_TJ2Y2jF6LVf8K4b1XxYdm3rt/view'>View</a></button>

    </div>
    </div>
    </center>
   </div>
   <div class="Project" id='Project'>
    <center>
    <div id='Int'><h1>.</h1></div>
   <div class='Pro-hd'>Projects</div>
   <div class='contnt'>
   <div className='Pro1-hd'><h1>TakeLeave</h1></div>
    <div className='Pro1-hd'><h1>KIT Leave App</h1></div>
    </div>
   <div class='contnt'>
   <div class='Projct-1'>
    
    <div class='Pro1-img'></div>
    <div class='Pro1-txt'>
    <h1 id='BE3'>Take Leave Web App, This app is developed in Visual Studio Code using ReactJS and a Firebase
database for database connectivity. It is basically used by organisations to manage their employees
leave details.
</h1>
    </div>
    <button><a href='https://vasanthakumar-software-developer.github.io/Takeleave/'>View</a></button>

  </div>
  <div class='Projct-2'>
  <div class='Pro2-img'></div>
    <div class='Pro2-txt'>
    <h1 id='BE3'>KIT Leave App, This app is developed in Android Studio using Kotlin, XML, and a Firebase database for
database connectivity. It is basically used by faculties to inform their leave immediately to the
organisation.
</h1>
    </div>
    <button><a href='https://github.com/Vasanthakumar-Software-Developer/KIT-Leave_Managing'>View</a></button>

  </div>
  </div>
  </center>
   </div>
   <div class='About' id='About'>
    <center>
    <div>
    <div class='dub'>.</div>
    <div class='abohd'><h1>About</h1></div>
    </div>
    <contnt>
      <profilhd><h1>Profile</h1></profilhd>
      <contacthd>Contact Me</contacthd>
    </contnt>
    <contnt>
    <profile>
     <div class='poto'></div>
     <div id='prodata' class='prodata'>
     <h1>Vasanthakumar A</h1>
     <h1>BE CSE</h1>
     <h1>24/01/2002</h1>
     <h1>8675198123</h1>
     <h1>Pudukottai</h1>
     </div>
    </profile>
    <contact>
    <form>
      <input  id="name" placeholder=' NAME'/>
      <input  id="email" placeholder=' EMAIL'/>
      <textarea  id="detail" placeholder=' ENTER....'/>
      <button type='submit' onClick={()=>mail()}>Submit</button>
    </form>
    </contact>
    </contnt>
    </center>
   </div>
   
   <div class='Footer'>
   <center>
    <div><h1>&#169; Software Developer</h1></div>
   <div>
   <a href="https://g.dev/Vasanthakumar" class="fa fa-google"></a><a href="https://github.com/vasanthakumar-software-developer" class="fa fa-github"></a><a href="https://www.instagram.com/vasanthvishwa175/" class="fa fa-instagram"></a><a href="https://www.youtube.com/@vasanthtutorial" class="fa fa-youtube"></a>

   </div>
   </center>
   </div>


  
  </>
  );

  
}

export default App;
