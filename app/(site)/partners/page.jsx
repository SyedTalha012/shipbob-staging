import PartnerHero from '@/components/Hero/PartnerHero'
import FeaturedIntegration from '@/components/FeaturedIntegration/FeaturedIntegration'
import EcommercePlatforms from '@/components/EcommercePlatforms/EcommercePlatforms'
import EcommerceOperations from '@/components/EcommerceOperations/EcommerceOperations'
import ReturnsManagement from '@/components/ReturnsManagement/ReturnsManagement'
import LogisticPlatform from '@/components/LogisticPlatform/LogisticPlatform'
import EcommerceTools from '@/components/EcommerceTools/EcommerceTools'
import PackagingPlatforms from '@/components/PackagingPlatforms/PackagingPlatforms'
import MarketingPlatforms from '@/components/MarketingPlatforms/MarketingPlatforms'
import FinancialPlatforms from '@/components/FinancialPlatforms/FinancialPlatforms'
import BecomePartner from '@/components/BecomePartner/BecomePartner'
import React from 'react'

function PartnersPage() {
    return (
        <div>
            <PartnerHero />
            <FeaturedIntegration />
            <EcommercePlatforms />
            <EcommerceOperations />
            <ReturnsManagement />
            <LogisticPlatform />
            <EcommerceTools />
            <PackagingPlatforms />
            <MarketingPlatforms />
            <FinancialPlatforms />
            <BecomePartner />
        </div>
    )
}

export default PartnersPage