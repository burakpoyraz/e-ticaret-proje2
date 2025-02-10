import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliders } from "@/constans";
import Image from "next/image";

const Hero = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {sliders.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="object-cover h-96 md:h-[450px] lg:h-[600px]"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};

export default Hero;
