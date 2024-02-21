// A mock async query
export default function fetchCount(product = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => {
      resolve({ data: product });
    }, 1000)
  );
}
