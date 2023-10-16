/*
  Warnings:

  - You are about to drop the column `email` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `description` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Employee_email_key";

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "email",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL;
