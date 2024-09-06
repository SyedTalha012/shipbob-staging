import React from 'react';
import Image from 'next/image';

const platforms = [
    {
      name: 'CartHook',
      description: 'Best-in-class post-purchase offers.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/07/Carthook-App-Icon-Kate-Cassidy.png', 
      
    },
    {
      name: 'CheckoutChamp',
      description: 'Increase your sales by 20% or more.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/07/CheckoutChamp-4-Matthew-Martorano-1.png', 
      
    },
    {
      name: 'EcoCart',
      description: 'Offset customer carbon footprint.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/11/Partner-Listing-Directory-Icon-8.png.webp',
      
    },
    {
      name: 'Gorgias',
      description: 'Turn your customer service into a profit center.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Gorgias-Listings-Logo.jpg',
      
    },
    {
      name: 'Justuno',
      description: 'Website Personalization & Pop-Ups.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/04/732bb3987cdf0c35050a8cfb8aca6f51.png.webp',
      
    },
    {
      name: 'Klaviyo',
      description: 'Marketing automation built for e-commerce.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/06/Partner-Listing-Directory-Icon.png.webp',
      
    },
    {
      name: 'Lucky Orange',
      description: 'Increase conversion rates by seeing where visitors are clicking.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/d33e550bb85507ef372b3e0f8cbfbe08.png.webp',
      
    },
    {
      name: 'Octane AI',
      description: 'Marketing fuel for your ecommerce brand.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/05/Untitled-design-5.png',
      
    },
    {
      name: 'Okendo',
      description: 'Customer reviews, UGC, & Q&A.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/09/Okendo-Logo.jpg',
      
    },
    {
      name: 'Omnisend',
      description: 'Centralized email, SMS, and push notifications.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Omnisend-Listings-Logo.jpg',
      
    },
    {
      name: 'Ordergroove',
      description: 'Subscription payment technology that grows with you.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/10/Partner-Listing-Directory-Icon-6.png.webp',
      
    },
    {
      name: 'PageFly',
      description: 'Build high-converting landing pages.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/07/PageFly-logo-symbol-Alex-Bui.png',
      
    },
    {
      name: 'Polygon',
      description: 'Sync Shipbob data with any data system.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/06/fb07a23d4811286dbdd7080c601a355e.png.webp',
      
    },
    {
      name: 'Privy',
      description: 'Convert & monetize your traffic. Get more emails and sales.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Privy-Listings-Logo.jpg',
      
    },
    {
      name: 'Quartile',
      description: 'E-commerce Ads Manager.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/01/Quartile.png.webp',
      
    },
    {
      name: 'Recharge',
      description: 'World-class return experiences.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/10/Cobalt-Kevin-Lew.png',
      
    },
    {
      name: 'Rise.ai',
      description: 'Gift Card and store andalytic solution for ecommerce.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/05/Rise.ai_-2.png.webp',
      
    },
    {
      name: 'Sara Analytics',
      description: 'The ultimate analytics platform for eCommerce.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/d3df272b3a115e7b500ca09ae2ee72d4.png.webp',
      
    },
    {
      name: 'Sezzle',
      description: 'Buy Now Pay later interest free',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/09/sezzle-square-logo-Corinne-Boonstra.jpeg',
      
    },
    {
      name: 'Shop Circle',
      description: 'The world’s first e-commerce technology company.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/12/shop-circle-favicon-1.png.webp',
      
    },
    {
      name: 'Simpler',
      description: '24/7 customer service outsourcing.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2020/01/Simplr-Logo.svg',
      
    },
    {
      name: 'Skio',
      description: 'Sell subscriptions for your Shopify store.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2022/02/skio-square-logo.jpeg',
      
    },
    {
      name: 'Smartrr',
      description: 'Subscriptions that grow with your customers.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/07/logo-256x256-Gabriella-Yitzhaek.png',
      
    },
    {
      name: 'Subify',
      description: 'Subscription plans for your Shopify store.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/07/6464caf480a34df450b30d7f79817e97.png.webp',
      
    },
    {
      name: 'TalentPop',
      description: 'Customer service talent on demand.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/06/1605921288109.jpeg',
      
    },
    {
      name: 'Throne',
      description: 'Your free influencer marketing channel.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/08/0ea998fc70dd8a19976611e3cff581f0.png.webp',
      
    },

    {
      name: 'Triple Whale',
      description: 'Data and attribution tools for e-commerce.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/11/942784c903a51e512ae7c67be7b54b79.png.webp',
      
    },
    {
      name: 'Tydo',
      description: 'Tools for scaling your Shopify store.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/09/Partner-Listing-Directory-Icon-5.png.webp',
      
    },
    {
      name: 'Yotpo',
      description: 'Customer relationship marketing for e-commerce.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/04/009d6c9cd4987e265129b2b274cbff00.png.webp',
      
    },
    {
      name: 'Yumna AI',
      description: 'AI-powered tools for e-commerce.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/07/44da5acffdf2eb1a1cb9f60e318262ac.png.webp',
      
    },
    {
      name: 'Zaius',
      description: 'Customer relationship and marketing automation platform.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Zaius-Listings-Logo.jpg',
      
    },
    {
      name: 'Zip',
      description: 'Buy now, pay later. Anywhere.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/08/Icon_168-x-168_Transparent@2x.png',
      
    },
  ];
  
function EcommerceTools() {
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

export default EcommerceTools;
