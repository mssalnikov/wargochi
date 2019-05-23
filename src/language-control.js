import React from 'react'
import styled from 'styled-components'

const LanguageControl = ({ lang, onChange }) => (
    <Container>
        <Lang active={lang == 'en'} onClick={() => onChange('en')}>EN</Lang>
        <Lang active={lang == 'ru'} onClick={() => onChange('ru')}>RU</Lang>
    </Container>
)

const Container = styled.div`
    display: flex;

    margin: 10px 0;
`

const Lang = styled.div`
    width: 50px;
    height: 50px;

    background: ${p => p.active ? 'lightgreen' : 'white'};
    cursor: pointer;

    border-radius: 10px;
    border: 1px solid black;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 20px 0 0;
`

export default LanguageControl