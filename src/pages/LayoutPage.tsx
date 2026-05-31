import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LayoutPage = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
}
export default LayoutPage;