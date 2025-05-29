import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="group w-[46px] h-[46px] border border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-all duration-200"
  >
    <FontAwesomeIcon
      icon={direction === 'left' ? faArrowLeft : faArrowRight}
      className="text-[var(--primary-color)] group-hover:text-white transition-all duration-200"
    />
  </button>
);
