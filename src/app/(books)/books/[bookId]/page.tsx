async function getBook(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_BASE_URL
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY

  const fields = 'id,selfLink,volumeInfo(title,subtitle,authors,publishedDate,description,pageCount,categories,averageRating,ratingsCount,imageLinks)'

  const res = await fetch(baseUrl + 'volumes/' + id + '?key=' + apiKey + '&fields=' + fields)
  const data = await res.json()
  return data
}

export default async function BookDetail({
  params: { bookId },
} : {
  params: { bookId: string }
}) {
  const bookData = await getBook(bookId)

  return (
    <div>
      <span>
        this is a book page!!!
      </span>
      <p>
        {JSON.stringify(bookData, null, 2)}
      </p>
    </div>
  )
}
