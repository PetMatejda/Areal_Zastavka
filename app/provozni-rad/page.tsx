import Header from "@/components/Header";
import OperationalRules from "@/components/OperationalRules";
import Footer from "@/components/Footer";

export default function ProvozniRadPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <OperationalRules />
      </div>
      <Footer />
    </main>
  );
}

