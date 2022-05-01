import styled from 'styled-components'
import colors from '../../styles/colors'

export const MainStyles = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  color: ${colors.light};

  .visualization {
    min-width: 600px;
    display: flex;
    flex-direction: column;
    row-gap: 32px;

    &__heading {
      padding-bottom: 16px;
      border-bottom: 1px solid ${colors.highlight};
    }

    &__filters {
      display: flex;
      column-gap: 32px;
    }

    &__chart {
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;

      &--error {
        margin-bottom: auto;
      }
    }
  }
`
