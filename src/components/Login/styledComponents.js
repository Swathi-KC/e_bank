import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 95%;
  width: 75%;
  background-color: #e0eefe;
  background-size: cover;
  border: none;
  border-radius: 35px;
`
export const LoginImage = styled.img`
  height: 100%;
  width: 70%;
  padding: 10px;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  padding: 10px;
  width: 30%;
  min-height: 100%;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
`
export const FormContainer = styled.form`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`

export const LoginHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  font-family: 'Roboto';
  line-height: 1.4;
  color: #183b56;
`
export const InputLabel = styled.label`
  font-size: 16px;
  text-align: left;
  align-self: flex-start;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1;
  color: #5a7184;
`
export const InputElement = styled.input`
  background-color: transparent;
  color: #5a7184;
  border: 1px #c3cad9 solid;
  border-radius: 8px;
  width: 90%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  font-size: 11px;
`

export const LoginButton = styled.button`
  background-color: #1565d8;
  color: #f8fafc;
  text-align: center;
  font-size: 16px;
  width: 90%;
  border: none;
  border-radius: 8px;
  height: 40px;
  margin-top: 10%;
  cursor: pointer;
  outline: none;
  font-weight: 500;
`
export const ErrorMessage = styled.p`
  font-size: 11px;
  font-weight: 400;
  align-self: center;
  font-family: 'Roboto';
  line-height: 1;
  color: #ff0b37;
  text-align: center;
  margin-left: auto;
  margin-top: 10px;
`
