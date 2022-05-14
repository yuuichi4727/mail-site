import Login from './pages/Login/Index'
import Main from './pages/Main/Index'
import SideBarActiveList from './components/SideBarActiveList/Index'
import Summary from './components/Summary/Index'
import Details from './components/Details/Index'
import MainContainer from './components/MainContainer/Index'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";




function App() {
    const { currentUser } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/main" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={
                    <RequireAuth>
                        <Main />
                    </RequireAuth>}>
                    <Route path=":category" element={
                        <RequireAuth>
                            <SideBarActiveList />
                        </RequireAuth>}>
                        <Route path=":folder" element={
                            <RequireAuth>
                                <Summary />
                            </RequireAuth>}>
                            <Route path=":id" element={
                            <RequireAuth>
                                <MainContainer />
                            </RequireAuth>} />
                        </Route>
                    </Route>
                </Route>
            </Routes>

        </BrowserRouter >
    );
}

export default App;
