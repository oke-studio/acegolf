import { Container } from '../../components/Container/Container'
import { Typography } from '../../components/Typography/Typography'
import { Section } from '../../components/Section/Section'
import { HeaderLogo } from '../../components/Header/components/HeaderLogo'
import AboutBanner from '../../assets/about-banner.webp'
import { useGetAboutPage } from '../../hooks/UseGetAceAboutPageQuery/useGetAceAboutPage.hook'

export const AboutACE = () => {
  const { aboutData, isError, isLoading } = useGetAboutPage()

  if (isError || !aboutData) {
    return <></>
  }

  if (isLoading) {
    return <>loading...</>
  }
  const { aboutPageBlurb, aceGolfStaffProfilesCollection } = aboutData

  return (
    <>
      <Container
        style={{ gap: '32px', display: 'flex', flexDirection: 'column' }}
      >
        <Section
          borderRadiusVariant="pill"
          style={{
            backgroundColor: 'black',
            border: 0,
            padding: '0',

            // backgroundImage: `url(${AboutBanner})`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
          }}
        >
          <div
            className="flex flex-wrap *:grow *:basis-64"
            //  style={{
            //   width: '50%'}}
          >
            {/* Image */}
            <div className="relative flex h-56 w-full flex-col overflow-hidden rounded-t-3xl bg-clip-border text-gray-700 shadow-md md:h-auto md:rounded-l-xl md:rounded-bl-xl md:rounded-tr-none">
              {/* <div
                className="h-full bg-slate-300 grayscale"

                style={{
                  // backgroundImage: `url(${Bay1URL})`,
                  // backgroundPosition: 'center',
                  // backgroundSize: 'cover',
                }}
              /> */}
              <img
                src={AboutBanner}
                className=" h-auto min-h-full w-auto min-w-full object-cover object-left"
              />
            </div>
            {/* Copy */}
            <div className="flex flex-col items-center gap-14 p-20 px-6 pb-28 text-center text-white">
              <HeaderLogo />
              <div>
                <Typography fontVariant="base" fontWeight="400">
                  {aboutPageBlurb}
                </Typography>
              </div>
            </div>
          </div>
        </Section>

        <Section
          borderRadiusVariant="corner"
          style={{
            backgroundColor: 'transparent',
            border: 0,
            paddingTop: 0,
          }}
        >
          <Container style={{ color: 'white' }}>
            <div className="mt-10 flex flex-col items-center justify-center gap-8">
              <Typography fontVariant="extralarge" fontWeight="700">
                OUR TEAM
              </Typography>
              <div className="grid h-full grid-rows-2 gap-x-8 gap-y-8 md:grid-cols-2">
                {aceGolfStaffProfilesCollection.items.map((staff, index) => (
                  <div
                    className="flex h-full flex-col items-center"
                    key={`ace_golf_staff_${index}`}
                  >
                    <div
                      className="aspect-1 mb-8 h-80 w-80 rounded-lg "
                      style={{
                        backgroundImage: `url(${staff.pictureOfPerson.url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <Typography fontVariant="base" fontWeight="500">
                      {staff.nameOfPerson}
                    </Typography>
                    <Typography fontVariant="base" fontWeight="200">
                      {staff.titleOfPerson}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Container>
    </>
  )
}
