import React from 'react'
import TopSection from './TopSection'
import NewsletterPaginator from './NewsletterPaginator'
import EditBlogModal from './EditBlogModal'

export default function Newsletter() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <EditBlogModal />
        <TopSection />
        <NewsletterPaginator />
    </div>
  )
}
