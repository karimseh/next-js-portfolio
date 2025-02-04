export interface Project {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    image: {
        asset: {
            _ref: string;
        };
        alt?: string;
    };
    techStack: string[];
    githubLink?: string;
    liveDemo?: string;
}   