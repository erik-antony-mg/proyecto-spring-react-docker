import "./App.css";
import { Header } from "./components/Header/Header";
import { FormMamita } from "./components/NewMamita/FormMamita";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ListMamitas } from "./components/ListMamitas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<ListMamitas/>}></Route>
            <Route path="/crear-mamita" element={<FormMamita/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
