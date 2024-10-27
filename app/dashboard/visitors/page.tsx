import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'

export default function Startups() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"visitors"} />
        <TopSection path={"visitors"} title={"Visitors"} desc={"List of all Visitors Registered"} />
        <RegistererPaginator path={"visitors"} />
    </div>
  )
}
