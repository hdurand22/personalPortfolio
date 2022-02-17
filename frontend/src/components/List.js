import React, { useState } from 'react'
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const List = () => {
    const fetchMoreListItems = () => {
        setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
        setIsFetching(false);
    }
    
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);


    return (
        <>
            {listItems.map(listItem => <div>{listItem}</div>)}
            {isFetching && 'Fetching more list items...'}
        </>
    )
}

export default List