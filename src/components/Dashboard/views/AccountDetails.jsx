export default function AccountDetails() {
  return (
    <>
      <div className="flex flex-col px-4 gap-5 col-span-2 rounded-xl col-span-6">
        <h3 className="text-xl font-medium">Account Details</h3>
        <div className="grid grid-cols-[160px_1fr] gap-x-4 gap-y-3 text-gray-600">
          <span className="font-semibold">First name:</span> <span>Sara</span>
          <span className="font-semibold">Last name:</span> <span>Smith</span>
          <span className="font-semibold">Email:</span>{" "}
          <span>sara.smith@example.com</span>
          <span className="font-semibold">Display Name:</span>{" "}
          <span>Sara Smith</span>
          <span className="font-semibold">Password:</span> <span>********</span>
          <span className="font-semibold">Phone:</span>{" "}
          <span>123-456-7890</span>
        </div>
      </div>
    </>
  );
}
