import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "../components/home/Hero";
import { About } from "../components/home/About";
import { Services } from "../components/home/Services";
import { VideoSection } from "../components/home/VideoSection";
import { Advantages } from "../components/home/Advantages";
import { WhyUs } from "../components/home/WhyUs";
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
      <VideoSection />
      <Advantages />
      <WhyUs />
      <MiniContact />
    </>
  );
}
