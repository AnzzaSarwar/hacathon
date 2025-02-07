import Image from 'next/image';

const EditorsPick = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-center">EDITOR&apos;S PICK</h2>
      <p className="text-center text-gray-600 mb-6">Problems trying to resolve the conflict between</p>

      <div className="flex gap-4 ml-20">
        {/* Box 1: Men */}
        <div
          className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
          style={{ width: '509px', height: '500px' }}
        >
          <Image
            src="/filter.png" // Replace with your image path
            alt="Men"
            width={509}
            height={500}
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 left-28 transform -translate-x-1/2 bg-white text-black w-[170px] h-[48px] font-semibold py-2 px-6 rounded-lg hover:bg-blue-700">
            Men
          </button>
        </div>

        {/* Box 2: Women */}
        <div
          className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
          style={{ width: '240px', height: '500px' }}
        >
          <Image
            src="/filter (1).png" // Replace with your image path
            alt="Women"
            width={240}
            height={500}
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-pink-600">
            Women
          </button>
        </div>

        {/* Vertical Stack: Accessories & Kids */}
        <div className="flex flex-col gap-4">
          {/* Box 3: Accessories */}
          <div
            className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
            style={{ width: '239.61px', height: '250px' }}
          >
            <Image
              src="/filter (2).png" // Replace with your image path
              alt="Accessories"
              width={240}
              height={250}
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-semibold w-[138px] h-[50] py-2 px-4 rounded-lg hover:bg-green-600">
               Accessories
            </button>
          </div>

          {/* Box 4: Kids */}
          <div
            className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
            style={{ width: '239.61px', height: '250px' }}
          >
            <Image
              src="/filter (3).png" // Replace with your image path
              alt="Kids"
              width={240}
              height={250}
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600">
              Shop Kids
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;