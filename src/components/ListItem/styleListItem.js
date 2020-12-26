import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((makeStyles) => ({
    root: {
        '& .MuiTypography-body1': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '200px',
            lineHeight: 1,
        },
        '&:hover': {
        },
    },
    infoUser: {
        display: 'flex',
        alignItems: 'Center',
        gap: '10px'
    },
    time: {
        color: '#9690ea',

    },
    distantion: {
        color: '#4c92e2'
    },
    separator: {
        color: '#4c92e2'
    },
    subTitle: {
        color: '#acafb2'
    },
    activeElement: {

        '& $listNumberTest': {
            color: '#9690ea',
            fontWeight: "bold",
            transition: '.3s'
        },
        '& $avataBox': {
            borderColor: '#9690ea',
            transition: '.3s',
        }

    },

    listNumberTest: {
        marginRight: 5,
        fontSize: 16,
        fontWeight: "bold",
        transition: '.3s'
    },
    awatarWrap: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',

    },
    avataBox: {
        borderRadius: '50%',
        padding: '2px',
        border: '2px solid transparent',
        transition: '.3s',
        display: 'flex',
    }

}));