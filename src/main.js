import React from 'react'
import styled from 'styled-components'

const Main = () => (
    <Container>
        <Title>
            Wargochi token holders & details
        </Title>
    </Container>
)

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