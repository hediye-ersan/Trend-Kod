function Button({text, onClick}) {

    return (

        <button
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
            onClick={onClick}
        >
            {text}
        </button>

    );
}
export default Button;