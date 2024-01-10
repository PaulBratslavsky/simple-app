import type { MetaFunction } from "@remix-run/node";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <div className="background">
    <HeroSection />
    <Features />
  </div>
}
