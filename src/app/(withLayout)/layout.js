import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";

export const metadata = {
  title: "Muslim Matrimony",
  description: "Muslim Matrimony Website",
};

const MainLayout = ({ children }) => {
  return (
    // Set container here to fixed width
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
