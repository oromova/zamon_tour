
const GenericButton = ({label, href}) => {
  return (
    <div className='flex items-center justify-center w-[128px] h-[47px] bg-[var(--primary-color)] rounded-full text-center py-[8px] px-[5px] mx-auto'>
      <a href={href} className='block text-white'>
        {label}
      </a>
    </div>
  );
};

export default GenericButton;