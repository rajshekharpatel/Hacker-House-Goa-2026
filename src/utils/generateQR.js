export function generateQRValue(instagram) {
  const username = String(instagram || "")
    .trim()
    .replace(/^@+/, "")
    .replace(/\s+/g, "");

  if (!username) {
    return "https://instagram.com/";
  }

  return `https://instagram.com/${username}`;
}

export default generateQRValue;