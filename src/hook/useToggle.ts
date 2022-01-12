import {useCallback, useState} from "react";

export const useToggle = (initialState: boolean = false): [boolean, any] => {
    const [toggleState, setState] = useState(initialState);
    const doToggle = useCallback(() => setState((state) => !state), [])
    return [toggleState, doToggle];
}