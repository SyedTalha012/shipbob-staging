import React from 'react';
import Image from 'next/image';

const platforms = [
    {
        name: 'adQuadrant',
        description: 'Your full-funnel marketing powerhouse.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/AdQuadrant-Listings-Logo.png',

    },
    {
        name: 'Blanka',
        description: 'Build your brand with Blanka.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/10/Blanka-logos_secondary_stacked_peach_inverted-3-Kaylee-Astle.jpg.webp',

    },
    {
        name: 'BVACCEL',
        description: 'Incubates and grows the DTCs people love.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/BVAccess-Listings-Logo.jpg',

    },
    {
        name: 'eHouse Studio',
        description: 'Building and optimizing sites shoppers love.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/eHouse-Studio-Listings-Logo.png',

    },
    {
        name: 'Envoy',
        description: 'Branding, growth and product development.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Envoy-Listings-Logo.png',

    },
    {
        name: 'Eventige',
        description: 'Full-service design, and implementation agency.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/09/EMG-Listing-Icon-02-EMG-Group.png',

    },
    {
        name: 'Hawke Media',
        description: 'Your Outsourced CMO.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/05/hawkelogo-Riya-Jindal.png',

    },
    {
        name: 'Priceless Consulting',
        description: 'Veteran-owned design and marketing agency.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Pricelesss-Consulting-Listings-Logo.png',

    },
    {
        name: 'The Stable',
        description: 'An omnichannel commerce agency.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/09/The-Stable.jpg.webp',

    },
    {
        name: 'MuteSix',
        description: 'Performance marketing agency for DTC brands.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2019/12/MuteSix_White.png',

    },
    {
        name: 'ROI Revolution',
        description: 'PPC, SEO, CRO, social and Amazon advertising.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/ROI-Revolution-Listings-Logo.jpg',

    },
    {
        name: 'SeaMonster Studios',
        description: 'Our clients call us partners.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/03/seamonster-studios-1.png.webp',

    },
];



function MarketingPlatforms() {
    return (
        <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-25">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-4xl lg:text-4xl mb-4">
                    Branding, Marketing and Web Development <br />Agencies
                    </h2>
                    <p className="text-gray-700 my-12">
                    From branding, product development, advertising and marketing.<br />ShipBob partners with the top agencies to help grow your business.


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

export default MarketingPlatforms;
