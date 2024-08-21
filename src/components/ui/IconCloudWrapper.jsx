import React, { useState, useEffect } from 'react';
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "mysql",
    "vercel",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "laravel",
    "php",
    "python",
    "lua",
];

export function IconCloudWrapper() {
    // Example state and effect hooks
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulate fetching data or other side effects
        setTimeout(() => {
            setData(slugs);
        }, 1000);
    }, []);

    return (

        <div className="flex h-full w-full items-center justify-center px-20 pb-20 pt-8 mx-auto my-auto">
            
            {data ? <IconCloud iconSlugs={data} /> : <p>Loading...</p>}
        </div>
    );
}

