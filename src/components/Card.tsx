import { ShareIcon } from "../icons/ShareIcon";
import { useEffect } from "react";


interface  CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}

export function Card({title, link, type} : CardProps){
    const getYoutubeEmbedUrl = (url: string) => {
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|embed\/|v\/))([\w-]+)/);
        return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
    };

    useEffect(() => {
        if (type === "twitter") {
          const script = document.createElement("script");
          script.src = "https://platform.twitter.com/widgets.js";
          script.async = true;
          document.body.appendChild(script);
        }
      }, [type, link]);

    return (
        <div>
            <div className="p-4 bg-white rounded-md shadow-md border-gray-200 border max-w-72">
                <div className="flex justify-between ">
                    <div className="flex items-center text-sm"> 
                        <div className="text-gray-500 pr-2">
                            <ShareIcon/>
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500" >
                            <a href={link} target="_blank">
                                <ShareIcon/>
                            </a>
                        </div>
                        <div className="pr-2 text-gray-500">
                            <ShareIcon/>
                        </div>
                    </div>
                </div>
                <div className="relative w-full pt-[54.25%] mt-2">
                    {type === "youtube" && 
                        <iframe className="absolute top-0 left-0 w-full h-full rounded-md" width="560" height="315" src={getYoutubeEmbedUrl(link)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    }
                    {type === "twitter" && 
                        <blockquote className="twitter-tweet" style={{
                        }}><a href={link.replace('x.com','twitter.com')}></a></blockquote>
                    }
                </div>
            </div>
        </div>
    )
}