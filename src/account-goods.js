import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Metadata from './metadata'
import LanguageControl from './language-control'

const AccountGoods = ({ account }) => {
    const [dgoods, setDgoods] = useState([])
    const [lang, setLang] = useState('en')

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch(`/dgoods/show?account=${account}`)
            const dgoods = await resp.json()
            setDgoods(dgoods)
        }

        getData()
    }, [account])

    if (account == "") return null

    if (dgoods.length == 0) {
        return <Container>Loading...</Container>
    }

    return (
        <Container>
            <Title>Trolls belonging to this account: </Title>
            <LanguageControl lang={lang} onChange={setLang} />
            <Wrapper>
                {
                    dgoods.map(d => <Metadata lang={lang} key={d.serial_number} metadataUri={d.metadata_uri} serial={d.serial_number} />)
                }
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 20px 0;

`

const Title = styled.h3``;

const Wrapper = styled.div`
    margin: 10px 0;
    display: flex;
`

export default AccountGoods