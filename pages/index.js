import Link from 'next/link'

export function getServerSideProps({ locale, locales }) {
  return {
    props: {
      locale,
      locales
    }
  }
}

export default function Home({ locale, locales }) {
  return (
    <>
      <h1>Welcome</h1>
      <h2>The current locale is: {locale}</h2>
      <h2>Choose a language</h2>
      <ul>
        {locales.map((locale) => (
          <Link key={locale} href='/' locale={locale}>
            <li>
              <button>{locale}</button>
            </li>
          </Link>
        ))}
      </ul>
      <h2>Go to articles</h2>
      <Link href={{
        pathname: '/articles',
        query: {
          page: '1'
        }
      }}>
        <button>Articles</button>
      </Link>
    </>
  )
}
