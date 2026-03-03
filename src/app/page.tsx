import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { WhyNow } from "@/components/WhyNow";
import { Team } from "@/components/Team";
import { InterestForm } from "@/components/InterestForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col w-full items-center">
        <Hero />
        <Thesis />
        <WhyNow />
        <Team />

        {/* Isolated Section for Form with Distinct Background */}
        <section className="w-full py-24 bg-brand-dark px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-slate to-brand-dark opacity-50"></div>
          <div className="relative z-10">
            <InterestForm />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
