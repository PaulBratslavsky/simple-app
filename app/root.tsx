import os from "node:os";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import favicon from "./assets/favicon.svg";
import fonts from "./styles/fonts.css";
import tailwind from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: favicon,
    type: "image/svg+xml",
  },
  {
    rel: "stylesheet",
    href: fonts,
    type: "text/css",
  },
  {
    rel: "stylesheet",
    href: tailwind,
    type: "text/css",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];


export async function loader() {
	return json({ username: os.userInfo().username })
}

export default function App() {
  const data = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <header className="container mx-auto py-6">
					<nav className="flex justify-between">
            <Link to="/" className="font-bold">
							<div className="font-light">epic</div>
							<div className="font-bold">notes</div>
						</Link>
					</nav>
				</header>

				<div className="flex-1">
					<Outlet />
				</div>

				<div className="container mx-auto flex justify-between">
          <Link to="/" className="font-bold">						
            <div className="font-light">epic</div>
					  <div className="font-bold">notes</div>
				  </Link>
					<p>Built with ♥️ by {data.username}</p>
				</div>
				<div className="h-5" />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
