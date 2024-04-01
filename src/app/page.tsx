import Image from "next/image";
import Link from "next/link";
import Education from "../components/Education";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Education />
    </div>
  )
}
