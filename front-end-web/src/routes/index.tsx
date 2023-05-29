import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<button>Click em mim</button>}/>

            <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
    );
}