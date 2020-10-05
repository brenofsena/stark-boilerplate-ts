import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/presentation/utils/test/helpers'
import { Main } from '@/presentation/pages'

describe('App Component', () => {
  test('Should start correctly', () => {
    renderWithTheme(<Main />)
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
