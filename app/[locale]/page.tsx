import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "../components/home/Hero";
import { About } from "../components/home/About";
import { Services } from "../components/home/Services";
import { Portfolio } from "../components/home/Portfolio";
import { VideoSection } from "../components/home/VideoSection";
import { WhyUs } from "../components/home/WhyUs";
import { Advantages } from "../components/home/Advantages";
import { MiniContact } from "../components/home/MiniContact";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Включаем статический рендер для текущей локали.
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <VideoSection />
      <WhyUs />
      <Advantages />
      <MiniContact />
    </>
  );
}
