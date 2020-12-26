export const style = {
    container: (props = {}) => {
        if (!props || (!props.width || !props.height)) {
            return {};
        }

        return {
            width: props.width,
            position: 'relative',
            height: props.height,
            margin:'0 auto',
        };
    },
    listWrapper: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'auto',
        position: 'absolute',
        height: "100%"
    },
    list: height => ({
        height,
        position: 'relative'
    }),
    item: (index, height) => ({
        height,
        left: 0,
        right: 0,
        top: height * index,
        position: 'absolute',
        color: "#000"
    })
};
