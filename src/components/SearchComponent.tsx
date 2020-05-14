import * as React from 'react';
import {useStores} from "../hooks/useStores";
import {FormGroup} from "./FormGroup";

export function SearchComponent() {
    const { moviesStore } = useStores();

    return <FormGroup>
        <label>Search</label>
        <input
            type={'text'}
            onChange={e => moviesStore.search(e.currentTarget.value)} />
    </FormGroup>
}