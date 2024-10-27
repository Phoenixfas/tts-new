import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'

export default function Startups() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"sponsors"} />
        <TopSection path={"sponsors"} title={"Sponsors"} desc={"List of all Sponsors Registered"} />
        <RegistererPaginator path={"sponsors"} />
    </div>
  )
}
