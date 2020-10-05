import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/presentation/utils/test/helpers'
import { Spinner } from '@/presentation/components'

describe('Spinner Component', () => {
  test('Should render with 4 divs', () => {
    renderWithTheme(<Spinner />)
    expect(screen.getByTestId('spinner').childElementCount).toBe(4)
  })
})
