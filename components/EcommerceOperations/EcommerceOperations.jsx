import React from 'react';
import Image from 'next/image';

const platforms = [
    {
      name: 'Brightpearl',
      description: 'Operations Platform for omnichannel merchants.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Brightpearl-Listings-Logo-1.png',
      
    },
    {
      name: 'Brij',
      description: 'QR codes for first-party data capture.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2022/02/Brij-Square-Logo.jpeg',
      
    },
    {
      name: 'ChannelApe',
      description: 'Operational solutions that help brands scale.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/03/ChannelApe-1.png.webp',
      
    },
    {
      name: 'ChannelEngine',
      description: 'Reach millions on 700+ global sales channels.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/09/14625b475b6c24f9b6f723e307adb3dc.png.webp',
      
    },
    {
      name: 'Cin7',
      description: 'Centralize all your sales channel operations.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/01/Cin-7-1.png.webp',
    },
    {
      name: 'Cogsy',
      description: 'Your extra Head of Operations.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2022/02/Cogsy-Social-Circle-Marcella-Chamorro.png',
      
    },
    {
      name: 'Cymbio',
      description: 'Automated marketplace and dropshipping.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/05/Cymbio-Logo-Ilana-Semel.png',
      
    },
    {
      name: 'Fixpoint',
      description: 'Integrate Any Vendor. Optimize Every Order.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/04/d864012f89396f23084b270ed743ef27.png.webp',
      
    },
    {
      name: 'Fulfil.io',
      description: 'The only ERP for D2C & wholesale merchants.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2022/04/Fulfil_Logo-Conor-Daly.png',
    },
    {
      name: 'Inventory Planner',
      description: 'Take the guesswork out of inventory forecasting.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Inventory-Planner-Listings-Logo.png',
      
    },
    {
      name: 'Linnworks',
      description: 'Connect and automate multichannel operations.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/05/948f52542476d8eb309f149c5221dc0a.png.webp',
      
    },
    {
      name: 'Logicbroker',
      description: 'Launch and scale drop ship and marketplace programs.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2022/07/logic-broker-logo.png.webp',
    },
  
    {
      name: 'PackageBee',
      description: 'Connect your custom online store to ShipBob.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Package-Bee-Listings-Logo.png',
      
    },
    {
      name: 'Pipe17',
      description: 'Automate Omnichannel Order Operations.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/01/df080ef96fea81def94782d9f16674f8.png.webp',
      
    },
    {
      name: 'Prime Penguin',
      description: 'Your eCommerce integration platform.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/05/d6e856388e52194a915e23f488b85cc4.png.webp',
    },
    {
      name: 'Purple Dot',
      description: 'Pre-order management and operations.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/07/36444b9aa4ce0cc2dd3aa0843c604a6b.png.webp',
    },
    {
      name: 'Shypyard',
      description: 'Agile Forecasting and Inventory Planning.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2023/03/shypyard-5.png.webp',
      
    },
    {
      name: 'Skubana',
      description: 'Sell direct-to-everywhere.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2021/03/Skubana-Listings-Logo.jpg',
      
    },
    {
      name: 'SPS Commerce',
      description: 'Meet your retailer’s EDI requirements.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2022/02/SPS-Listings-Page-1.png',
    },
    {
      name: 'WebBee Global',
      description: 'Multi-Channel Order Management.',
      imgSrc: 'https://www.shipbob.com/wp-content/smush-webp/2024/08/2aea292bfcd9316aff6e19cae9230ed8.png.webp',
      
    },
    {
      name: 'Zentail',
      description: 'Be where your buyers are.',
      imgSrc: 'https://www.shipbob.com/wp-content/uploads/2019/12/Zentail_Logo_Block.png',
      
    },
  ];
  

function EcommerceOperations() {
    return (
        <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-25">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-4xl lg:text-4xl mb-4">
                    Ecommerce Operations, Inventory & Order <br /> Management

                    </h2>
                    <p className="text-gray-700 my-12">
                    Managing inventory, forecasting demand, and order handling. ShipBob <br />partners with the leading platforms to scale your brand.<br /> Note: A blue checkmark represents a direct integration.
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

export default EcommerceOperations;
