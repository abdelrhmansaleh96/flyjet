import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import { useMainContext } from "./context/mainContext";
import "./i18n";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const { cacheRtl, rtlTheme, ltrTheme, cacheLtr, dir } = useMainContext();

  return (
    <div>
      <CacheProvider value={dir === "rtl" ? cacheRtl : cacheLtr}>
        <ThemeProvider theme={dir === "rtl" ? rtlTheme : ltrTheme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
