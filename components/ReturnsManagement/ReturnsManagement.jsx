import React from 'react';
import Image from 'next/image';

const platforms = [
    {
        name: 'AfterShip',
        description: 'Enhance your post-purchase experience.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/09/6f4a1ee2f9d497c85d245dd3b4d47b16.png.webp',

    },
    {
        name: 'Corso',
        description: 'Automate returns, exchanges, product warranty claims and shipping issues.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/fb30164a7bb24ec601fe94f837d0635f.png.webp',

    },
    {
        name: 'Happy Returns',
        description: 'World-class return experiences.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Happy-Returns-Listings-Logo.png',

    },
    {
        name: 'Loop Returns',
        description: 'The returns app for Shopify’s top brands.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/05/Loop-Returns.jpg',

    },
    {
        name: 'ReturnGO',
        description: 'Automate your post-purchase process.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/11/4dc63537fb571ca05bbddef76af793a7.png.webp',

    },
    {
        name: 'ReturnLogic',
        description: 'Intelligent returns and warranty management.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/04/d0cf84718dc05fb9159b2a97ef444548.png.webp',

    },
];


function ReturnsManagement() {
    return (
        <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-25">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-4xl lg:text-4xl mb-4">
                        Returns Management Platforms
                    </h2>
                    <p className="text-gray-700 my-12">
                        Note: A blue checkmark represents a direct integration.
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

export default ReturnsManagement;
