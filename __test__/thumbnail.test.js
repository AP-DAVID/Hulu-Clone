import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Thumbnail from '@/components/Thumbnail';

describe('Thumbnail', () => {
  const sampleResult = {
    id: 1,
    backdrop_path: '/path-to-backdrop-image.jpg',
    poster_path: '/path-to-poster-image.jpg',
    overview: 'Sample overview',
    title: 'Sample Title',
    original_name: 'Sample Original Name',
    media_type: 'movie',
    release_date: '2022-01-01',
    first_air_date: '2022-01-01',
    vote_count: 1000,
  };

  it('renders without errors', () => {
    render(<Thumbnail result={sampleResult} />);
    // No assertions needed, the test will fail if there are any rendering errors
  });

  it('displays the title correctly', () => {
    render(<Thumbnail result={sampleResult} />);
    const titleElement = screen.getByText(/(Sample Title|Sample Original Name)/);
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the overview correctly', () => {
    render(<Thumbnail result={sampleResult} />);
    const overviewElement = screen.getByText('Sample overview');
    expect(overviewElement).toBeInTheDocument();
  });


});
