import { useGetAceQuery } from '../../../hooks/UseGetAceQuery/useGetAceQuery.hook'

export const HeaderBanner = () => {
  const { data, isLoading } = useGetAceQuery()

  if (isLoading || !data?.globalAnnouncementHeader) {
    return <></>
  }
  return (
    <div className="mx-[5%] self-center text-wrap rounded-3xl rounded-b-3xl bg-green px-3 py-1 text-center text-white sm:p-2 md:w-max">
      <p className=" font-HNMedium text-base font-normal md:font-medium">
        {data.globalAnnouncementHeader}
      </p>
    </div>
  )
}
