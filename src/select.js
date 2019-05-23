import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Select = ({ onChange }) => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch('/dgoods/accounts')
            const accounts = await resp.json()
            setAccounts(["", ...accounts])
        }

        getData()
    }, [])

    if (!accounts || accounts.length == 0) {
        return <Container>Loading...</Container>
    } else {
        return <StyledSelect onChange={onChange}>
            {
                accounts.map(a => <option key={a} value={a}>{a}</option>)
            }
        </StyledSelect>
    }
}

const Container = styled.div`
    margin: 20px 0;
`

const StyledSelect = styled.select`
    margin: 20px 0;
    padding: 0 20px;
    
    width: 300px;
    height: 50px;
    display: flex;
    background: white;
    border-radius: 10px;
    border: 1px solid black;

    &:active, & {
        outline: none;
    }
`

export default Select