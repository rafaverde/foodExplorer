import { Container } from "./styles"

export function IconButton({ icon: Icon, title, isFilled = false, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon weight={isFilled ? "fill" : "regular"} />}
      {title}
    </Container>
  )
}
