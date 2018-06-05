import React from 'react'
import styled from 'styled-components'
import PackagesContainer from './PackagesContainer'

export default function Packages() {
    return (
        <OuterPackageDiv>
            <PackH1>PLANS TO SUIT EVERYONE</PackH1>
            <PackagesSectionContainer>
                <PackagesContainer version="0"/>
                <PackageDivider />
                <PackagesContainer version="1"/>
                <PackageDivider />
                <PackagesContainer version="2"/>
            </PackagesSectionContainer>
        </OuterPackageDiv>
    )
}

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const OuterPackageDiv = styled.div`
    background: #ED6368;
    width: auto;
    box-sizing: border-box;
    padding: 4.4rem 0 5rem 0;
    color: white;
    @media(min-width: 1024px){
        height: 34.5rem;
    }
    @media(min-width: 1240px){
        padding: 7.3rem 0 5rem 0;
        height: 44.3rem;
    }
`
const PackagesSectionContainer = styled.div`
    @media(min-width: 1024px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin: auto;
        margin-top: 3.4rem;
        position:  relative;
        z-index: 5;
    }
    @media(min-width: 1240px){
        margin-top: 5.5rem;
    }
`
const PackH1 = styled.h1`
    font-size: .75rem;
`
const PackageDivider = styled.div`
    margin: 4rem 3rem 2.5rem 3rem;
    height:2px;
    background: white;
    opacity: .1;
    @media(min-width: 768px){
        width: 400px;
        margin: 4rem auto 2.5rem auto;
    }
    @media(min-width: 1024px){
        height: 290px;
        width: 2px;
        margin: 0 2rem;
    }
`