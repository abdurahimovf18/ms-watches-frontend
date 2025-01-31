export function splitIntoChunks<T>({ data, branchLength }: { data: T[], branchLength: number }): T[][] {
    const branches: T[][] = [[]]

    data.forEach(value => {
        let lastIndex = branches.length - 1

        if (branches[lastIndex]?.length === branchLength) {
            branches.push([])
            lastIndex++
        }

        branches[lastIndex].push(value)
    })

    return branches
}
