import { Container } from "./styles"

export function Button({
  title,
  isDark = false,
  loading = false,
  icon: Icon,
  loadingIcon: LoadingIcon,
  ...rest
}) {
  return (
    <Container
      type="button"
      $isdark={isDark.toString()}
      disabled={loading}
      {...rest}
    >
      {!loading ? Icon && <Icon /> : null}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
