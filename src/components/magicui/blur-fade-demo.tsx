/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/magicui/blur-fade";
import { generateImages } from "@/lib/utils";

const images = generateImages(9);

export function BlurFadeDemo() {
  return (
    <section>
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
