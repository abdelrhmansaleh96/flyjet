import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import { useMainContext } from "./context/mainContext";
import "./i18n";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  const { cacheRtl, rtlTheme, ltrTheme, cacheLtr, dir } = useMainContext();

  return (
    <div>
      <CacheProvider value={dir === "rtl" ? cacheRtl : cacheLtr}>
        <ThemeProvider theme={dir === "rtl" ? rtlTheme : ltrTheme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
