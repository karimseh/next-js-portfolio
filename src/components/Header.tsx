import { CrownIcon, Github, Linkedin, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Header() {
    return (
        <>
            <Card  className="bg-blue-900 opacity-95 text-white mb-5 " >
                <div className="flex items-center space-x-4" >
                    <Avatar className="w-16 h-16 ml-4">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback className="text-black">KS</AvatarFallback>
                    </Avatar>
                    <CardHeader className="flex flex-row  items-center w-full justify-between">
                        <div>
                                <CardTitle>Karim S.</CardTitle>
                                <CardDescription className="text-white">A React.Js developer</CardDescription>

                        </div>
                        <div className="flex gap-3">
                            <Linkedin className="size-5" />
                            <Github className="size-5" />
                        </div>

                    </CardHeader>
                </div>
                <CardContent className="flex items-center gap-2 " >
                    <Badge className="bg-blue-700 flex items-center p-1 pr-2 gap-1.5"><CrownIcon className="size-5" />Top Rated</Badge>
                    <Badge className="bg-blue-700 flex items-center gap-1.5 p-1 pr-2 "><Star className="size-5" />100% Job Success</Badge>
                </CardContent>

            </Card>
        </>
    )
}
