-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "demoLink" TEXT,
    "media" TEXT[],

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
