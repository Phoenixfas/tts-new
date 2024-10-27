'use client'
import React,{useEffect, useState} from 'react'
import ReactPaginate from "react-paginate";
import SubscribersList from './SubscribersList'
// import { GET_SUBSCRIBERS } from '../../graphql/queries/subscriberQueries';
// import { useQuery } from '@apollo/client';
import SubscribersLoading from './SubscribersLoading';
// import subscribers from '../../data/subscribers';
import useFetch from '../../../hooks/useFetch';

interface BlogPaginatorProps {
    d: any
}

export default function NewsletterPaginator() {
    const { loading, error, data } = useFetch('subscribers');

    if (loading) return <SubscribersLoading />;
    if (error) return <p>Error :(</p>;
    
    return (
        // <Paginator d={data.subscribers} />
        <Paginator d={data} />
    )
}


const Paginator = ({d}: BlogPaginatorProps) => {
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
          <SubscribersList d={currentItems} />
  
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