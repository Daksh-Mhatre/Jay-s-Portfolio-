import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Contact } from "../../components/contact/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
