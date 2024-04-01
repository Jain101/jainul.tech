



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





# References
1. [MDX, Next.js, React.js](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)
2. [Lee blog source code](https://github.com/leerob/leerob.io/tree/main/app)
3. [Notion, Next.js, React](https://vercel.com/templates/next.js/notion-blog)
4. 