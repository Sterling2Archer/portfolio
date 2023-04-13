import logo from './assets/portlogo copy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      

        <span className="bar"></span>

      <div className="aboutme">
        <h1>Hello, I'm Evania.</h1>
        <p>I am a junior front end web developer located in New York City, 
          with a strong passion for creating through code.
          I hold programming skills and knowledge in React, JavaScript, HTML, CSS, MySQL, Python and Django.
          I developed an interest in programming after teaching a school year during 
          the pandemic. After teaching and working with mainly technology, I decided to 
          pursue a career in front end development to continue to help others reach goals and create beneficial 
          programs and/or websites with technology. I have enjoyed creating projects such as websites
          for a streetwear brand I created, an artist tour website, two hotel based webpages based
          on the legendary game series Hitman, and a tour ticket database using MySQL. As a 
          fast learner and team player with programming and graphic design skills, I am looking
          to acquire a front end web developer position based in New York City. 
        </p>

        <span className="bar"></span>
       

      </div>
      

     </header>
    </div>
  );
}

export default App;
