import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';

describe('Portfolio Components', () => {
  test('renders header with navigation', () => {
    render(<Header />);

    expect(screen.getByText('Mo.')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('HIRE ME')).toBeInTheDocument();
  });

  test('renders hero section with main heading', () => {
    render(<HeroSection />);

    expect(screen.getByText('I AM A')).toBeInTheDocument();
    expect(screen.getByText('FREELANCE')).toBeInTheDocument();
    expect(screen.getByText('FROM')).toBeInTheDocument();
    expect(screen.getByText('SAN FRANCISCO')).toBeInTheDocument();
  });

  test('renders expertise section with all expertise areas', () => {
    render(<ExpertiseSection />);

    expect(screen.getByText('Expertise')).toBeInTheDocument();
    expect(screen.getByText('Branding')).toBeInTheDocument();
    expect(screen.getByText('UI Design')).toBeInTheDocument();
    expect(screen.getByText('UX Design')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
  });
});
