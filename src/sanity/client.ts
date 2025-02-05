import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { Project } from '@/types/project';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: string) => builder.image(source);

// GROQ Query helper
export async function getProjects(): Promise<Project[]> {
  return await client.fetch(
    `*[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        description,
        image,
        techStack,
        githubLink,
        liveDemo
        }`,
  );
}
