import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
interface AvatarSkeletonProps {
    src: string;
    alt: string;
}
export default function AvatarSkeleton({ src, alt }: AvatarSkeletonProps) {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {
                isLoading && (<Skeleton className="h-12 w-12 rounded-full" />)
            }

            <Avatar>
                <AvatarImage src={src} className="size-12" alt={alt} onLoad={() => setIsLoading(false)} />
            </Avatar>
        </>


    );
}