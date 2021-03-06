import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    App: {
        maxWidth: '400px',
        position: 'relative',
        height: '100vh',
        boxShadow: '0px 2px 1px - 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        margin: '0 auto'
    },
}));