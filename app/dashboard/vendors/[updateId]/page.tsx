'use client'
import { useParams } from 'next/navigation'
import TopSection from '../TopSection'
import UpdateExhibitor from './UpdateExhibitor'

export default function page() {
  
  return (
    <Update />
  )
}

const Update = () => {
  const params = useParams()
  const updateId = params.updateId

  return (
    <div className=" blog min-h-screen p-16 pt-5">
      <TopSection path={"exhibitors"} title={"Exhibitor"} desc={""} />
      <UpdateExhibitor exhibitorId={updateId} />
    </div>
  )
  }