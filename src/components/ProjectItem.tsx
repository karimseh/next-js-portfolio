import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from './ui/card';
import { Github, Link } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  desc: string;
  img: string;
  stack: string[];
  github: string;
  live: string;
}

export default function ProjectItem({ title, desc, img, stack, github, live }: ProjectItemProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-1">
        <Image src={img} alt={title} width={300} height={200} />
        <p>
          {' '}
          <span className="my-2 text-xl font-bold">Tech used : </span>{' '}
          {stack.map((item) => ` ${item}`)}{' '}
        </p>
        <div className="my-2 flex gap-4">
          <a href={github} target="_blank">
            {' '}
            <Github />{' '}
          </a>
          <a href={live} target="_blank">
            {' '}
            <Link />{' '}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
