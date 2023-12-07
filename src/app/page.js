import Content from "./components/Body/fileContent/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "@/assets/resetcss/global.scss";
const Page = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
