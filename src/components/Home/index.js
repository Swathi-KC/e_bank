import Cookies from 'js-cookie'

import {
  HomeMainContainer,
  HeaderCont,
  WebsiteLogo,
  LogoutButton,
  HomeContainer,
  HomeHeading,
  CardImage,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <>
      <HomeMainContainer>
        <HeaderCont>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <LogoutButton type="button" onClick={onClickLogout}>
            Logout
          </LogoutButton>
        </HeaderCont>
        <HomeContainer>
          <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
          <CardImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </HomeContainer>
      </HomeMainContainer>
    </>
  )
}

export default Home
