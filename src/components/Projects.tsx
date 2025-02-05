import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/client'; // Make sure you have this utility
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { type SanityDocument } from 'next-sanity';
import ProjectItem from './ProjectItem';

const POSTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  description, 
  image,
  techStack, 
  githubLink,
  liveDemo
}`;

const options = { next: { revalidate: 30 } };

export default async function Projects() {
  const projects = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="mt-8 text-center md:col-span-2">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="mt-2 text-gray-700">Here are some of my projects</p>
      <Carousel opts={{ loop: true }} className="m-12 md:m-24">
        <CarouselContent>
          {projects.map((project) => {
            // Convert Sanity image object to URL
            const imageUrl = project.image ? urlFor(project.image).url() : null;

            return (
              <CarouselItem key={project._id} className="sm:basis-1/2 md:basis-1/3">
                <ProjectItem
                  title={project.title}
                  desc={project.description}
                  github={project.githubLink}
                  img={imageUrl || ''} // Pass the URL string instead of image object
                  live={project.liveDemo}
                  stack={project.techStack}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}
