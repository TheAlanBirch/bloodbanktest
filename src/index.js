import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import Donors from "./routes/donors";
import Patients from "./routes/patients";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
              <Route path="expenses" element={<Donors />} />
              <Route path="invoices" element={<Patients />} />
          </Route>

      </Routes>
    </BrowserRouter>,
    rootElement
);
