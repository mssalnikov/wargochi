import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Stats from './stats'

const Metadata = ({ lang, serial, metadataUri }) => {
    const [metadata, setMetadata] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch(`/${metadataUri}/${serial}`)
            const data = await resp.json()
            setMetadata(data)
        }

        getData()
    }, [serial, metadataUri])

    if (!metadata) {
        return <Container>Loading...</Container>
    }

    const translated = metadata.find(m => m.lang == lang)
    
    return <Container>
        <Wrapper>
            <Header>
                <Image bg={translated.imageSmall} />
                <Personal>
                    <Name>{translated.name}</Name>
                    <Description>{translated.description}</Description>
                </Personal>
            </Header>
            <Stats lang={lang} stats={translated.details}/>
        </Wrapper>
    </Container>
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    margin: 20px 0;
    margin-right: 20px;
    border-radius: 10px;
    border: 1px solid black;
    width: 350px;
    height: 300px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    display: flex;
    margin: 10px 0;
`

const Personal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    width: 200px;
`

const Name = styled.div`
    font-size: 18px;
`

const Description = styled.div`
    font-size: 14px;
    color: gray;
`

const Image = styled.div`
    width: 100px;
    height: 100px;

    background: url(${p => p.bg});
    background-size: cover;
    background-position: 50% 50%;
`

export default Metadata