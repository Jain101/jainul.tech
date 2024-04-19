


# To-Dos
- [ ] In changlog, when I click on project name I should be redirected to corresponding project page.



# Dev Journal
# 31.03.2024
1. Frontend with Next.js, Tailwind CSS, and TypeScript was already setup.
2. Installed Prisma ```npm i prisma --save-dev```. 
3. Initialized a new Prisma schema file ```schema.prisma``` using ```npx prisma init```.
4. Formatted the schema.prisma file using ```npx prisma format```.
5. Created a new postgres database in NeonDB and set the DATABASE_URL in the .env file.
6. Installed Prisma Client using ```npm i @prisma/client```
7. Created a migration with the name of "init" using ```npx prisma migrate dev --name init```.
8. Deleted everything Related to Prisma...wait wait I will keep it for changelog but for blogs I will just use .md files and fs module to read them.
9. Created a new directry named "content/posts" in the root directry, where all my posts will be stored.
10. Created another directry named "src/lib" in the root directry, where all my utility functions will be stored.
11. Created a new file named "posts.ts" in the "src/lib" directry, where I wrote a function to read all the sorted posts from the "src/content/posts" directry.
12. Everything worked...Hooraayyy🥳

# 01.04.2024
1. I tried deploying my changes today but it crashed and gave 2 main issues: 1. Prisma Client version mismatch and 2. type issue in lib/posts.ts file.
2. I fixed the Prisma Client version mismatch issue by deleting everything related to prisma🫠.
3. And fixed the type issue by creating a new type named postMetaDate in the lib/posts.ts file.
4. Deployed the changes and everything worked...Hooraayyy🥳

# 04.03.2024(midnight)
1. Had issue with rendering MD files in the blog page, resolved using [react-markdown & tailwind](https://dev.to/acidop/i-built-an-markdown-editor-using-nextjs-and-tailwindcss-46bg)
2. 


# References
1. [MDX, Next.js, React.js](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)
2. [Lee blog source code](https://github.com/leerob/leerob.io/tree/main/app)
3. [Notion, Next.js, React](https://vercel.com/templates/next.js/notion-blog)
4. [Next.js blog tutorial](https://nextjs.org/learn-pages-router/basics/data-fetching/request-time)
5. [Next-api-routes prisma example](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes)
6. https://developer.chrome.com/docs/capabilities/browser-fs-access



# schema.prisma
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Posts {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  title       String
  description String
  content     String
  views       Int    @default(0)
}

model Project {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())

  name        String   @db.VarChar(255)
  description String
  content     String
  duration    Int
  // userId  String
  // user    User     @relation(fields: [userId], references: [id])
  updates     Update[]
  Tags        Tag[]
}

model Tag {
  id String @id @default(uuid())

  name      String
  projectId String
  project   Project @relation(fields: [projectId], references: [id])
}

enum UPDATE_STATUS {
  NOT_STARTED
  IN_PROGRESS
  SHIPPED
  DEPRECATED
  ARCHIVED
}

model Update {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())

  title   String
  content String
  status  UPDATE_STATUS @default(NOT_STARTED)
  version String?
  asset   String?

  projectId String
  project   Project @relation(fields: [projectId], references: [id])
  // updatePoints UpdatePoint[]
}

// model UpdatePoint {
//   id        String   @id @default(uuid())
//   createdAt DateTime @default(now())

//   name String @db.VarChar(255)
//   description String

//   updateId String
//   update   Update @relation(fields: [updateId], references: [id])
// }
```