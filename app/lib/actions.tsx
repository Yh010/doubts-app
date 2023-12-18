// app/lib/actions.tsx
import { redirect } from "next/navigation";
const fs = require("fs");
interface Doubt {
  firstName: string;
  lastName: string;
  // Add other doubt fields here as needed
}
export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
  };
  message?: string | null;
};
export async function createDoubt(prevState: State, formData: FormData) {
  /* try {
    const storedDoubts = localStorage.getItem("doubts");
    const doubts = storedDoubts ? JSON.parse(storedDoubts) : [];
    doubts.push({ ...doubt, timestamp: Date.now() });
    localStorage.setItem("doubts", JSON.stringify(doubts));
    return true; // Indicate success
  } catch (error) {
    console.error("Error storing doubt:", error);
    return false; // Indicate failure
  } */

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  try {
    const newDoubt = { firstName, lastName, timestamp: Date.now() };
    // Assuming `data.js` exports an array of doubts
    const { data } = require("/db/data.js");
    data.push(newDoubt); // Push new doubt to existing data
    fs.writeFileSync("/db/data.js", JSON.stringify(data));
    redirect("/");
  } catch (e) {
    console.error("Error storing doubt:", e);
    return false; // Indicate failure
  }

  //push firstName and lastName to /db/data.js file as an object
  //then redirect to
}
