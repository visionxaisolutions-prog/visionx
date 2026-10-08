import { redirect } from "next/navigation";

// /services was the old single pricing/services page. It's now split into
// /solutions (hub) plus five dedicated pillar pages — redirect so existing
// links and bookmarks don't 404.
export default function ServicesRedirect() {
  redirect("/solutions");
}
