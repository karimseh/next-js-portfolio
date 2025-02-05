import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface WorkItemProps {
    company: string;
    role: string;
    duration: string;
    description: string;
}

export default function WorkItem({ company, role, duration, description }: WorkItemProps) {
    return (
        <Card className="border-none shadow-none ">
            <CardHeader>
                <CardTitle>{company}</CardTitle>
                <CardDescription>{role} - {duration}</CardDescription>
            </CardHeader>
            <CardContent>
                <small>{description}</small>
            </CardContent>
        </Card>
    )
}