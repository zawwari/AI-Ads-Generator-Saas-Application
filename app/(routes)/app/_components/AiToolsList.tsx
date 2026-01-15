import { Import } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductImage from "../../../public/product-image.png";


interface AiToolsListProps {}

const AiTools = [
  {
    name: "AI Image Generator",
    description: "Generate AI based products based on your ideas",
    icon: "/product-image.png",
    path: "/creative-ai-tools/product-images",
  },
  {
    name: "AI Products Generator",
    description: "Generate AI based products based on your ideas",
    icon: "/product-avatar.png",
    path: "/creative-ai-tools/product-avatar",
  },
  {
    name: "AI Products Generator",
    description: "Generate AI based products based on your ideas",
    icon: "/product-video.png",
    path: "/creative-ai-tools/product-video",
  },
];

const AiToolsList: React.FC<AiToolsListProps> = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-white">Creative AI Tools</h2>
      <div className="grid gap-4 grid-cols-3">
        {AiTools.map((tool, index) => (
          <div
            key={index}
            className="bg-white mt-4 dark:bg-zinc-800 p-4 rounded-lg gap-2 flex justify-between items-start"
          >
            <div>
              <h3 className="font-bold text-lg">{tool.name}</h3>
              <p className="text-white opacity-60 mt-2 text-sm">
                {tool.description}
              </p>
              <Link href={tool.path}>
              <button className="mt-4 px-4 py-2 bg-primary text-white  text-sm rounded-md shadow shadow-primary">
                Create Now
              </button>
              </Link>
            </div>
            <Image
              src={tool.icon}
              alt={tool.name}
              width={300}
              height={300}
              className="w-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiToolsList;
