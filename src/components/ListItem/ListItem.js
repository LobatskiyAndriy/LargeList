import React, { useEffect,  useState } from 'react';
import { Avatar, Box, ListItem as MiListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Time } from '../Time/Time';
import { useStyles } from './styleListItem';
import { selectUser } from '../../redax/actions/users';
import { Helmet } from '../SVGIcons/Helmet';

import Color from './../List/dataList'

export const ListItem = ({ ...props }) => {
    const { item, index } = props;

    const classes = useStyles();

    const dispatch = useDispatch()
    const { activeUser } = useSelector(({ users }) => users)

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const ifCheckActiveUsers = activeUser.some((item) => item === index);
        if (ifCheckActiveUsers) {
            setIsActive(true)
        }
    }, [activeUser])

    const onClick = (index) => {
        const ifCheckActiveUsers = activeUser.some((item) => item === index);
        if (!ifCheckActiveUsers) {
            let tempArray = activeUser;
            tempArray.push(index);
            dispatch(selectUser(tempArray))
        } else {
            let tempArray = activeUser.filter((item) => item !== index);
            dispatch(selectUser(tempArray))
        }
    }

    return (

        <MiListItem className={isActive ? classes.activeElement : null} >
            <div className={classes.listNumberTest} >{index}</div>
            <ListItemAvatar className={classes.awatarWrap} onClick={() => onClick(index)}>
                <div className={classes.avataBox}>
                    <Avatar>
                        <Helmet fill={Color[item.color]} />
                    </Avatar>
                </div>
            </ListItemAvatar>
            <ListItemText className={classes.root} primary={item.name} secondary={
                <React.Fragment>
                    <Box display="flex" flexDirection="column" >
                        <Box className={classes.infoUser} display="flex" flexDirection="row" gap={5}>
                            <Time className={classes.time} seconds={item.time} />

                            <div className={classes.separator}>|</div>
                            <Typography
                                className={classes.distantion}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                80 км
                            </Typography>
                        </Box>
                        <Typography className={classes.subTitle}>штрафное время 00:00:00</Typography>
                    </Box>
                </React.Fragment>
            } />
        </MiListItem>

    )
}
