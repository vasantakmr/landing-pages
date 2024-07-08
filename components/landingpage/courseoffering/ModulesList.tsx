import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/extension/carousel";
import Image from "next/image";

const ModulesList = () => {
  return (
    <Carousel>
      <CarouselNext className="top-1/3 -translate-y-1/3" />
      <CarouselPrevious className="top-1/3 -translate-y-1/3" />
      <CarouselMainContainer className="h-80">
        {Array.from({ length: 36 }).map((_, index) => (
          <SliderMainItem key={index} className="bg-transparent">
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              <Image
                src={`/modules/${index + 1}.jpg`}
                width={450}
                height={400}
                alt={`module.no${index + 1}`}
              ></Image>
            </div>
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
      <CarouselThumbsContainer>
        {Array.from({ length: 36 }).map((_, index) => (
          <SliderThumbItem key={index} index={index} className="bg-transparent">
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              Module {index + 1}
            </div>{" "}
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default ModulesList;
