import React from 'react';
import Image from 'next/image';

const platforms = [
    {
      name: 'DHL',
      description: 'The global leader in the logistics industry.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/DHL-Listings-Logo.jpg', 
      
    },
    {
      name: 'ECU Worldwide',
      description: 'Synergies to simplify geography.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/10/8202c268856452c977a9d3f654c17301.png.webp', 
      
    },
    {
      name: 'FedEx',
      description: 'Multinational courier and delivery services.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2019/11/logo-fedex2.svg', 
      
    },
    {
      name: 'UPS',
      description: 'The world’s largest delivery company.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2019/11/logo-ups2.svg', 
      
    },
    {
      name: 'US Postal Service',
      description: 'The United States Postal Service.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2019/11/logo-usps2.svg', 
      
    },
    {
      name: 'Anvyl',
      description: 'Take control of your production process.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/07/Anvyl-logo-Jill-Rubin.png', 
      
    },
    {
      name: 'Echo Global Logistics',
      description: 'Tech-enabled supply chain management.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Echo-Global-Logistics-Listings-Logo.png', 
      
    },
    {
      name: 'EasyPost',
      description: 'Best-in-class multi-carrier shipping API.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/02/EasyPost-1.png.webp', 
      
    },
    {
      name: 'FlavorCloud',
      description: 'We make global expansion EASY.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2022/04/shipbob_flavorcloud_icon_200x200-Trilby-Rajna.png', 
      
    },
    {
      name: 'Freightos',
      description: 'Freight that just works.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Freightos-Listings-logo.png', 
      
    },
    {
      name: 'Route',
      description: 'The premier post-purchase experience.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Route-Listings-Logo.jpg', 
      
    },
    {
      name: 'Rush',
      description: 'Ship, Track, Notify & Upsell.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/09/Rush-Logo-200x200-Stanislav-Stankov.png', 
      
    },
  
    {
      name: 'Shippo',
      description: 'Get the best rates from top carriers.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/04/shippo_logo_200x200-1.png', 
      
    },
    {
      name: 'ShipStation',
      description: 'The leading web-based shipping software.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/05/Stacked-Logo-300x300-1.png', 
      
    },
  ];
  

function LogisticPlatform() {
    return (
        <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-25">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-4xl lg:text-4xl mb-4">
                    Freight & Shipping Solutions
                    </h2>
                    <p className="text-gray-700 my-12">
                    Last-mile fulfillment is just part of the equation. 3PHOST partners with <br/>these carriers and shipping platforms to lower your shipping costs.<br/>Note: A blue checkmark represents a direct integration.


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

export default LogisticPlatform;
