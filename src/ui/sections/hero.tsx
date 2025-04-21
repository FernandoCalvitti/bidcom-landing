import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";
import { ImageResource } from "@/types/images";
import { GetStartedResource } from "@/types/home";
import Link from "next/link";
import { Button } from "../components/button";
import EmblaCarousel from "../components/embla-carousel";

export default function HeroTest({
  images,
  pageData,
}: {
  images: ImageResource[];
  pageData: GetStartedResource;
}) {
  return (
    <>
      <div className="mx-auto flex h-full min-h-[calc(100vh-70px)] w-full max-w-[1600px] items-center justify-center bg-white text-black">
        <div className="w-full px-4 py-10 sm:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-[auto_auto]">
            {/* Text Section */}
            <section className="flex flex-col items-center justify-end gap-2 text-center order-1 lg:items-start lg:gap-6 lg:text-left">
              <h1 className="text-xs font-normal max-w-md mx-auto lg:mx-0">
                {pageData.headline}
                <p
                  className="w-full text-3xl lg:text-4xl leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pageData.title }}
                />
              </h1>
              <p className="max-w-md leading-relaxed mx-auto lg:mx-0">
                {pageData.description}
              </p>
            </section>

            {/* Image Section */}
            <div className="flex justify-center order-2 lg:row-span-2">
              <div className="max-w-[320px] overflow-hidden sm:max-w-[600px] md:max-w-[450px] xl:max-w-[600px]">
                <EmblaCarousel slides={images} options={{ loop: true }} />
              </div>
            </div>

            {/* Button Section */}
            <div className="w-full flex justify-center order-3 lg:justify-start lg:mt-0 lg:order-3">
              <div className="w-full max-w-md">
                <Link href={pageData.button.link} className="w-full lg:w-auto">
                  <Button className="inline-flex w-full cursor-pointer items-center justify-center gap-4 p-6 lg:w-auto">
                    <p>{pageData.button.title}</p>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold">Professional Skills</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover what makes my approach unique and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Expert Knowledge</h3>
              <p className="text-gray-600">
                Years of experience and continuous learning in the field,
                ensuring cutting-edge solutions for every project.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">
                Client-Focused Approach
              </h3>
              <p className="text-gray-600">
                Dedicated to understanding your specific needs and delivering
                personalized solutions that exceed expectations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful projects and satisfied clients, with
                measurable outcomes and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
