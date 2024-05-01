import { useGetAceQuery } from '../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export const HeaderBanner = () => {
  const { data, isLoading } = useGetAceQuery()

  if (isLoading || !data?.globalAnnouncementHeader) {
    return <></>
  }
  return (
    <div className="mx-[5%] self-center text-wrap rounded-3xl rounded-b-3xl bg-green px-3 py-2 text-center text-white sm:p-2 md:w-max">
      <p className=" font-HNMedium text-xs font-medium md:text-base">
        {data.globalAnnouncementHeader}
      </p>
    </div>
  )
}
