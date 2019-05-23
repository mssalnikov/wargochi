import React, { useState } from 'react'
import styled from 'styled-components'
import Select from './select'
import AccountGoods from './account-goods'

// todo add state manager so Main doesn't re-render on account change
const Main = () => {
    const [account, setAccount] = useState("")

    return (
        <Container>
            <Title>
                Wargochi token holders & details
            </Title>
            <Select onChange={e => setAccount(e.target.value)}/>
            <AccountGoods account={account} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100%;

    padding: 50px;
`

const Title = styled.h2`
`

export default Main