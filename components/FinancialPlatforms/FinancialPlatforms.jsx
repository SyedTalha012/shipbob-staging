import React from 'react';
import Image from 'next/image';

const platforms = [
    {
        name: 'Airwallex',
        description: 'Your business account for global success.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/05/5c3209e8ec85ef1e7d124fb099af424f.png.webp',

    },
    {
        name: 'Avalara',
        description: 'Automated tax compliance.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Avalara-Listings-Logo.png',

    },
    {
        name: 'Avask',
        description: 'Global ecommerce tax experts.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/02/AVASK-FAV.png.webp',

    },
    {
        name: 'Bookkeeper360',
        description: 'Your Professional Accounting Team.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/09/Bookkeeper360.png.webp',

    },
    {
        name: 'Canusa Logistics',
        description: 'Canadian customs brokerage.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/11/Canusa-Logo-150ppi-RGB-Canusa-Logistics.jpg',

    },
    {
        name: 'Clearco',
        description: 'Fast, affordable ecommerce funding.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Clearbanc-Listings-Logo.jpg',

    },
    {
        name: 'DSP Insurance Services',
        description: 'Tailored insurance solutions.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/07/Partner-Listing-Directory-Icon-1.png.webp',

    },
    {
        name: 'Firstbase.io',
        description: 'Launch your business in the US. From anywhere.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/07/lx0wyhbxblpvda5jeuku-Carson-Drake.png',

    },
    {
        name: 'Kickfurther',
        description: 'Sell more inventory before paying for it.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/09/Logo-BIG-Sophie-Kennedy.png',

    },
    {
        name: 'Mercury',
        description: 'The banking stack for ecommerce.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/05/Circle-logo-300_300-Travis-Price.png',

    },
    {
        name: 'OFX',
        description: 'OFX Global Money Transfers.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/09/Partner-Listing-Directory-Icon-3.png.webp',

    },
    {
        name: 'Passport',
        description: 'Your Passport to international growth.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/5a846e6418ebb4c94947800f293f1d51.png.webp',

    },
    {
        name: 'Rho',
        description: 'Take charge of business finances.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/09/Rho.png.webp',

    },
    {
        name: 'SimplyVAT',
        description: 'International VAT compliance services.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/06/SimplyVAT.com-Blue-No-background-Sofia-Guy.png',

    },
    {
        name: 'StartSure',
        description: 'Insure your inventory in seconds.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/9a79abcc77ac555ac400b03609963b71.png.webp',

    },
    {
        name: 'TaxJar',
        description: 'Automated sales tax compliance.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2022/02/TaxJar.png',

    },
    {
        name: 'Taxually',
        description: 'Global Taxes Simplified.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/028571657e7f953fa2ed8082d806e87d.png.webp',

    },
    {
        name: 'ZonKeepers',
        description: 'Australian taxation for e-commerce brands.',
        imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/11/ZonKeepers-Partners-Page.png',

    },
    {
        name: 'Zyla',
        description: 'Multi-currency accounts for international payments.',
        imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/04/559577df5f5fc17f6e94168dbd6f9719.png.webp',

    },
];



function FinancialPlatforms() {
    return (
        <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-25">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-4xl lg:text-4xl mb-4">
                        Accounting, Tax and Financing
                    </h2>
                    <p className="text-gray-700 my-12">
                        We’re not all great at math. ShipBob partners with the top accounting and <br />customer data, marketing and handling support tickets.<br /> Note: A blue checkmark represents a direct integration.
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

export default FinancialPlatforms;
