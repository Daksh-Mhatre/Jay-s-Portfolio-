import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Gallery } from "../../components/gallery/Gallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
