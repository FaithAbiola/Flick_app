import React from 'react'
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';
import Customer from './Customer';
import './content.css'
import img1 from '../../assets/images/multipleApp.svg'
import img2 from '../../assets/images/payFaster.svg'
import img3 from '../../assets/images/financialOverview.svg'
import img4 from '../../assets/images/loyaltyCard.svg'
import img5 from '../../assets/images/security.svg'

function Content() {
  return (
    <div className='content'>
        <Customer />
        <BannerLeft
         image={img1}
         title="No need for multiple apps"
         description="Easily connect all your accounts. From cash and credit to loans and investments, you can see your complete financial picture on Flick."
        />
        
        <BannerRight
         image={img2}
         title="Pay anyone 7x faster"
         description="Pay friends, businesses and family, no matter what bank account they use. They get credited instantly and securely."
        />

        <BannerLeft
         image={img3}
         title="Your Financial Overview at a glance"
         description="From the big picture to the tiny details, Flick gives you the full overview of all your finances. Discover where your money really goes each month thanks to powerful insights about your spending habits."
        />

        <BannerRight
         subtitle="Coming Soon"
         image={img4}
         title="Access digital loyalty cards and earn customer points"
         description="Get rewarded by your favorite merchant with digital loyalty cards and earn customer points to shop more. With our app, no more unused/untraceable loyalty customer points."
        />

        <BannerLeft
         image={img5}
         title="Security & support you can trust"
         description="Flick uses secure processes to protect your information and help prevent unauthorized use. Also, If you need help, Flick’s support channels are on standby 24/7."
        />
    </div>
  )
}

export default Content;