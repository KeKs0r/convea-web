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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localytics-9h6Cgyp7PDQ85AsJh2DvuvS1dZ0PMv.png"
            alt="Localytics"
            width={200}
            height={80}
            className="object-contain brightness-200"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laserfocus-ulotQXcSwUSuz2ODUxOndYK2KoMiic.png"
            alt="Laserfocus"
            width={200}
            height={80}
            className="object-contain brightness-200"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onefootball-zY5oeT2uMod4Vz1BeoqAgbJVNaU2Z9.png"
            alt="OneFootball"
            width={200}
            height={80}
            className="object-contain brightness-200"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yc-ksfZNR1OSDq3niurk0ZO8HiKVikHDy.png"
            alt="Y Combinator"
            width={200}
            height={80}
            className="object-contain brightness-200"
          />
        </div>
      </div>
    </section>
  );
}
