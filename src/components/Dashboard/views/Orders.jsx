import PageTransition from "../../../utils/PageTransition";

const orders = [
  {
    id: "ord-001",
    user_id: "usr-001",
    status: "delivered",
    placed_at: "2025-11-01",
    delivered_at: "2025-11-03",
    items: [
      {
        product_id: "prod-015",
        sku: "R213198",
        quantity: 1,
        size: "L",
        color: "Earthy Multi",
        price_at_purchase: 549.99,
      },
    ],
    subtotal: 549.99,
    shipping_cost: 0,
    total: 549.99,
    shipping_address: {
      city: "Cairo",
      district: "Nasr City",
      country: "Egypt",
    },
  },
  {
    id: "ord-002",
    user_id: "usr-004",
    status: "delivered",
    placed_at: "2025-10-28",
    delivered_at: "2025-10-30",
    items: [
      {
        product_id: "prod-011",
        sku: "R214898",
        quantity: 1,
        size: "XL",
        color: "Black",
        price_at_purchase: 659.99,
      },
      {
        product_id: "prod-007",
        sku: "R215012",
        quantity: 1,
        size: "M",
        color: "Beige & Black",
        price_at_purchase: 549.99,
      },
    ],
    subtotal: 1209.98,
    shipping_cost: 0,
    total: 1209.98,
    shipping_address: {
      city: "Cairo",
      district: "Maadi",
      country: "Egypt",
    },
  },
  {
    id: "ord-003",
    user_id: "usr-002",
    status: "processing",
    placed_at: "2026-03-15",
    delivered_at: null,
    items: [
      {
        product_id: "prod-001",
        sku: "R217174",
        quantity: 2,
        size: "L",
        color: "Dark Green",
        price_at_purchase: 714.99,
      },
    ],
    subtotal: 1429.98,
    shipping_cost: 0,
    total: 1429.98,
    shipping_address: {
      city: "Alexandria",
      district: "Sidi Gaber",
      country: "Egypt",
    },
  },
];
export default function Orders() {
  return (
    <>
      <PageTransition className="flex flex-col px-4 gap-5 col-span-2 rounded-xl col-span-6">
        <div className="flex flex-col px-4 gap-5 col-span-2 rounded-xl col-span-6">
          <h3 className="text-xl font-medium">Orders History</h3>
          {/* <div className="flex justify-between border-b-2 pb-2 border-gray-300 w-full"> */}
          <div className="grid grid-cols-4 gap-5 border-b-2 pb-2 border-gray-300 w-full">
            <span className="font-semibold">Order ID</span>
            <span className="font-semibold">Date</span>
            <span className="font-semibold">Status</span>
            <span className="font-semibold">Price</span>
          </div>
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-4 gap-5 border-b-2 py-10 border-gray-300 w-full"
            >
              <span>{order.id}</span>
              <span>{order.placed_at}</span>
              <span
                className={
                  order.status === "delivered"
                    ? "text-green-600"
                    : order.status === "processing"
                      ? "text-yellow-600"
                      : "text-gray-600"
                }
              >
                {order.status}
              </span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </PageTransition>
    </>
  );
}
