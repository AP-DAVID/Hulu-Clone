import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Header from '@/components/Header';
import requests from '@/utils/requests';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home Page', () => {
  test('Renders the Home page without crashing', () => {
    render(<Header />);
  });
});
