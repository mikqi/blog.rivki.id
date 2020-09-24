import { SITE_URL } from './config'

export const generateSEO = ({ description, title, path, cover }) => ({
  title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    // Open Graph
    { hid: 'og:title', property: 'og:title', content: title },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `${SITE_URL}${cover}`,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `${SITE_URL}${path}`,
    },
    // Twitter Card
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
    {
      hid: 'twitter:creator',
      property: 'twitter:creator',
      content: '@__mikqi',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content: `${SITE_URL}${cover}`,
    },
  ],
})
