'use client'
import React,{useEffect, useState} from 'react'
import { useAppSelector } from "../../../../redux/hooks"
import ReactPaginate from "react-paginate";
import RegisterersList from './RegisterersList';
import RegisterersLoading from './RegistersLoading';
// import vendors from '../../../data/vendors';


interface RegistererPaginatorProps {
    d: any
}

export default function RegistererPaginator({path}: any) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    const token = useAppSelector((state) => state.login.admin)

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const fetchData = async () => {
            const res = await fetch(`https://dashboard.afriopia.com/api/exhibitors`, config)
            if (!res.ok) {
                setError('Error fetching data')
                setLoading(false)
                return
            }
            const data = await res.json()
            setData(data.data)
            setLoading(false)
        }

        fetchData()
        
    }, [])


    if (loading) return <RegisterersLoading />
    if (error) return <div>{error}</div>
    
    return (
        // set the data where the approved field is set true to the d prop of the Paginator component
        <Paginator d={data.filter((d: any) => d.approved === true)} />
    )
}


const Paginator = ({d}: RegistererPaginatorProps) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    const itemsPerPage = 12;
    const data = d
  
    useEffect(() => {
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
      
  
    }, [itemOffset, itemsPerPage]);
  
  
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
  
  
    return (
      <>
          <RegisterersList d={currentItems} />
  
          <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              // renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              pageClassName={"pagination__page"}
              activeClassName={"pagination__pageActive"}
              previousClassName={"pagination__pagePrev"}
              nextClassName={"pagination__pageNext"}
          />
        </>
      )
  }