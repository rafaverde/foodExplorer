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
      {Icon && <Icon />}
      {LoadingIcon && <Icon />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
