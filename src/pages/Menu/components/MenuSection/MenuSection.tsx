import * as React from 'react'
import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'
import classNames from 'classnames'
import { Typography } from '../../../../components/Typography/Typography'
// import { Button } from '../../../../components/Button/Button'
import { Spinner } from '../../../../components/LoadingStates/Spinner'
import { useGetMenu } from '../../hooks/useGetMenu.hook'
import {
  MenuCollectionsType,
  MenuImageType,
  MENU_COLLECTIONS,
  MENU_SECTION_NAMES,
} from '../../types/MenuSectionTypes'
import { motion, AnimatePresence } from 'framer-motion'
// import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const MAP_MENU_COLLECTION_TO_IMAGE: {
  [K in MenuCollectionsType]: MenuImageType
} = {
  smallBitesCollection: 'smallBitesImage',
  bigBitesCollection: 'bigBitesImage',
  dessertsCollection: 'dessertsImage',
  drinksCollection: 'drinksImage',
}

export const MenuSection = () => {
  const [value, setValue] = React.useState(0)
  const { menuData, isLoading, isError } = useGetMenu()

  const isMobile = useMediaQuery({ maxWidth: '640px' })

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (isError || !menuData) {
    return <div>Menu Data not available</div>
  }

  const MENU_COLLECTION_KEYS_SORT: { [key in MenuCollectionsType]: number } = {
    bigBitesCollection: 2,
    smallBitesCollection: 1,
    drinksCollection: 3,
    dessertsCollection: 4,
  }

  const isNullMenu = (option: MenuCollectionsType) => {
    const menu = menuData[option]

    if (menu.items.every((item) => item === null)) {
      return true
    }

    return false
  }

  const MenuCollectionKeys = (
    Object.keys(menuData).filter((item) =>
      MENU_COLLECTIONS.includes(item)
    ) as MenuCollectionsType[]
  )
    .filter((o) => !isNullMenu(o))
    .sort(
      (n1, n2) => MENU_COLLECTION_KEYS_SORT[n1] - MENU_COLLECTION_KEYS_SORT[n2]
    )

  const imgSrc =
    menuData[MAP_MENU_COLLECTION_TO_IMAGE[MenuCollectionKeys[value]]]?.url

  return (
    <Section
      borderRadiusVariant="pill"
      sectionWidth="normal"
      style={{
        alignItems: 'center',
        marginBottom: '32px',
        padding: '2% 5%',
      }}
    >
      <Container
        style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column' }}
      >
        <div className="flex h-full min-h-[inherit] flex-col items-center justify-center gap-8">
          {!isMobile && (
            <nav
              className="flex snap-x justify-center gap-8 overflow-scroll text-xl "
              aria-label="Tabs"
              role="tablist"
              data-tab-select="#tab-select"
            >
              {MenuCollectionKeys.map((v, i) => (
                <MenuTab
                  key={`tab_${i}`}
                  label={MENU_SECTION_NAMES[v]}
                  value={i}
                  handleClick={(newValue) => setValue(newValue)}
                  isActive={i === value}
                />
              ))}
            </nav>
          )}
          <div className="grid w-full flex-1 gap-8 sm:grid-cols-2">
            {/* Data */}
            <div className=" w-full gap-4 sm:block">
              {MenuCollectionKeys.map((option, index) => {
                const menu = menuData[option]

                return (
                  <MenuTabPanel
                    index={isMobile ? 0 : index}
                    value={isMobile ? 0 : value}
                    key={`menu_option_${index}`}
                  >
                    <div className="flex flex-col gap-6">
                      <Typography
                        fontVariant="headingTwo"
                        fontWeight="900"
                        fontStyle="italic"
                        // id={`${menuSection}_list`}
                      >
                        {[MENU_SECTION_NAMES[option]]}
                      </Typography>
                      <ul className="flex flex-col gap-3">
                        {menu.items
                          .filter((item) => item)
                          .map((m, index) => (
                            <li
                              key={`${option}_menu_item_${index}`}
                              className="flex flex-col gap-1"
                            >
                              <div className="flex justify-between gap-2">
                                <Typography
                                  fontVariant="small"
                                  fontWeight="500"
                                  tailwindStyle="flex items-center"
                                >
                                  {m.name}
                                </Typography>
                                <Typography
                                  fontVariant="base"
                                  fontWeight="300"
                                  tailwindStyle="text-orange"
                                >
                                  {m.price}
                                </Typography>
                              </div>
                              <Typography
                                fontVariant="miniscule"
                                fontWeight="300"
                                fontStyle="italic"
                              >
                                {m.itemDescription}
                              </Typography>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </MenuTabPanel>
                )
              })}
            </div>

            {/* Image */}
            {!isMobile && (
              <AnimatePresence mode="wait">
                <motion.div
                  className=" rounded-2xl bg-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5, type: 'spring' },
                  }}
                  key={imgSrc}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              </AnimatePresence>
            )}
          </div>

          {/* <Button buttonVariant="secondary">
            <Link to="/book-now">
              <Typography fontVariant="base" fontWeight="400">
                Reserve a bay &rarr;
              </Typography>
            </Link>
          </Button> */}
        </div>
      </Container>
    </Section>
  )
}

interface PricesTabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export const MenuTabPanel = ({
  index,
  value,
  children,
}: PricesTabPanelProps) => {
  const isHidden = value !== index
  return (
    <div
      id={`tabpanel_${index}`}
      hidden={isHidden}
      role="tabpanel"
      aria-labelledby={`tab_${index}`}
    >
      {!isHidden && <div className="p-3 sm:p-0">{children}</div>}
    </div>
  )
}

interface MenuTabProps {
  label: string
  value: number
  handleClick: (value: number) => void
  isActive: boolean
}
const MenuTab = ({ label, value, handleClick, isActive }: MenuTabProps) => {
  const activeStyles = 'text-orange hover:text-orange'
  return (
    <motion.button
      type="button"
      className={classNames(
        'justify-center py-3  disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? activeStyles
          : 'bg-transparent text-black hover:text-sharpTeal '
      )}
      id={value.toString()}
      onClick={() => handleClick(value)}
      aria-controls="hs-tab-to-select-2"
      role="tab"
    >
      <Typography fontVariant="small" fontWeight="500">
        {label}
        {/* <motion.span initial="rest" whileHover="hover">
          {label.split('').map((text, index) => {
            return (
              <motion.span
                key={`${text}_${index}`}
                className="relative"
                variants={index % 2 === 0 ? EVEN_ANIMATION : ODD_ANIMATION}
              >
                {text}
              </motion.span>
            )
          })}
        </motion.span> */}
      </Typography>
    </motion.button>
  )
}

// const EVEN_ANIMATION = {
//   hover: {
//     top: '5px',
//     color: '#EB8B32',
//     rotate: RNG(5, 20),
//     transition: {
//       duration: 0.5,
//       type: 'spring',
//     },
//   },
//   rest: {
//     top: '0px',
//     color: '#000000',
//     rotate: 0,
//     transition: {
//       duration: 0.5,
//       type: 'spring',
//     },
//   },
// }

// const ODD_ANIMATION = {
//   hover: {
//     top: '-5px',
//     color: '#EB8B32',
//     rotate: RNG(-5, -20),
//     transition: {
//       duration: 0.5,
//       type: 'spring',
//     },
//   },
//   rest: {
//     top: '0px',
//     color: '#000000',
//     rotate: 0,
//     transition: {
//       duration: 0.5,
//       type: 'spring',
//     },
//   },
// }
