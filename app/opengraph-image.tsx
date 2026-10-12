import { ogImage, ogSize } from "@/lib/og";

export const alt = "Imaxine: workflow automation, AI and software consulting in India";
export const size = ogSize;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return ogImage({ eyebrow: "Workflow automation, AI and software", title: "We build AI workflows and software that run your operations" });
}
