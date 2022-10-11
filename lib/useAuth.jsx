import {useEffect, useState} from 'react'
import useSWR from 'swr'
import request from './request'
import {useRouter} from 'next/router'

export default function useAuth({middleware} = {}) {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user || error) {
            setIsLoading(false);
        }

        if (middleware == 'guest' && user) router.push('/')
        if (middleware == 'auth' && !user && error) router.push('/login')
    })

    const {data: user, error, mutate} = useSWR('/user',
        () => request.get('/user').then(response => response.data.data)
    )

    const csrf = () => request.get('/sanctum/csrf-cookie')

    const login = async ({setErrors, ...props}) => {
        setErrors([])
        await csrf()
        request
            .post('/login', props)
            .then(() => mutate() && router.push('/'))
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const logout = async () => {
        await request.post('/logout')

        mutate(null)

        router.push('/login')
    }

    return {
        user,
        csrf,
        login,
        logout,
        isLoading
    }
}