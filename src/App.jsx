import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import Seo from "./components/Seo";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Seo />
          <AppRoutes />
          <Toaster position="top-right" />
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
