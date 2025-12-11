"use server";

export async function getExampleData() {
  console.log("touch server");

  const result = {
    message: "Hello, world!",
  };

  return result;
}
