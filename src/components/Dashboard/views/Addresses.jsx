import PageTransition from "../../../utils/PageTransition";

export default function Addresses() {
  return (
    <>
      <PageTransition className="flex flex-col px-4 gap-5 col-span-2 rounded-xl col-span-6">
        <div className="flex flex-col px-4 gap-5 col-span-2 rounded-xl col-span-6">
          <h3 className="text-xl font-medium">Addresses</h3>
          <div className="flex text-gray-600 gap-5">
            <div className="flex flex-col gap-2 mb-5 border-2 border-gray-300 rounded-lg p-4 w-1/2">
              <h3 className="font-semibold">Billing Address</h3>
              <p>Sara Smith</p>
              <p>+1 234 567 890</p>
              <p>123 Main St, Anytown, USA</p>
            </div>
            <div className="flex flex-col gap-2 mb-5 border-2 border-gray-300 rounded-lg p-4 w-1/2">
              <h3 className="font-semibold">Home Address</h3>
              <p>Sara Smith</p>
              <p>+1 234 567 890</p>
              <p>456 Oak Ave, Somewhere, USA</p>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
