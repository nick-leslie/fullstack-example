-- CreateTable
CREATE TABLE "employee" (
    "name" TEXT NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" SERIAL NOT NULL,
    "feedback" TEXT NOT NULL,
    "employeeName" TEXT NOT NULL,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_name_key" ON "employee"("name");

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_employeeName_fkey" FOREIGN KEY ("employeeName") REFERENCES "employee"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
