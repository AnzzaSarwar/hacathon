import Image from 'next/image'; // Import Image from Next.js

export default function ImageContainer() {
  return (
    <div className="w-full h-auto mx-auto flex flex-wrap justify-center items-center bg-gray-100 px-4 space-x-4 py-8">
      {/* Box 1 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center mb-4 sm:mb-0">
        <Image 
          src="/Vector.png" 
          alt="Brand 1" 
          className="w-full h-full object-contain"
          width={120}  // Specify width
          height={120} // Specify height
        />
      </div>
      {/* Box 2 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center mb-4 sm:mb-0">
        <Image 
          src="/Vector (1).png" 
          alt="Brand 2" 
          className="w-full h-full object-contain"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 3 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center mb-4 sm:mb-0">
        <Image 
          src="/Vector (2).png" 
          alt="Brand 3" 
          className="w-full h-full object-contain"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 4 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center mb-4 sm:mb-0">
        <Image 
          src="/Vector (3).png" 
          alt="Brand 4" 
          className="w-full h-full object-contain"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 5 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center mb-4 sm:mb-0">
        <Image 
          src="/Vector (4).png" 
          alt="Brand 5" 
          className="w-full h-full object-contain"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 6 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center mb-4 sm:mb-0">
        <Image 
          src="/Vector (5).png" 
          alt="Brand 6" 
          className="w-full h-full object-contain"
          width={120} 
          height={120} 
        />
      </div>
    </div>
  );
}
