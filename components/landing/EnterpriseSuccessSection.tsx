import Image from "next/image";

export default function EnterpriseSuccessSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="rounded-3xl bg-black p-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            We have done this before with large enterprises.
          </h2>

          {/* Metrics */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center text-green-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L4 20L20 12L12 11L12 4Z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white">4X</div>
              <div className="text-gray-400">Better Click Rates</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center text-green-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L4 20L20 12L12 11L12 4Z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white">90%</div>
              <div className="text-gray-400">Increase in ARPU</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center text-green-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L4 20L20 12L12 11L12 4Z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white">2X</div>
              <div className="text-gray-400">Basket Size</div>
            </div>
          </div>

          {/* Enterprise Logos */}
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            <div className="flex items-center justify-center">
              <div className="relative h-12 w-32">
                <Image
                  src="/logos/staples-logo.svg"
                  alt="Staples"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-12 w-32">
                <Image
                  src="/logos/macys-logo.svg"
                  alt="Macy's"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-12 w-32">
                <Image
                  src="/logos/bed-bath-beyond-logo.svg"
                  alt="Bed Bath & Beyond"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-12 w-32">
                <div className="text-2xl font-bold text-white">NEXT</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white">
              Enterprise Ready
            </div>
            {/* <div className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white">
              SOC 2 Compliant
            </div> */}
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white">
              99.99% Uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
