import { redirect } from "next/navigation";

export const metadata = {
  title: "Load Page",
};

export default function Test() {
  redirect("/"); // instantly forwards to home page
}
