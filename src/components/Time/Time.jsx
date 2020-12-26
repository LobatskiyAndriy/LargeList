import { Typography } from '@material-ui/core'
import React from 'react'


interface TimeComponents {
    seconds: number;
    className: string;
}

export const Time = ({ ...props }: TimeComponents): String => {

    const { seconds, className } = props


    const formatTime = (time: number) => {
        return [
            parseInt(time / 60 / 60),
            parseInt(time / 60 % 60),
            parseInt(time % 60)
        ]
            .join(":")
            .replace(/\b(\d)\b/g, "0$1")
    }
    return (
        <Typography
            className={className}
            component="span"
            variant="body2"
            color="textPrimary"
        >
            { formatTime(seconds)}
        </Typography>)
}


