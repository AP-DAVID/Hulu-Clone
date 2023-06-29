import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Nav from '@/components/Nav';
import requests from '@/utils/requests';
import '@testing-library/jest-dom'
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('test_nav_renders_without_crashing', () => {
  test('Renders the Nav page without crashing', () => {
    render(<Nav />);
  });
  

  test("test that all genre in request are displayed in the navigation bar", () => {
        render(<Nav />);
    
        Object.values(requests).forEach(({ title }) => {
        const genreElement = screen.getByText(title);
        expect(genreElement).toBeInTheDocument();
        });
  })

  test("Tests that clicking on a category navigates to the correct URL", () => { 
        const mockPush = jest.fn();
        useRouter.mockImplementation(() => ({
            push: mockPush,
        }));

        render(<Nav />);

        Object.entries(requests).forEach(([key, { title }]) => {
        const genreElement = screen.getByText(title);
        fireEvent.click(genreElement);
        expect(mockPush).toHaveBeenCalledWith(`/?genre=${key}`);
        });
      
  });
    
  test('has correct styling applied', () => {
    render(<Nav />);

    const navElement = screen.getByTestId('nav');
    expect(navElement).toHaveClass('relative'); // Ensure the relative class is applied

    const genreElements = screen.getAllByRole('heading');
    genreElements.forEach((element) => {
      expect(element).toHaveClass('transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500');
    });

    const gradientElement = screen.getByTestId('gradient');
    expect(gradientElement).toHaveClass('absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12');
  });
    
})