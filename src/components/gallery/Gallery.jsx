import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Gallery = () => {
    const images = [
        "gambar1.jpg", 
        "gambar2.jpg", 
        "gambar3.jpg", 
        "gambar4.jpg", 
        "gambar5.jpg",
    ];

    return(
        <AspectRatio ratio={16/9} className="grid grid-cols-4 gap-4">
            {images.map((img, index)=> (
                <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                        <Image
                            src={`/gallery/${img}`}
                            alt={img}
                            width={300}
                            height={300}
                            className="h-full w-full rounded-md object-cover"
                        />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-full p-0">
                        <div className="flex justify-between space-x-4">
                            <Image
                                src={`/gallery/${img}`}
                                alt={img}
                                width={300}
                                height={300}
                                className="h-full w-full rounded-md object-cover"
                            />
                        </div>
                    </HoverCardContent>
                </HoverCard>
            ))}
        </AspectRatio>
    )
}

export default Gallery