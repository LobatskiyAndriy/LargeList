import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReferredState from '../../utils/useReferredState';
import LargeList from '../LargeList/LargeList';
import { usersList } from './dataList';
import './styleList.js'
import { addUsers } from '../../redax/actions/users';
import { useStyles } from './styleList';



function List() {

    const classes = useStyles();

    const dispatch = useDispatch()

    const [maxWidthNumber, setMaxWidth] = useReferredState(0);
    const [isFetching, setIsFetching] = useReferredState(false);

    const fetchMoreListItems = () => {
        setIsFetching(false)
        FetchData()
    }

    const FetchData = async () => {
        setTimeout(() => {
            dispatch(addUsers(usersList))
        }, 3000)
    }

    useEffect(() => {
        if (!isFetching.current) return;
        fetchMoreListItems();
    }, [isFetching.current])

    useEffect(() => {
        dispatch(addUsers(usersList))
    }, [])

    return (

        <LargeList
            className={classes.App}
            rowHeight={92}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
            maxWidthNumber={maxWidthNumber}
            setMaxWidth={setMaxWidth}
        >
        </LargeList>

    )
}

export default List
