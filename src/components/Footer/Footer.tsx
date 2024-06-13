import { Typography } from '../Typography/Typography'
import { motion } from 'framer-motion'
import { FooterLinks } from './components/FooterLinks'

import AceFooterURL from '/logos/ace-footer-v2.svg'
import AceFooterMiniUrl from '/logos/ace-footer-v2-mini.svg'

export const Footer = () => {
  // const HEADING_FOUR_LINE_HEIGHT = typography.headingFour.lineHeight;

  // console.log(inputClasses);
  return (
    <div
      className="relative z-[5] flex flex-col items-center bg-[#171717] bg-bottom bg-origin-content text-white sm:items-end sm:bg-[bottom_-3rem_left_-3rem]"
      style={{
        backgroundImage: `url(${AceFooterURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '500px',
      }}
    >
      <div className="m-6 flex flex-col gap-4">
        {/* Links */}
        <FooterLinks />
        {/* Logo and Socials */}
        <div className="flex gap-5">
          <div
            className="h-auto w-24 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${AceFooterMiniUrl})`,
            }}
          />

          <div className="flex flex-col">
            <Typography fontVariant="small" fontWeight="500">
              2023 Ace Golf Bar
            </Typography>
            <Typography fontVariant="miniscule" fontWeight="300">
              588 Eastern Ave, Toronto
            </Typography>
          </div>
        </div>

        <div className="flex gap-6 overflow-hidden">
          <a
            href="https://www.instagram.com/acegolfbar/"
            target="__blank"
            className="block h-[32px] overflow-hidden transition-colors duration-500 hover:text-orange"
          >
            <motion.div
              whileHover={{ y: -32 }}
              transition={{ ease: 'backInOut', duration: 0.5 }}
            >
              <Typography fontVariant="headingFour" fontWeight="400">
                Instagram
              </Typography>
              <Typography
                fontVariant="headingFour"
                fontWeight="400"
                style={{ display: 'flex', gap: '1.5rem' }}
              >
                Instagram{' '}
                <img src={AceFooterMiniUrl} height={20} width={20} alt="ace" />
              </Typography>
            </motion.div>
          </a>

          <a
            href="https://www.tiktok.com/@acegolfbar"
            target="__blank"
            className="block h-[32px] overflow-hidden transition-colors duration-500 hover:text-orange"
          >
            <motion.div
              whileHover={{ y: -32 }}
              transition={{ ease: 'backInOut', duration: 0.5 }}
            >
              <Typography fontVariant="headingFour" fontWeight="400">
                Tiktok
              </Typography>
              <Typography
                fontVariant="headingFour"
                fontWeight="400"
                style={{ display: 'flex', gap: '1.5rem' }}
              >
                Tiktok{' '}
                <img src={AceFooterMiniUrl} height={20} width={20} alt="ace" />
              </Typography>
            </motion.div>
          </a>
        </div>

        <Typography fontVariant="base" fontWeight="300">
          Designed & Developed by @oke.studio
        </Typography>
      </div>
    </div>
  )
}
