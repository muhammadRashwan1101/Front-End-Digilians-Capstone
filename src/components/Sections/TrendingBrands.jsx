import { DetroitStyle, Cursive, MediocreStyle, Metal, RetroStyle, Gamified} from "../logosvg/Logos";
const logoSVG = [
    {
        name: "Detroit Style",
        element: <DetroitStyle />
    },
    {
        name: "Cursive",
        element: <Cursive />
    },
    {
        name: "Mediocre Style",
        element: <MediocreStyle />
    },
    {
        name: "Metal",
        element: <Metal />
    },
    {
        name: "Retro Style",
        element: <RetroStyle />
    },
    {
        name: "Gamified",
        element: <Gamified />
    }

]

export default function TrendingBrands() {
  return (
    <>
      <div className="flex flex-col py-3.5 container mx-auto justify-center my-10 items-center gap-8">
        <h3 className="text-xl font-semibold">Trending Brands</h3>
        <ul className="flex flex-row gap-x-8 ">
          {logoSVG.map((logo) => (
            <li key={logo.name} className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition duration-300 ease-in-out cursor-pointer">
                {logo.element}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
