import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import SolarSystem from '../components/Realisation';

// Mock Next.js Link
jest.mock('next/link', () => {
  return function Link({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href} data-testid="next-link">{children}</a>;
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => {
  const MotionComponent = ({ children, ...props }: any) => {
    return (
      <div data-testid="motion-div" {...props}>
        {children}
      </div>
    );
  };

  return {
    motion: {
      div: MotionComponent,
      circle: MotionComponent,
    },
    AnimatePresence: ({ children }: any) => children,
  };
});

// Mock RealisationPortrait
jest.mock('../components/RealisationPortrait', () => {
  return function RealisationPortrait() {
    return <div data-testid="portrait-mode">Portrait Mode</div>;
  };
});

// Mock Star
jest.mock('../components/Star', () => ({
  Star: () => <div data-testid="star">Star</div>,
}));

describe('SolarSystem Component', () => {
  const setWindowDimensions = (width: number, height: number) => {
    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
      Object.defineProperty(window, 'innerHeight', { value: height, writable: true });
      window.dispatchEvent(new Event('resize'));
    });
  };

  beforeEach(() => {
    setWindowDimensions(1024, 768);
  });

  it('switches to portrait mode on small screens', () => {
    setWindowDimensions(500, 800);
    render(<SolarSystem />);
    expect(screen.getByTestId('portrait-mode')).toBeInTheDocument();
  });

  it('displays in landscape mode on large screens', () => {
    render(<SolarSystem />);
    expect(screen.queryByTestId('portrait-mode')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('motion-div').length).toBeGreaterThan(0);
  });

  it('renders stars', () => {
    render(<SolarSystem />);
    const stars = screen.getAllByTestId('star');
    expect(stars.length).toBeGreaterThan(0);
  });

  it('handles window resize events', () => {
    const { unmount } = render(<SolarSystem />);
    
    // Test passage en mode portrait
    act(() => {
      setWindowDimensions(500, 800);
    });
    expect(screen.getByTestId('portrait-mode')).toBeInTheDocument();

    // Test retour en mode paysage
    act(() => {
      setWindowDimensions(1024, 768);
    });
    expect(screen.queryByTestId('portrait-mode')).not.toBeInTheDocument();

    // Test cleanup
    const resizeSpy = jest.spyOn(window, 'removeEventListener');
    unmount();
    expect(resizeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
