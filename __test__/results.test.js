import { render, screen } from '@testing-library/react';
import Results from '@/components/Results';
import '@testing-library/jest-dom';
import Thumbnail from '@/components/Thumbnail';

describe('Results', () => {
  it('renders without errors', () => {
    render(<Results results={[]} />);
    // No assertions needed, the test will fail if there are any rendering errors
  });

  it('renders all results as Thumbnail components with unique keys', () => {
    const sampleResults = [
      { id: 1, title: 'Result 1' },
      { id: 2, title: 'Result 2' },
      { id: 3, title: 'Result 3' },
    ];

    render(<Results results={sampleResults} />);

    sampleResults.forEach((result) => {
      const thumbnailComponent = screen.queryByTestId(`thumbnail-${result.id}`);
      expect(thumbnailComponent).toBeInTheDocument();
    });
  });
     it('assigns unique keys to each Thumbnail component', () => {
    const sampleResults = [
      { id: 1, title: 'Result 1' },
      { id: 2, title: 'Result 2' },
      { id: 3, title: 'Result 3' },
    ];

    render(<Results results={sampleResults} />);

    const thumbnailComponents = screen.getAllByRole('thumbnail');
    thumbnailComponents.forEach((component, index) => {
    expect(component).toHaveAttribute('data-testid', `thumbnail-${sampleResults[index].id}`);
    });
  });
});
