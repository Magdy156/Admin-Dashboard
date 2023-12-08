import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers"
import Transactions from "scenes/transactions"
import Geography from "scenes/geography";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "scenes/layout";

function App(){
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
    return(
    <div className="app">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="/dashboard"  replace/>}></Route>
                        <Route path="/dashboard" element={<Products />}></Route>
                        <Route path="/products" element={<Products />}></Route>
                        <Route path="/customers" element={<Customers />}></Route>
                        <Route path="/transactions" element={<Transactions />}></Route>
                        <Route path="/geography" element={<Geography />}></Route>
                        <Route path="/overview" element={<Geography />}></Route>
                        <Route path="/daily" element={<Geography />}></Route>
                        <Route path="/monthly" element={<Geography />}></Route>
                        <Route path="/breakdown" element={<Geography />}></Route>
                        <Route path="/admin" element={<Geography />}></Route>
                        <Route path="/performance" element={<Geography />}></Route>
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </div>)
}
export default App;
