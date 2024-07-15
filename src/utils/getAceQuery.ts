export async function getAceQuery(query: string) {
  const {
    VITE_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    VITE_PUBLIC_CONTENTFUL_SPACE_ID,
    VITE_CONTENFUL_ENVIRONMENT,
  } = import.meta.env

  if (
    !VITE_PUBLIC_CONTENTFUL_SPACE_ID ||
    !VITE_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
    !VITE_CONTENFUL_ENVIRONMENT
  ) {
    return Promise.reject()
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${VITE_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENFUL_ENVIRONMENT}?&query=${query.replace(/\s\s+/g, ' ')}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

        Authorization: `Bearer ${VITE_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  )

  if (!response.ok) {
    return Promise.reject('No response')
  }

  const data = await response.json()
  return data
}
