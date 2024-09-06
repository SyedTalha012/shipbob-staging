import React from 'react';
import Image from 'next/image';

const platforms = [
  {
    name: 'Shopify',
    description: 'Streamline Shopify order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Shopify-Icon-Listings.jpg',
  },
  {
    name: 'Shopify Plus',
    description: 'Power Shopify Plus order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Shopify-Plus-Icon.jpg',
  },
  {
    name: 'Amazon',
    description: 'Fulfill Amazon orders seamlessly.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Amazon-Marketplace-Listings-Logo.png',
  },
  {
    name: 'BigCommerce',
    description: 'Automate BigCommerce order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/BigCommerce-Logo-Listings.png',
  },
  {
    name: 'Ebay',
    description: 'Automate Ebay order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2019/12/800px-EBay_logo.svg.png',
  },
  {
    name: 'GS1 US',
    description: 'Power your supply chain with GS1 US.',
    imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/06/acbfc7c3226c00732015660467ae692c.png.webp',
  },
  {
    name: 'Square',
    description: 'Automate Square order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Square-Listings-Logo.jpg',
  },
  {
    name: 'Walmart',
    description: 'Streamline Walmart order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Walmart-Logo-Listings.jpg',
  },
  {
    name: 'Magento',
    description: 'A single platform for all your commerce.',
    imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/01/magento-2-logo-png-transparent-Tom-Davis.png.webp',
  },
  {
    name: 'Squarespace',
    description: 'Simplify Squarespace order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Squarespace-Listings-Logo.png',
  },
  {
    name: 'Netsuite',
    description: 'The world’s most deployed cloud ERP solution.',
    imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/03/Netsuite-1.png.webp',
  },
  {
    name: 'TikTok',
    description: 'Fulfill TikTok Shop and beyond.',
    imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/09/2f85164349e6fa986a207577555a15df-1.png.webp',
  },
  {
    name: 'Wix',
    description: 'Optimize Wix order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Wix-Listings-Logo.png',
  },
  {
    name: 'WooCommerce',
    description: 'Scale WooCommerce order fulfillment.',
    imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Woo-Listings-Logo.jpg',
  },
];

function EcommercePlatforms() {
  return (
    <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-25">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-4xl lg:text-4xl mb-4">
            Ecommerce Platforms & Marketplaces
          </h2>
          <p className="text-gray-700 my-12">
          3PHOST partners directly with the following platforms and marketplaces <br />to streamline order fulfillment for your business.<br /> Note: A blue checkmark represents a direct integration.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <div key={index} className="relative flex items-center p-4 bg-white rounded-lg">
              
                <Image
                  src={platform.imgSrc}
                  alt={platform.name}
                  width={70}
                  height={70}
                  className="object-contain mr-4"
                />
                <div>
                  <h3 className="text-base font-bold text-gray-900">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcommercePlatforms;
