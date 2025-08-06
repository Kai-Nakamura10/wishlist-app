import { Route, Routes } from "react-router-dom";
import WishlistPage from "./features/wishlist/WishlistPage";
import HomePage from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
}
export default App;