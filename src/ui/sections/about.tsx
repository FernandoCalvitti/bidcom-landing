import { Award, Code, Heart, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/button";

export default function About() {
  return (
    <div className="mx-auto w-full max-w-[1600px] bg-white text-black">
      {/* Hero Section */}
      <section className="flex w-full flex-col items-center justify-center px-4 py-16 sm:px-16">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Get to know the person behind the work and discover what drives me
            to deliver exceptional results for every project.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-gray-50 px-4 py-16 sm:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold">My Core Values</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              These principles guide everything I do and ensure the highest
              quality in my work
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest quality in every project, paying
                attention to every detail to deliver outstanding results.
              </p>
            </div>

            {/* Value 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Passion</h3>
              <p className="text-gray-600">
                Bringing enthusiasm and dedication to every project, ensuring
                that my work reflects my commitment to your success.
              </p>
            </div>

            {/* Value 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and creative solutions to deliver
                cutting-edge results that stand out.
              </p>
            </div>

            {/* Value 4 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Integrity</h3>
              <p className="text-gray-600">
                Maintaining honesty and transparency in all interactions,
                building trust through reliable and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full px-4 py-16 sm:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold">My Journey</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              A brief overview of my professional path and what I&apos;ve
              learned along the way
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Experience Item 1 */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-medium">Background</h3>
              <p className="text-gray-600">
                With years of experience in the industry, I&apos;ve developed a
                deep understanding of what it takes to deliver successful
                projects. My journey has been marked by continuous learning and
                adaptation to new challenges.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-medium">Approach</h3>
              <p className="text-gray-600">
                I believe in a collaborative approach, working closely with
                clients to understand their unique needs and goals. Every
                project is an opportunity to create something meaningful and
                impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 w-full px-4 py-16 sm:px-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="mb-4 text-3xl font-semibold">Want to Know More?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            I&apos;d love to hear about your project and discuss how we can work
            together to achieve your goals.
          </p>
          <Link href="/contact">
            <Button className="inline-flex cursor-pointer items-center justify-center gap-4 p-6">
              <p>Get in Touch</p>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
