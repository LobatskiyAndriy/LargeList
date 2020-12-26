import { useRef, useState } from 'react';

export default function useReferredState(initialState) {
    const [state, setState] = useState(initialState);
    const reference = useRef(state);

    const setReferredState = value => {
        reference.current = value;
        setState(value);
    }

    return [reference, setReferredState];

}