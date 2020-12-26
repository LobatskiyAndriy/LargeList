import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import useReferredState from '../../utils/useReferredState';

import { useSelector } from 'react-redux'


export const withLargeList = Component => ({ ...props }) => {


    let initialState = {
        scrollTop: 0,
        visibleHeight: 0,
        overScanCount: 5
    }

    const { setIsFetching, className, rowHeight } = props;

    const { usersList } = useSelector(({ users }) => users)

    const [stateList, setStateList] = useReferredState(initialState);
    const [heightList, setHeightList] = useReferredState(0);
    const [ifLoadData, setIfLoadData] = useReferredState(true);

    const listWrapper = useRef(null);

    const getCount = () => usersList.length;

    const getHeight = () => getCount() * rowHeight;

    const getScrollPosition = () => stateList.current.scrollTop;

    const getVisibleHeight = () => stateList.current.visibleHeight;

    const getOverScanCount = () => initialState.overScanCount;

    const getWrapper = () => ReactDOM.findDOMNode(listWrapper.current);

    const HeightListWraper = () => parseFloat(window.getComputedStyle(getWrapper(), null).getPropertyValue('height'));

    const getDefaultHeightWidth = () => className ? {} : { height: '100%', width: '100%' };

    const setScrollPosition = (event) => {
        setStateList({
            ...stateList.current,
            scrollTop: event.target.scrollTop
        });

        ifLoaderDataList(event);
    };

    const checkIfVisible = index => {
        const elemPosition = index * rowHeight;

        return (
            elemPosition > getScrollPosition() - getOverScanCount() * rowHeight &&
            elemPosition + rowHeight < getScrollPosition() + getVisibleHeight() + getOverScanCount() * rowHeight
        );
    };

    function ifLoaderDataList(event) {
        let tempHeightScroll = event.target.scrollTop + HeightListWraper();

        if (heightList.current > 0 && (tempHeightScroll + getVisibleHeight()) > heightList.current && !!ifLoadData.current) {
            setIfLoadData(false)
            setIsFetching(true)
        }
    }

    useEffect(() => {
        getWrapper().addEventListener(
            'scroll',
            e => {
                setScrollPosition(e)
            },
            true
        );

        setStateList({
            ...stateList.current,
            visibleHeight: HeightListWraper()
        });

    }, [])

    useEffect(() => {
        setHeightList(getHeight())
        setIfLoadData(true)
    }, [usersList])

    return (<Component

        getDefaultHeightWidth={getDefaultHeightWidth}
        checkIfVisible={checkIfVisible}
        listWrapper={listWrapper}
        usersList={usersList}
        heightList={heightList}
        ifLoadData={ifLoadData}

        {...props} />)
}
