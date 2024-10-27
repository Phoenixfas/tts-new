'use client'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { AiFillFileAdd } from 'react-icons/ai'
import { setSortBlogsByNewest } from '../../../redux/slices/sortBlogsSlice'
import { toggleBlogAddModal } from '../../../redux/slices/blogAddModalToggleSlice'
import RegSearch from './RegSearch'

export default function TopSection({path, title, desc}: any) {
    const dispatch = useAppDispatch()
    // const sortBlogsByNewest = useAppSelector(state => state.sortBlogs.value)
    
  return (
    <div className='w-full h-20 mb-10 flex items-center justify-between top-section'>
        <div>
            <h1 className='text-3xl text-black font-bold mb-3'>{title}</h1>
            <p className='text-sm text-gray-700'>{desc}</p>
        </div>

        <div className='flex-1 flex items-center justify-end gap-10 top-section-r'>
            <RegSearch path={path} />
            {/* <div className='px-4 py-2 h-[40px] bg-[#fff] text-[#0b5b05] cursor-pointer rounded-full'>
                <select name="sort" id="sort" className='border-none outline-none text-sm bg-transparent' onChange={(e) => dispatch(setSortBlogsByNewest(e.target.value === "newest" ? true : false))}>
                    <option value="newest" >Newest</option>
                    <option value="oldest" >Oldest</option>
                </select>
            </div> */}
        </div>
    </div>
  )
}
