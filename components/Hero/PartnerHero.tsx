"use client";
import Image from "next/image";
import Link from "next/link";
import Distributed from '../../public/images/Partners/partner-hero.png'

function PartnerHero() {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-36">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-6xl ">
                ShipBob Partner Ecosystem
                <br /> & Integrations
                <br />
              </h1>

              <div className="mt-2">
                <p>
                  ShipBob is a full-stack fulfillment platform. We use our
                  proprietary software across our fulfillment network for a
                  cohesive experience. Orders are automatically sent to our
                  warehouses, where inventory is picked, packed, and shipped to
                  your customers.
                </p>
              </div>

              <div className="mt-2">
                <p>
                  Our fulfillment services help you optimize for time and cost,
                  use the delivery experience to beat customer expectations, and
                  own more of the customer relationship.
                </p>
              </div>

              <div className="flex gap-x-4">
                <Link
                  href="https://nextjstemplates.com/templates/solid"
                  className="mt-6 flex h-[3.9rem] w-[10rem] items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular font-bold text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Learn more
                </Link>
                <Link
                  href="https://nextjstemplates.com/templates/solid"
                  className="mt-6 flex h-[3.9rem] w-[12rem] items-center justify-center rounded-full bg-white px-2 py-2.5 text-regular font-semibold text-primary duration-300 ease-in-out hover:bg-white border-2  hover:scale-110"
                >
                  Become a partner
                </Link>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="rounded-3xl shadow-solid-l"
                    src={Distributed}
                    alt="Hero"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnerHero;
