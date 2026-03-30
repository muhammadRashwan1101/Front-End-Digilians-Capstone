const collections = [
  {
    name: "November Collection",
    image_url:
      "https://images.unsplash.com/photo-1613927010247-c1a0630093cb?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cashamere Set",
    image_url:
      "https://img.freepik.com/free-photo/portrait-young-man-with-hat_23-2148931675.jpg?semt=ais_rp_50_assets&w=740&q=80",
  },
  {
    name: "The leather",
    image_url:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hoodies",
    image_url:
      "https://images.unsplash.com/photo-1669387179673-79f22083118c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Collections() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-6 p-10 rounded-lg ">
        {collections.map((collection) => (
          <div className="relative" key={collection.name}>
            <img
              src={collection.image_url}
              alt={collection.name}
              className="w-full aspect-[1/1] object-cover rounded-2xl"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-lg font-semibold">{collection.name}</h3>
              <p className="text-sm opacity-80 border-b-1 border-b-white cursor-pointer w-fit pb-1">Collections →</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
