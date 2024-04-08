import { useGetAceQuery } from '../../../hooks/UseGetAceQuery/useGetAceQuery.hook'
import { Typography } from '../../Typography/Typography'

export const HeaderBanner = () => {
  const { data, isLoading } = useGetAceQuery()

  if (isLoading || !data?.globalAnnouncementHeader) {
    return <></>
  }
  return (
    <div className="w-full self-center text-wrap rounded-b-3xl bg-green p-2 text-center text-white md:w-max md:rounded-3xl md:p-4">
      <Typography fontVariant="base" fontWeight="500">
        {data.globalAnnouncementHeader}
      </Typography>
    </div>
  )
}
