import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundText,
  NotFoundSubText,
} from './styledComponents'

const NotFound = () => (
  <>
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <NotFoundText>Page Not Found</NotFoundText>
      <NotFoundSubText>
        We are sorry, the page you requested could not be found.
      </NotFoundSubText>
    </NotFoundContainer>
  </>
)

export default NotFound
