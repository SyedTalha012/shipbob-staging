import React from 'react';
import Image from "next/image";

function FeaturedIntegration() {
  return (
    <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-4">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-12">
            Featured partner integrations
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* TikTok Shop */}
            <div className="flex flex-col  bg-white rounded-lg shadow-md p-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="https://www.shipbob.com/wp-content/uploads/2023/09/336a40b218dd0ad7ac24679ba9f5bae1-e1695922910391.webp"
                  alt="TikTok Shop"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">TikTok Shop</h3>
              <p className="text-gray-600 text-sm">Sell directly through the TikTok app.</p>
            </div>

            {/* Netsuite */}
            <div className="flex flex-col  bg-white rounded-lg shadow-md p-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="https://www.shipbob.com/wp-content/smush-webp/2023/03/netsuite-4.png.webp"
                  alt="Netsuite"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Netsuite</h3>
              <p className="text-gray-600 text-sm">The world’s most deployed cloud ERP solution.</p>
            </div>

            {/* Shopify */}
            <div className="flex flex-col  bg-white rounded-lg shadow-md p-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="https://www.shipbob.com/wp-content/smush-webp/2023/10/28ce4c574cff78de6c4720d6b500cecf.png.webp"
                  alt="Shopify"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Shopify</h3>
              <p className="text-gray-600 text-sm">Streamline Shopify order fulfillment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedIntegration;
