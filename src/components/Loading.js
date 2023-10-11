import styled from '@emotion/styled'
import React from 'react'

const LoadingMessage = styled.div`
margin: auto;
color: green;
text-align: center;
font-size: 30px;
`
const Loading = () => {
  return (
    <LoadingMessage>Loading ...</LoadingMessage>
  )
}

export default Loading