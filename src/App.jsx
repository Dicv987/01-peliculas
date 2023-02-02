import "./App.css";
import {MyRoutes} from './routers/routes'

function App() {
  return (
    <div>
      <header>
          <h1 className="title">Película 🎬</h1>
      </header>
      <MyRoutes/>
    </div>
  );
}

export default App;
