import type { Meta, StoryObj } from "@storybook/react";
import EmblaCarousel from "@/ui/components/embla-carousel";
import { ImageResource } from "@/types/images";

const meta: Meta<typeof EmblaCarousel> = {
  title: "UI/Carousel",
  component: EmblaCarousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EmblaCarousel>;

// Imágenes de ejemplo desde la carpeta public
const images: ImageResource[] = [
  {
    image: "/images/fallback-carousel/fallback-image-0.webp",
  },
  {
    image: "/images/fallback-carousel/fallback-image-1.webp",
  },
  {
    image: "/images/fallback-carousel/fallback-image-2.webp",
  },
  {
    image: "/images/fallback-carousel/fallback-image-3.webp",
  },
  {
    image: "/images/fallback-carousel/fallback-image-4.webp",
  },
];

export const Default: Story = {
  args: {
    slides: images,
    options: {
      loop: true,
    },
  },
};
