import React from 'react'
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';
import Customer from './Customer';
import '././css/customer.css'


function Content() {
  return (
    <div className='content'>
        <Customer />
        <BannerLeft
         image="/images/multipleApp.svg"
         title="No need for multiple apps"
         description="Easily connect all your accounts. From cash and credit to loans and investments, you can see your complete financial picture on Flick."
        />
        
        <BannerRight
         image="/images/payFaster.svg"
         title="Pay anyone 7x faster"
         description="Pay friends, businesses and family, no matter what bank account they use. They get credited instantly and securely."
        />

        <BannerLeft
         image="/images/financialOverview.svg"
         title="Your Financial Overview at a glance"
         description="From the big picture to the tiny details, Flick gives you the full overview of all your finances. Discover where your money really goes each month thanks to powerful insights about your spending habits."
        />

        <BannerRight
         subtitle="Coming Soon"
         image="/images/loyaltyCard.svg"
         title="Access digital loyalty cards and earn customer points"
         description="Get rewarded by your favorite merchant with digital loyalty cards and earn customer points to shop more. With our app, no more unused/untraceable loyalty customer points."
        />

        <BannerRight
         image="/images/security.svg"
         title="Security & support you can trust"
         description="Flick uses secure processes to protect your information and help prevent unauthorized use. Also, If you need help, Flick’s support channels are on standby 24/7."
        />
    </div>
  )
}

export default Content;