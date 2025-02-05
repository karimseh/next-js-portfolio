'use client';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import WorkItem from './WorkItem';

export default function Work() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <WorkItem
                company="Brydg Ltd"
                role="Intern Web developer"
                duration="Aug 2020 - Nov 2020"
                description="I worked as an intern web developer at Brydg Ltd, where I was responsible for converting designs into responsive web pages using HTML, CSS, and JavaScript."
              />
            </CarouselItem>
            <CarouselItem>
              <WorkItem
                company="Upwork"
                role="Freelance React developer"
                duration="2021 - Now"
                description="I work as an react developer helping many teams and client to get their projects done."
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}
