import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  { label: 'Grocery', icon: '🛒' },
  { label: 'Chinese', icon: '🥡' },
  { label: 'Bubble Tea', icon: '🥃' },
  { label: 'Pizza', icon: '🍕' },
  { label: 'Healthy', icon: '🥗' },
  { label: 'Desserts', icon: '🍪' },
  { label: 'Burgers', icon: '🍔' },
  { label: 'Bakery', icon: '🥐' },
  { label: 'Indian', icon: '🍛' },
  { label: 'Soup', icon: '🥣' },
  { label: 'Sandwich', icon: '🥪' },
  { label: 'Thai', icon: '🍜' },
  { label: 'Fast Food', icon: '🍟' },
  { label: 'Korean', icon: '🍲' },
  { label: 'Sushi', icon: '🍣' },
  { label: 'Breakfast', icon: '🥞' },
  { label: 'Coffee', icon: '☕' },
];

export default function CategoryFilterBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === 'left' ? -el.clientWidth / 1.5 : el.clientWidth / 1.5;
      el.scrollTo({ left: el.scrollLeft + scrollAmount, behavior: 'smooth' });
      // Delay update to let smooth scroll finish
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <div className="relative bg-white py-3 mt-8">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 shadow-md rounded-full"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden  space-x-8 px-8 "
      >
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center min-w-max">
            <span className="text-3xl">{cat.icon}</span>
            <span className="text-black mt-1">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 shadow-md rounded-full"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
