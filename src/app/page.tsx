import { Features, Footer, Nav, Newsletter } from "@/constants/index";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <Nav />
      </div>
      <div className="h-screen relative">
        <Features />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
