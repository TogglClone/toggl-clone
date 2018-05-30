import React from 'react'
import styled from 'styled-components'
import PackagesContainer from './PackagesContainer'

export default function Packages() {
    return (
        <PackagesSectionContainer>
            <PackH1>PLANS TO SUIT EVERYONE</PackH1>
            <PackagesContainer version="0"/>
            <PackageDivider />
            <PackagesContainer version="1"/>
            <PackageDivider />
            <PackagesContainer version="2"/>
        </PackagesSectionContainer>
    )
}

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const PackagesSectionContainer = styled.div`
    background: #ED6368;
    width: 100%;
    padding: 3rem 0 5rem 0;
    color: white;
`
const PackH1 = styled.h1`
    font-size: .75rem;
`
const PackageDivider = styled.div`
    margin: 4rem 3rem 2.5rem 3rem;
    height:2px;
    background: white;
    opacity: .1;
`