// ` `
const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button  className={`flex justify-center items-center gap-2 px-7 rounded-full py-4 border font-montserrat text-lg leading-none hover:bg-opacity-90 transform transition ease-out duration-300
    ${ backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 
    "bg-coral-red  text-white border-coral-red"} ${fullWidth && 'w-full'}}`}
  >
        {label}
        {iconURL && <img
            src={iconURL}
            alt="arrow-right"
            className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button