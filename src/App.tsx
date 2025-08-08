import { Route, Routes } from "react-router-dom";
import WishlistPage from "./features/wishlist/WishlistPage";
import HomePage from "./pages/home";
import WishlistDetailPage from './features/wishlist/WishlistDetailPage';
import WishlistNewPage from './features/wishlist/WishlistNewPage';
import WishlistEditPage from './features/wishlist/pages/WishlistEditPage';
import Header from './shared/components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/wishlist/:id" element={<WishlistDetailPage />} />
        <Route path="/wishlist/new" element={<WishlistNewPage />} />
        <Route path="/wishlist/:id/edit" element={<WishlistEditPage />} />
      </Routes>
    </>
  );
}
export default App;