import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import "./styles/App.css"

function App() {
  return (
    <div id="cv">
      <h1><u>CV Builder</u></h1>
      <General />
      <Education />
      <Work />
    </div>
  );
}

export default App;
