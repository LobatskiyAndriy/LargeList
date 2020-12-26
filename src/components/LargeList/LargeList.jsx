import React from 'react'

import { ListItem } from '../ListItem/ListItem'
import { nanoid } from 'nanoid';
import { style } from './styleLargeList';
import { withLargeList } from './withLargeList';
import { LinearProgress } from '@material-ui/core';

function LargeList({ ...props }) {


    const { getDefaultHeightWidth, checkIfVisible, listWrapper, usersList, heightList, rowHeight, className, ifLoadData } = props;


    return (

        <div
            style={style.container(getDefaultHeightWidth())}
            className={className}

        >
            <div
                style={style.listWrapper}
                ref={listWrapper}
            >
                <div

                    style={style.list(heightList.current)}
                >
                    {usersList.map(
                        (item, index) => {
                            const styleList = style.item(index, rowHeight);
                          

                            return checkIfVisible(index) &&


                                (
                                    <div style={styleList} key={nanoid()} >
                                        {(<ListItem item={item} index={index}></ListItem>)}
                                    </div>
                                )

                        }
                    )}
                </div>
                    {!ifLoadData.current && (<LinearProgress   />)}
            </div>
        </div>
    )
}

export default withLargeList(LargeList);
