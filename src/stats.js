import React from 'react'
import styled from 'styled-components'

const labels = {
    leader: { ru: 'Лидер:', en: 'Leader: ' },
    strength: { ru: 'Сила:', en: 'Strength: ' },
    stealth: { ru: 'Скрытность:', en: 'Stealth' },
}

const Stats = ({ stats, lang }) => {
    console.log(stats)
    return (
        <Container>
            { Object.keys(labels).map(l => (
                <React.Fragment key={l}>
                    <Label>{labels[l][lang]}</Label>
                    <Stat><Value value={stats[l]} /></Stat>
                </React.Fragment>
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    flex-grow: 1;
`

const Label = styled.div`
    font-size: 14px;
    font-weight: bolder;
    display: flex;
    align-items: center;
`

const Stat = styled.div`
    font-size: 16px;
    display: flex;
    align-items: center;
`

const Value = styled.div`
    height: 10px;
    border-radius: 5px;
    background: lightgreen;
    width: calc(${p => p.value / 10 * 100}% + 10px);
`

export default Stats