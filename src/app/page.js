import Banner from "@/components/Home/Banner";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import HowitWork from "@/components/Home/HowItWork";

import MarqueeComponents from "@/components/Home/MarqueeComponents";
import Pricing from "@/components/Home/Pricing";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Banner></Banner>
  <MarqueeComponents></MarqueeComponents>
  <FeaturedBooks></FeaturedBooks>
  <HowitWork></HowitWork>
  <Pricing></Pricing>
  </>
  );
}
