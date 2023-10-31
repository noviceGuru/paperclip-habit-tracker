export function generateUniqueArrays(length: number, count: number): number[][] {
    const uniqueArrays: Set<number[]> = new Set()

    while (uniqueArrays.size < count) {
        const uniqueArray: number[] = generateUniqueArray(length)
        uniqueArrays.add(uniqueArray)
    }

    return Array.from(uniqueArrays)
}

function generateUniqueArray(length: number): number[] {
    const uniqueArray: number[] = []

    while (uniqueArray.length < length) {
        const randomNumber: number = Math.floor(Math.random() * 100) // Adjust the range as needed
        if (!uniqueArray.includes(randomNumber)) {
            uniqueArray.push(randomNumber)
        }
    }

    return uniqueArray
}
