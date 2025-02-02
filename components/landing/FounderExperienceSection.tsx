import Image from "next/image";

export default function FounderExperienceSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="rounded-3xl bg-black p-16 text-white">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">
            Built by experienced founders
          </h2>
          <p className="text-gray-400">
            Our team brings deep expertise from leading tech companies in
            analytics, AI, and e-commerce
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <Image
            src="/logos/yc.png"
            alt="Y Combinator"
            width={200}
            height={80}
            className="object-contain pt-1"
          />
          <Image
            src="/logos/laserfocus.png"
            alt="Laserfocus"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/logos/localytics.png"
            alt="Localytics"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/logos/onefootball.png"
            alt="OneFootball"
            width={200}
            height={80}
            className="object-contain pt-2"
          />
        </div>
      </div>
    </section>
  );
}
