import { BrowserRouter,Route,Switch } from "react-router-dom";
import Resume from "./components/views/Resume";
import Skill from "./components/views/Skill";
import Profile from "./components/views/Profile";
import Project from "./components/views/Project";
import Contact from "./components/views/Contact";
import ProfileNavbar from "./components/views/ProfileNavbar";
import Footer from "./components/views/Footer";
function App() {
  return (
    <div className = "min-h-screen bg-background bg-no-repeat bg-cover py-10">
    <div className= "w-10/12 mx-auto flex md:flex-row flex-col">
    <div className="md:w-4/12 mr-10 w-full md:mb-0 mb-5">
      <Profile/>
    </div>
    <div className="w-full flex flex-col">
    <BrowserRouter>
      <ProfileNavbar/>
      <Switch>
      <Route exact path = "/resume"> <Resume/> </Route>
      <Route path = "/skill"> <Skill/> </Route>
      <Route path = "/project"> <Project/> </Route>
      <Route path = "/contact"> <Contact/> </Route>
      <Route path ="/"><Resume/></Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
    </div>
    </div>
  );
}

export default App;
