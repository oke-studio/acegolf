import { useGetLeagues } from '../../../hooks/UseGetLeagues/useGetLeagues.hook'

// import {
//   EventsCalenderItem,
//   CalendarItemContainerStyleTypeMap,
// } from '../types/CalendarSection.types'

export function useGetLeaguesParsed() {
  const { leaguesData, isError, isLoading } = useGetLeagues()

  const events = leaguesData?.reduce(
    (acc, curr) => {
      const {
        // eventDescription,
        leagueTitle,
        leaguePoster,
        leagueType,
        slugId,
        startDateTime,
        endDateTime,
      } = curr

      const startDate = new Date(startDateTime)
      const endDate = new Date(endDateTime)

      const dateRange: Array<string> = []
      for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        dateRange.push(new Date(d).toISOString())
      }

      dateRange.forEach((d) => {
        const date = d.split('T')[0]
        const start = startDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })

        const end = endDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })

        if (acc[date]) {
          acc[date].push({
            description: `${start} - ${end}`,
            title: leagueTitle,
            type: leagueType,
            id: slugId,
            imgSrc: leaguePoster?.url,
          })
        } else {
          acc[date] = [
            {
              description: `${start} - ${end}`,
              title: leagueTitle,
              type: leagueType,
              id: slugId,
              imgSrc: leaguePoster?.url,
            },
          ]
        }
      })

      return acc
    },
    // {} as { [k: string]: EventsCalenderItem[] }
  )

  return {
    events,
    isError,
    isLoading,
  }
}
