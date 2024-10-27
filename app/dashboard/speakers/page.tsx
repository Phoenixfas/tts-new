import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'
import EditBlogModal from './EditBlogModal'

export default function Startups() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"speakers"} />
        <EditBlogModal />
        <TopSection path={"speakers"} title={"Speakers"} desc={"List of all Speakers"} />
        <RegistererPaginator path={"speakers"} />
    </div>
  )
}
