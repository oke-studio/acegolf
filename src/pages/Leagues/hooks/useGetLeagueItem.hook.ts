import { useGetLeagues } from "../../../hooks/UseGetLeagues/useGetLeagues.hook"

export function useGetLeagueItem(leagueId: string) {
  const { leaguesData, isError, isLoading } = useGetLeagues()

  const leagueItem = leaguesData?.find((e) => e.slugId === leagueId)

  // console.log(eventItem, eventDate)

  // ?..items.filter((ev) => ev.slugId === eventId)

  return { leagueItem, isLoading, isError }
}
