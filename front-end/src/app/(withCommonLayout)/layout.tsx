import Footer from "@/components/shared/Footer/Footer";
import HNavbar from "@/components/shared/Navbar/HNavbar";
import Navbar from "@/components/shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HNavbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
