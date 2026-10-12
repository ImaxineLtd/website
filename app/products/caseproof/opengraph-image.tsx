import { ogImage, ogSize } from "@/lib/og";

export const alt = "Caseproof: handwritten MER digitisation for insurers and TPAs";
export const size = ogSize;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return ogImage({ eyebrow: "Caseproof by Imaxine", title: "Digitise handwritten MER forms in hours, not days" });
}
