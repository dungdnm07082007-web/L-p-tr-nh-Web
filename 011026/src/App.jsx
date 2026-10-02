import Calculator from "./components/Calculator/Calculator";
import CVApp from "./components/CV/CVApp";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Calculator />
      <hr style={{ margin: "40px 0" }} />
      <CVApp />
    </div>
  );
}

export default App;