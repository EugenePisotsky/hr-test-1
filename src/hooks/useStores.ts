import { MobXProviderContext } from 'mobx-react'
import {useContext} from "react";
import {MoviesStore} from "../stores/MoviesStore";

export function useStores(): { moviesStore: MoviesStore } {
    const context = useContext(MobXProviderContext)

    return {
        moviesStore: context.moviesStore
    }
}