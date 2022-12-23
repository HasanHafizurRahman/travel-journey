import "./App.css";
import Header from "./components/Header";
import Logs from "./components/Logs";

function App() {
  return (
    <div className="App">
      <main className="whole--body">
        <Header />
        <Logs />
      </main>
    </div>
  );
}

export default App;
