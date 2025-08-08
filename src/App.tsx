import { Route, Routes } from "react-router-dom";
import WishlistPage from "./features/wishlist/WishlistPage";
import HomePage from "./pages/home";
import WishlistDetailPage from './features/wishlist/WishlistDetailPage';
import WishlistNewPage from './features/wishlist/WishlistNewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/wishlist/:id" element={<WishlistDetailPage />} />
      <Route path="/wishlist/new" element={<WishlistNewPage />} />
    </Routes>
  );
}
export default App;