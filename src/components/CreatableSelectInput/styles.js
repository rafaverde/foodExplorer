import CreatableSelect from "react-select/creatable"
import styled from "styled-components"

export const Container = styled(CreatableSelect)`
  width: 100%;
  .Select__control {
    height: 56px;

    text-transform: capitalize;

    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__dropdown-indicator {
    color: ${({ theme }) => theme.COLORS.TEXTS_300};

    &:hover {
      color: ${({ theme }) => theme.COLORS.ACCENT};
    }
  }

  .Select__placeholder {
    color: ${({ theme }) => theme.COLORS.TEXTS_500};
    text-transform: none;
  }

  .Select__input-container,
  .Select__single-value {
    color: ${({ theme }) => theme.COLORS.TEXTS_300};
  }

  .Select__menu {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }

  .Select__option {
    display: flex;
    align-items: center;
    height: 50px;

    text-transform: capitalize;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    &:last-child {
      border: none;
    }

    &:hover {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }
  }
`
