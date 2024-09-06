"use client"
import React from 'react';

function FulfillmentSteps() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">READY, SET, SHIP</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Streamlined fulfillment from your online store to your customer’s door
          </h2>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
          {/* Step 1 */}
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-[#769EFF] lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"></span>
            <div
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
              <span className="text-lg font-bold text-[#769EFF]">1</span>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-base font-bold text-gray-900">
                Connect your store and send us your products
              </h3>
            </div>
          </li>

          {/* Step 2 */}
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-[#769EFF] lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"></span>
            <div
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
              <span className="text-lg font-bold text-[#769EFF]">2</span>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-base font-bold text-gray-900">
                We store your inventory securely in our fulfillment centers
              </h3>
            </div>
          </li>

          {/* Step 3 */}
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-[#769EFF] lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"></span>
            <div
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
              <span className="text-lg font-bold text-[#769EFF]">3</span>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-base font-bold text-gray-900">
                Your customer places an order on your store
              </h3>
            </div>
          </li>

          {/* Step 4 */}
          <li className="flex-start group relative flex lg:flex-col">
            <div
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
              <span className="text-lg font-bold text-[#769EFF]">4</span>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-base font-bold text-gray-900">
                We pick, pack, and ship the order to your customer fast
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FulfillmentSteps;
