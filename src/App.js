import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        backgroundColor: "black",
        color: "white",
        height: "100%",
        position: "fixed",
        objectFit: "fill",
      }}
    >
      <div className="container-fluid" style={{ overflowY: "auto" }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
