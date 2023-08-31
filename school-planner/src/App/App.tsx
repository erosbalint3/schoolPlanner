import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../MainScreens/Home";
import Layout from "../Navigation/Layout";
import Grades from "../Grades/Grades";
import Homeworks from "../Homeworks/Homeworks";
import Exams from "../Exams/Exams";
import Files from "../Files/Files";

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" index element={<Home />} />
                <Route path='grades' element={<Grades />} />
                <Route path='homeworks' element={<Homeworks />} />
                <Route path='exams' element={<Exams />} />
                <Route path='files' element={<Files />} />
            </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;