
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./pages/basic";
import SearchPage from "./pages/search";


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<ProductPage />} />
            <Route path="mm" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
