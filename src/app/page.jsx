import { redirect } from "next/dist/server/api-utils";
import { menu, slug } from "@/lib/utils";

export default function Home() {
  redirect(slug(menu[0]))}
