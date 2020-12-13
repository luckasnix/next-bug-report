import Link from 'next/link'
import Date from '../../components/date'
import { getSortedPostsData } from '../../lib/posts'

export function getServerSideProps({ query }) {
  const { page } = query
  console.log(`The current page is: ${page}`)
  const allPostsData = getSortedPostsData()
  return {
    props: {
      page,
      allPostsData
    }
  }
}

export default function Articles({ page, allPostsData }) {
  return (
    <>
      <h1>Articles</h1>
      <p>The current page is: {page}</p>
      <ul>
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug}>
            <h2>{title}</h2>
            <Date dateString={date}/>
            <Link href='/articles/[slug]' as={`/articles/${slug}`}>
              <button>Read</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
