import faker from 'Faker'
export function generateBook () {
    return {
        id: faker.random.number(),
        title: faker.random.word(),
        category: faker.random.word(),

    };
}

function generateBooks(numberofBooks) {
    return Array.from({ length: numberofBooks }, () => generateBook());
}

export const books = generateBooks(10);