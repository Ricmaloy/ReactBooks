import { PrismaClient } from '@prisma/client'
import { books } from './constants/books'
const prisma = new PrismaClient()

async function main() {
  await prisma.categoriesOnBooks.deleteMany()
  await prisma.category.deleteMany()
  await prisma.book.deleteMany()

  const booksSeed = books.map((book) => {
    return prisma.book.create({
      data: {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        categories: {
          create: [
            ...book.categories.map((category) => {
              return {
                category: {
                  create: {
                    name: category.name,
                  },
                },
              }
            }),
          ],
        },
      },
    })
  })
  await prisma.$transaction(booksSeed)
  console.log({ booksSeed })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
