import { Header } from "./components";
import { About } from "./pages";


const App: React.FC = () => {
  return (
    <div>
      {/* Render Header component */}
    <Header />
    {/* Render About component */}
    <About />
    </div>
  );
}

export default App;
