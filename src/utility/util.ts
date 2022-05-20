export const shuffleArray = (items: Array<any>) => {
    for (const item of items) {
        let firstIndex: number = Math.floor(Math.random() * items.length)
        let secondIndex: number = Math.floor(Math.random() * items.length)
        swipe(items, firstIndex, secondIndex)
    }
}

export const swipe = (items: Array<any>, firstIndex: number, secondIndex: number) => {
    let temp = items[firstIndex]
    items[firstIndex] = items[secondIndex]
    items[secondIndex] = temp
}
