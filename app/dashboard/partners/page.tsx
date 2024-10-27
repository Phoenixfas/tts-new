import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'
import EditBlogModal from './EditBlogModal'

export default function Startups() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"partners"} />
        <EditBlogModal />
        <TopSection path={"partners"} title={"Media Partners"} desc={"List of all Media Partners"} />
        <RegistererPaginator path={"partners"} />
    </div>
  )
}
