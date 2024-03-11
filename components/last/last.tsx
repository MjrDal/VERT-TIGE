"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardsList from "@/data/db.json";

function Last() {
  return (
    <article className="w-full flex flex-col items-center p-5">
      <h1>Dernière réalisation</h1>
      <div className="w-full flex justify-center p-10   ">
        <Carousel className="w-full ">
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="  h-96">
                    <CardContent className="flex ">
                      <div
                        className="bg-cover bg-center"
                        style={{
                          backgroundImage: `url('/images/deco${
                            index + 1
                          }.png')`,
                          width: "100px",
                          height: "100px",
                        }}
                      ></div>
                      <div>
                        <h2>{CardsList[index].title}</h2>
                        <p>{CardsList[index].description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </article>
  );
}

export default Last;
