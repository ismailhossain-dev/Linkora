import React, { Suspense } from 'react'
import PremiumNewsList from '../_components/news/PremiumNewsList'
import NewsSkeleton from '../_components/news/NewsSkelaton'

const PremiumPage = () => {
  return (
    <div>
      <Suspense fallback={<NewsSkeleton/>}>
        <PremiumNewsList/>
      </Suspense>
    </div>
  )
}

export default PremiumPage