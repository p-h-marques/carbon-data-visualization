import React, { useContext, useEffect } from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'
import Start from '../../components/start'

const Main = () => {
    const { state } = useContext(Context)

    useEffect(() => {
        console.log(state)
    }, [state])

    return <MainStyles><Start /></MainStyles>
}

export default Main