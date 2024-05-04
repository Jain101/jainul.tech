import Image from "next/image";
import Link from "next/link";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Courses from "@/components/Courses";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="divider"></div> 
      <Education />
      <div className="divider"></div> 
      <Skills />
      <div className="divider"></div>
      <Courses />
      {/* <Newsletter /> */}
    </div>
  )
}
