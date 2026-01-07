import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <Header />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}