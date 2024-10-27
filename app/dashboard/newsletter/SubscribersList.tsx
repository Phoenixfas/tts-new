'use client'
import React from 'react'
import { useAppSelector } from '../../../redux/hooks'
import { FaTrash } from 'react-icons/fa'
import deleteReq from '../../../hooks/deleteReq'
// import { useMutation } from '@apollo/client'
// import { DELETE_SUBSCRIBER } from '../../graphql/mutations/subscriberMutations'
// import { GET_SUBSCRIBERS } from '../../graphql/queries/subscriberQueries'

interface SubscribersListProps {
  d: any
}

export default function SubscribersList({d}: SubscribersListProps) {
  const subs = d
  const sortByNewest = useAppSelector(state => state.sortBlogs.value)
  const token = useAppSelector(state => state.login.admin)

  const deleteSubscriber = async (id: any) => {
    await deleteReq('subscribers', id, token)
    window.location.reload()
  }

  
  // console.log(subs)
  return (
    <div className='min-h-[60vh] gap-5 w-full flex flex-col flex-wrap items-start'>
        {sortByNewest && subs.sort((b1:any, b2:any) => b2.createdAt - b1.createdAt).map((sub: any, index: any) => (
            <div key={index} className='w-full p-3 gap-5 shadow-lg bg-white hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-between'>
                <div className='text-sm text-black font-bold'>{sub.email}</div>
                <button className="p-3 bg-red-500 text-lg w-fit  cursor-pointer text-white rounded-md" onClick={() => {
                    deleteSubscriber(sub._id)
                }} ><FaTrash /></button>
            </div>
        ))}
        {!sortByNewest && subs.sort((b1:any, b2:any) => b1.createdAt - b2.createdAt).map((sub: any, index: any) => (
            <div key={index} className='w-full p-3 gap-5 shadow-lg bg-white hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-between'>
                <div className='text-sm text-black font-bold'>{sub.email}</div>
                <div className="p-3 bg-red-500 text-lg w-fit  cursor-pointer text-white rounded-md" onClick={() => {
                    deleteSubscriber(sub._id)
                }} ><FaTrash /></div>
            </div>
        ))}
        
    </div>
  )
}


