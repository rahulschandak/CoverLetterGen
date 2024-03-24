import './App.css';
import Form from './form/form';
import Letter from './letter/letter';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/cover-letter" element={<Letter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
