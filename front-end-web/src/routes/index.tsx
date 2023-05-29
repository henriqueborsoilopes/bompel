import { Routes, Route, Navigate } from "react-router-dom";
import { ListCard, DetalheCard } from "../shared/components";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/carros" element={<ListCard />}/>
            <Route path="/carro/:id" element={<DetalheCard />}/>
            <Route path="*" element={<Navigate to="/carros"/>} />
        </Routes>
    );
}