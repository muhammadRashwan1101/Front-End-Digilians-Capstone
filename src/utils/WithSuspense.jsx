import { Suspense } from "react";

export default function WithSuspense({ children }) {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      {children}
    </Suspense>
  );
}