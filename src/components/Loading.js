import Spinner from '../img/Spinner.gif'
import styled from 'styled-components'
export const Loading = () => {
  return (
    <Loader className='Spinner'>
      <img src={Spinner} alt='loading_spinner' />
    </Loader>
  )
}

const Loader = styled.div`
  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
  }
`
