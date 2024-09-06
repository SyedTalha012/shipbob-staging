import React from 'react';
import Image from 'next/image';

const platforms = [
    {
      name: 'Arka',
      description: 'One-stop packaging shop with great prices.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Arka-Listings-Logo.png', 
      
    },
    {
      name: 'Flush Packaging',
      description: 'Fiercely protective packaging.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/6ae95743555c71aeb750410e7b33df7f.png.webp', 
      
    },
    {
      name: 'Noissue.',
      description: 'Custom eco-friendly ecommerce packaging.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/noissue-Listings-Logo.png', 
      
    },
    {
      name: 'Packhelp',
      description: 'Better custom packaging in all volumes.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/11/Packhelp-Icon.png', 
      
    },
    {
      name: 'Packlane',
      description: 'Retail-ready custom cardboard boxes.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2019/12/Packlane_Logo_Block_Transparent.png', 
      
    },
  ];
  
  
function PackagingPlatforms() {
    return (
        <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-25">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-4xl lg:text-4xl mb-4">
                    Ecommerce Marketing, CRM and Customer Support                    </h2>
                    <p className="text-gray-700 my-12">
                    Everything else you need for ecommerce success, from managing <br />customer data, marketing and handling support tickets.<br /> Note: A blue checkmark represents a direct integration.
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

export default PackagingPlatforms;
