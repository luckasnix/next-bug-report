import Date from '../../components/date'
import { getPostData } from '../../lib/posts'

export async function getServerSideProps({ params }) {
  const { slug } = params
  const pageData = await getPostData(slug)
  return {
    props: {
      pageData
    }
  }
}

export default function Article({ pageData }) {
  return (
    <>
      <h1>{pageData.title}</h1>
      <Date dateString={pageData.date}/>
      <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }}/>
    </>
  )
}
