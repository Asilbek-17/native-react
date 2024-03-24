import { Header } from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Guruh } from "./Pages/Guruh/Guruh";
import { Student } from "./Pages/Student/Student";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guruh/:id" element={<Guruh />} />
        <Route path="/student/:uId" element={<Student/>}/>
      </Routes>

    </div>
  );
}

export default App;