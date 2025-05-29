
const GenericButton = ({ label, href, width = 'w-[128px]' }) => {
  return (
    <div className={`flex items-center justify-center w-[128px] h-[47px] bg-[var(--primary-color)] rounded-full text-center py-[8px] px-[5px] mx-auto ${width}`} >
    <a href={href} width={width} className='block text-white'>
      {label}
    </a>
    </div >
  );
};

export default GenericButton;