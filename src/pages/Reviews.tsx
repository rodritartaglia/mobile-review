import { useState } from 'react'
import ReviewBlock from '../components/ReviewBlock'
import reviews from '../data/reviews.json'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

function Reviews() {
  const [reviewPerPage] = useState(3)
  // const [reviewTotal, setReviewTotal] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const indexLastReview = currentPage * reviewPerPage
  const indexFirstReview = indexLastReview - reviewPerPage
  const currentReviews = reviews.slice(indexFirstReview, indexLastReview)
  const numberOfPages = []


  for (let index = 0; index < Math.ceil(reviews.length / reviewPerPage); index++) {
    numberOfPages.push(index + 1)
  }


  return (
    <div className='divide-y-2 divide-gray-600 flex flex-col gap-4 mt-4 mx-4'>
      {currentReviews.map(review =>
        <ReviewBlock
          name={review.name}
          title={review.title}
          description={review.description}
          recommend={review.recommend}
          stars={review.stars}
          valueProduct={review.valueProduct}
          easyToUse={review.easyToUse}
          camera={review.camera}
          performance={review.performance}
          date={review.date}
        />
      )}
      <ul className='flex gap-2 m-auto text-[#2CCF89] font-bold text-3xl'>
        <IconChevronLeft />
        {numberOfPages.map(page =>
          <li onClick={() => setCurrentPage(page)}>{page}</li>
        )}
        <IconChevronRight />
      </ul>
    </div>
  )
}

export default Reviews