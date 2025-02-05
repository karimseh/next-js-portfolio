import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarImage } from './ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider } from './ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';

export default function AboutMe() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Welcome to My Portfolio!</CardTitle>
                <CardDescription>About Me</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    Hello, I&apos;m Karim—a top-rated freelance React developer on Upwork with a 100% Job Success Score.
                </p>
                <p>
                    With years of experience collaborating with clients around the globe, I can help you bring your ideas to life.
                </p>

                {/* Tech Stack Section */}
                <h3 className="mt-6 text-lg font-semibold">Tech Stack</h3>
                <div className='flex gap-2 mt-2'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar>
                                    <AvatarImage src="./next.png" alt="Next" />
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Next.Js</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar>
                                    <AvatarImage src="./react.png" alt="Next" />
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>React.Js</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar>
                                    <AvatarImage src="./js.png" alt="Next" />
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Javascript</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar>
                                    <AvatarImage src="./git.png" alt="Next" />
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Git</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar>
                                    <AvatarImage src="./vite.png" alt="Next" />
                                </Avatar>
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
};

