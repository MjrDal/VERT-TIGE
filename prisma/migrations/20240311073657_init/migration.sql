-- CreateTable
CREATE TABLE "Cards" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "theme" TEXT,
    "image" TEXT,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);
