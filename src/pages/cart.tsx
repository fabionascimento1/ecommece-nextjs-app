import Container from 'components/Container'
import Heading from 'components/Heading'
import Cart from 'components/Cart'

function PageCart() {
  return (
    <Container>
      <Heading reverseColor>Carrinho de compras</Heading>
      <Cart />
    </Container>
  )
}

export default PageCart
