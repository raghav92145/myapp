import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Aboutus from "./components/Aboutus";
import Team from "./components/Team";
import Inputs from "./components/Inputs";
import InputCheckbox from "./components/InputCheckbox";
import InRadio from "./components/InRadio";
import SimpleVal from "./components/SimpleVal";
import FormValidation from "./components/FormValidation";
import ProgressBar from "./components/ProgressBar";
import MyForm from "./components/MyForm";


// Home page
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the React App 🚀</p>
  </div>
);

function App() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home />} />
        <Route path="gallery" element={<Carousel />} />
        <Route path="cards" element={<Cards />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="aboutteam" element={<Team />} />
        <Route path="inputs" element={<Inputs />} />
        <Route path="radio" element={<InRadio />} />
        <Route path="check" element={<InputCheckbox />} />
        <Route path="valone" element={<SimpleVal />} />
        <Route path="form" element={<FormValidation />} />
        <Route path="progressbar" element={<ProgressBar />} />
        <Route path="myform" element={<MyForm />} />
        


<Route
  path="/progressbar"
  element={
    <Layout>
      <ProgressBar />
    </Layout>
  }
/>


      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
