import { Typography } from '../../Typography/Typography'
import { Button } from '../../Button/Button'
import { Link } from 'react-router-dom'

const FooterLinksArray = [
  {
    name: 'Menu',
    to: '/menu',
  },
  {
    name: 'How it Works',
    to: '/how-it-works',
  },
  {
    name: 'Coaching',
    to: '/coaching',
  },
  // {
  //   name: 'Leagues',
  //   to: '/leagues',
  // },
  {
    name: 'FAQ',
    to: '/faq',
  },
  {
    name: 'About',
    to: '/about',
  },
  // {
  //   name: 'Membership',
  //   to: '/membership',
  // },
]

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {FooterLinksArray.map((link, index) => (
        <Button
          buttonVariant="simple"
          key={index}
          buttonStyle={{ textAlign: 'start' }}
        >
          <Link to={`${link.to}`} className="hover:text-orange">
            <Typography fontVariant="headingFour" fontWeight="400">
              {link.name}
            </Typography>
          </Link>
        </Button>
      ))}
    </div>
  )
}
