import Category from "./components/Category";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Heighlight from "./components/Heighlight";
import Hotselling from "./components/Hotselling";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    // <main>
    <>
      <Navbar />
      <Header />
      <Category />
      <Hotselling />
      <section className="thumbnail">
        <img src="thumbnail/first.jpg" alt="thumbnail" />
      </section>
      <Feature />
      <section className="thumbnail">
        <img src="thumbnail/banner2.jpg" alt="thumbnail" />
      </section>
      <Heighlight />
      <section className="thumbnail">
        <img src="thumbnail/banner.jpg" alt="thumbnail" />
      </section>
      <Newsletter />
      <Footer />
    </>
    // {/* </main> */}
  );
}
