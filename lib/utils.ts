import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//* convert prisma object into plain object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

//* format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [intValue, decimalValue] = num.toString().split('.')

  return decimalValue ? `${intValue}.${decimalValue.padEnd(2, '0')}` : `${intValue}.00`
}
