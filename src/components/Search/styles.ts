import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #f0f0f0;
  color: #323739;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div``

export const Box = styled.a`
  background-color: #323739;
  width: 60rem;
  height: 6rem;
  border-radius: 2rem;
  margin: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  font-size: 1.6rem;
  color: #f0f0f0;
  transition-duration: 500ms;

  &:hover {
    background-color: #f0f0f0;
    color: #323739;
    border: 1px solid #323739;
  }

  @media (max-width: 600px) {
    width: 40rem;
  }

  @media (max-width: 375px) {
    width: 30rem;
  }
`

export const Title = styled.p``

export const Copyright = styled.p`
  font-size: 1.2rem;
  user-select: none;
  color: #323739;
`
