import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a tooltip', async () => {
    render(<Home />)

    const trigger = screen.getByText('Nested Content');

    expect(screen.queryByText('Tooltip Content')).not.toBeInTheDocument();

    await userEvent.hover(trigger);

    expect(screen.getByText('Tooltip Content')).toBeInTheDocument();
  })
})
