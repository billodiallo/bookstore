import faker from 'faker'
export function generateBook () {
    return {
        id.faker.number(),
        title.faker.word(),
        category.faker.word(),

    };
}

function generateBooks(numberofBooks) {
    return Array.from({ length: numberofBooks }, () => generateBook());
}

export default generateBooks(10);