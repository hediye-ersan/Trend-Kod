import CategoryCard from "../components/CategoryCard";
import IconList from "../components/IconCard";
import ProductCardList from "../components/ProductCard";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header";

function ShopPage() {

    return (
        <>
        <Navbar />
        <CategoryCard/>
        <ProductCardList/>
        <IconList/>
        <Footer/>
        </>
    );
}

export default ShopPage;