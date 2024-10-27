import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'

export default function Startups() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"booth-vendor"} />
        <TopSection path={"booth-vendor"} title={"Exhibitors"} desc={"List of all Exhibitors Registered"} />
        <RegistererPaginator path={"exhibitors"} />
    </div>
  )
}
