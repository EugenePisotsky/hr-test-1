import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useStores } from '../hooks/useStores'
import { MovieModel } from '../stores/MoviesStore'
import { FormGroup } from './FormGroup'

export function MovieFormComponent() {
    const { register, handleSubmit } = useForm<MovieModel>()
    const { moviesStore } = useStores()
    const onSubmit = (data: MovieModel) => moviesStore.addMovie(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup label={'Movie Name'}>
                <input
                    id={'name-input'}
                    name="name"
                    ref={register({ required: true })}
                />
            </FormGroup>

            <FormGroup label={'Rating'}>
                <input
                    id={'ratings-input'}
                    name="rating"
                    ref={register({ required: true })}
                />
            </FormGroup>

            <FormGroup label={'Duration'}>
                <input
                    id={'duration-input'}
                    name="duration"
                    ref={register({ required: true })}
                />
            </FormGroup>

            <input id={'submit-button'} type={'submit'} />
        </form>
    )
}
