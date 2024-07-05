import styled from "styled-components"

export const Container = styled(CreatableSelect)`
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "red",
  }),
  option: (baseStyles, { isFocused, isSelected }) => ({
    ...baseStyles,
    backgroundColor: isFocused ? "lightblue" : "white",
    color: isSelected ? "black" : "inherit",
  }),
`
