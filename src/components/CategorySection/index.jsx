import { Container } from "./style"

export function CategorySection({ title, ...rest }) {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  )
}
