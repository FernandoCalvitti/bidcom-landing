import {
  ArrowRight,
  CheckCircle,
  Clock,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../components/button";

export default function GetStarted() {
  return (
    <div className="mx-auto w-full max-w-[1600px] bg-white text-black">
      {/* Hero Section */}
      <section className="flex w-full flex-col items-center justify-center px-4 py-16 sm:px-16">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Get Started with Me</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Begin your journey with my comprehensive services designed to help
            you achieve your goals and transform your ideas into reality.
          </p>
        </div>
        <Link href="/contact" className="w-full max-w-none sm:max-w-fit">
          <Button className="inline-flex w-full cursor-pointer items-center justify-center gap-4 p-6">
            <p>Start Your Project</p>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Steps Section */}
      <section className="w-full bg-gray-50 px-4 py-16 sm:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold">How It Works</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Follow these simple steps to get started on your journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <span className="text-lg font-medium text-gray-400">
                  Step 1
                </span>
              </div>
              <h3 className="mb-4 text-xl font-medium">Discover Your Needs</h3>
              <p className="text-gray-600">
                I&apos;ll start with a consultation to understand your goals,
                challenges, and vision for your project.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Initial consultation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Needs assessment</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Goal setting</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-lg font-medium text-gray-400">
                  Step 2
                </span>
              </div>
              <h3 className="mb-4 text-xl font-medium">Plan and Prepare</h3>
              <p className="text-gray-600">
                Together we&apos;ll create a detailed roadmap with timelines,
                deliverables, and key milestones for your project.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Strategic planning</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Timeline creation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Resource allocation</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                  <Rocket className="h-6 w-6" />
                </div>
                <span className="text-lg font-medium text-gray-400">
                  Step 3
                </span>
              </div>
              <h3 className="mb-4 text-xl font-medium">Execute and Launch</h3>
              <p className="text-gray-600">
                I&apos;ll implement the plan with regular check-ins, adjustments
                as needed, and a focus on quality delivery.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Implementation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Final delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 py-16 sm:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Find answers to common questions about my process and services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* FAQ Item 1 */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-medium">
                How long does the process take?
              </h3>
              <p className="text-gray-600">
                The timeline varies depending on project scope and complexity.
                Typically, small projects take 2-4 weeks, while larger ones may
                take 2-3 months. I&apos;ll provide a detailed timeline during
                our planning phase.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-medium">
                What information do you need from me?
              </h3>
              <p className="text-gray-600">
                To get started, I&apos;ll need your project goals, target
                audience, any existing materials, and your timeline
                expectations. The more details you can provide, the better I can
                tailor my approach.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-medium">
                How do we communicate during the project?
              </h3>
              <p className="text-gray-600">
                I maintain regular communication through your preferred channels
                (email, video calls, messaging). You&apos;ll receive weekly
                updates and have scheduled check-ins to review progress and
                provide feedback.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-medium">
                What happens after project completion?
              </h3>
              <p className="text-gray-600">
                After delivery, I provide 30 days of support to address any
                issues. I also offer maintenance packages and can discuss
                ongoing support options based on your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 w-full px-4 py-16 sm:px-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="mb-4 text-3xl font-semibold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Take the first step toward achieving your goals. Let&apos;s work
            together to bring your vision to life.
          </p>
          <Link href="/contact">
            <Button className="inline-flex cursor-pointer items-center justify-center gap-4 p-6">
              <p>Contact Me Today</p>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
