export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.pexels.com/photos/9255727/pexels-photo-9255727.jpeg?_gl=1*4nf8bz*_ga*NTM2MTc0NjUwLjE3NzQ2Mjc0MTA.*_ga_8JE65Q40S6*czE3NzQ4NjYxMTgkbzMkZzEkdDE3NzQ4Njc3NDUkajI0JGwwJGgw"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#61b500] to-[#fdd795] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#2a8940] to-[#776fff] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Unveil Your Style,</h2>
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Elevate <span className="text-lime-300">Every Day</span></h2>
          <p className="mt-8 text-lg font-medium text-pretty text-white max-w-[40ch]">
            Discover the art of effortless style with our curated collection of fashion essentials. 
            From timeless classics to contemporary trends, we bring you a seamless blend of comfort and sophistication.
            <br/>Elevate your everyday look with our versatile pieces designed to empower your unique style journey.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#" className="bg-white shadow-md/30 rounded-lg px-4 py-2.5 font-bold text-lime-700 hover:text-lime-950 hover:bg-white/80 width-[4rem] transition duration-300 ease-in-out">
                Shop Now
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}
