function Button({text, onClick}) {

    return (

        <button
            className="bg-blueText text-white  py-4 px-8  transition-transform duration-200"
            onClick={onClick}
        >
            {text}
        </button>

    );
}
export default Button;