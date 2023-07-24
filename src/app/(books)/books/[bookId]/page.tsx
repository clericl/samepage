import Image from "next/image"
import { Metadata } from "next"
import { REVALIDATE_TIMEOUT } from "@/utils/constants"

export function constructUrl(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_BASE_URL
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY

  const fields = 'id,selfLink,volumeInfo(title,subtitle,authors,publishedDate,description,pageCount,categories,averageRating,ratingsCount,imageLinks)'

  const constructedUrl = baseUrl + 'volumes/' + id + '?key=' + apiKey + '&fields=' + fields
  return constructedUrl
}

async function getBook(id: string) {
  const fetchUrl = constructUrl(id)
  const res = await fetch(fetchUrl, { next: { revalidate: REVALIDATE_TIMEOUT }})
  const data = await res.json()
  return data
}

export async function generateMetadata({
  params: { bookId },
} : {
  params: { bookId: string }
}): Promise<Metadata> {
  const bookData = await getBook(bookId)
  const title = bookData.volumeInfo.title
  

  return {
    title: `SamePage | ${title}`,
    description: `Find your reading fellows and start on ${title} together, today!`
  }
}

export default async function BookDetail({
  params: { bookId },
} : {
  params: { bookId: string }
}) {
  const bookData = await getBook(bookId)
  const displayImageUrl = bookData.volumeInfo.imageLinks.medium
  const displayImageAlt = bookData.volumeInfo.title

  return (
    <div>
      <span>
        this is a book page!!!
      </span>
      <p>
        {JSON.stringify(bookData, null, 2)}
      </p>
      <div className="relative w-[500px] h-[500px]">
        <Image src={displayImageUrl} alt={displayImageAlt} width={500} height={500} />
      </div>
    </div>
  )
}
