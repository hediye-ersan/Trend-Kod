import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 ">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 ">
          <h2 className="text-h2 font-bold mb-4">
            Get answers to all your questions.
          </h2>
          <h4 className="text-secondText text-h4 mt-2">
            Problems trying to resolve the conflict between the two major realms of Classical physics:
          </h4>
        </div>

        <button
          className="px-6 bg-blueText text-white py-3 font-medium rounded-lg hover:bg-custom-gradient transition-colors"
        >
          CONTACT OUR COMPANY
        </button>

        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Twitter size={30} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Instagram size={30} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Facebook size={30} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Linkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
