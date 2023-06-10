import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 15vh;
  width: 90vw;
`
export const WebsiteLogo = styled.img`
  max-width: 150px;
  height: 40px;
`
export const LogoutButton = styled.button`
  border: 1px #f8fafc solid;
  color: #f8fafc;
  background-color: transparent;
  height: 25px;
  width: 90px;
  text-align: center;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
`

export const HomeHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  font-family: 'Roboto';
  line-height: 1.4;
  color: #ffffff;
`
export const CardImage = styled.img`
  width: 40%;
`
