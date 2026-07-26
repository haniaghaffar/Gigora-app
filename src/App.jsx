import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import Seo from "./components/Seo";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Seo />
        <AppRoutes />
        <Toaster position="top-right" />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
