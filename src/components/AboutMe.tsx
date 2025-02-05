'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider } from './ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import AvatarSkeleton from './AvatarSkeleton';

export default function AboutMe() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to My Portfolio!</CardTitle>
        <CardDescription>About Me</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Hello, I&apos;m Karim—a top-rated freelance React developer on Upwork with a 100% Job
          Success Score.
        </p>
        <p>
          With years of experience collaborating with clients around the globe, I can help you bring
          your ideas to life.
        </p>

        {/* Tech Stack Section */}
        <h3 className="mt-6 text-lg font-semibold">Tech Stack</h3>
        <div className="mt-2 flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AvatarSkeleton src="./next.png" alt="Next" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next.Js</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AvatarSkeleton src="./react.png" alt="React" />
              </TooltipTrigger>
              <TooltipContent>
                <p>React.Js</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AvatarSkeleton src="./js.png" alt="Javascript" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Javascript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AvatarSkeleton src="./typescript.png" alt="Typescript" />
              </TooltipTrigger>
              <TooltipContent>
                <p>TypeScript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AvatarSkeleton src="./git.png" alt="Git" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Git</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AvatarSkeleton src="./vite.png" alt="Vite" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Vite.Js</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
