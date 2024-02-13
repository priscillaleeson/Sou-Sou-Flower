import "./styles.css";
import { Flower } from "./Flower";

export default function App() {
  return (
    <div className="entire-page">
      <div className="title">
        <h1>What's underneath?</h1>
      </div>
      <Flower />
    </div>
  );
}
