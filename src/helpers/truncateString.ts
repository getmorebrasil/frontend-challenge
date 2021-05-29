export default function capitalizeString(string: string, amount: number) {
  if (!string) return ''
  if (!amount || string.length <= amount) return string

  return `${string.slice(0, amount)}...`
}
