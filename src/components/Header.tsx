import { CrownIcon, Github, Linkedin, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Header() {
  return (
    <>
      <Card className="container mx-auto mb-5 bg-blue-900 text-white opacity-95">
        <div className="flex items-center space-x-4">
          <Avatar className="ml-4 h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-black">KS</AvatarFallback>
          </Avatar>
          <CardHeader className="flex w-full flex-row items-center justify-between">
            <div>
              <CardTitle>Karim S.</CardTitle>
              <CardDescription className="text-white">A React.Js developer</CardDescription>
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/karim-sehimi-29ab881b8/" target="_blank">
                <Linkedin className="size-5" />{' '}
              </a>
              <a href="https://www.github.com/karimseh" target="_blank">
                <Github className="size-5" />{' '}
              </a>
            </div>
          </CardHeader>
        </div>
        <CardContent className="flex items-center gap-2">
          <Badge className="flex items-center gap-1.5 bg-blue-700 p-1 pr-2">
            <CrownIcon className="size-5" />
            Top Rated
          </Badge>
          <Badge className="flex items-center gap-1.5 bg-blue-700 p-1 pr-2">
            <Star className="size-5" />
            100% Job Success
          </Badge>
          <a
            href="https://www.upwork.com/freelancers/~014d8d3df9f96bac7f"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Badge className="bg-green-600 p-1.5"> Upwork profile</Badge>
          </a>
        </CardContent>
      </Card>
    </>
  );
}
