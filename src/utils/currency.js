const USD_TO_INR = 83; // adjust this conversion rate as needed

export function toINR(usd) {
  const n = Number(usd) || 0;
  return n * USD_TO_INR;
}

export function formatINR(usd) {
  const inr = toINR(usd);
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(inr);
}

export default { toINR, formatINR };
