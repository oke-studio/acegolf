import { Typography } from '../../Typography/Typography'
import { Button } from '../../Button/Button'

const FooterLinksArray = [
  // {
  // 	name: 'About',
  // 	to: '/about',
  // },
  // {
  // 	name: 'Careers',
  // 	to: '/careers',
  // },
  // {
  // 	name: 'Event & Parties',
  // 	to: '/events',
  // },
  // {
  // 	name: 'Privacy Policy',
  // 	to: '/privacy',
  // },
  // {
  // 	name: 'Terms & Conditions',
  // 	to: '/terms',
  // },
  {
    name: 'Pricing',
    to: '/book-now',
  },
  {
    name: 'Menu',
    to: '/menu',
  },
  {
    name: 'How it Works',
    to: '/how-it-works',
  },
]

export const FooterLinks = () => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-3">
        {FooterLinksArray.slice(0, 5).map((link, index) => (
          <Button
            buttonVariant="simple"
            key={index}
            buttonStyle={{ textAlign: 'start' }}
          >
            <a href={`${link.to}`}>
              <Typography fontVariant="headingFour" fontWeight="400">
                {link.name}
              </Typography>
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}
