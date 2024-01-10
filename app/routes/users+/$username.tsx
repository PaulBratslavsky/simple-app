import { Link, useLoaderData, useParams } from '@remix-run/react'
import { db } from "../../utils/db.server"
import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { invariantResponse } from '~/utils/misc';

export async function loader({ params } : LoaderFunctionArgs ) {
	const username = params.username;
	const user = await db.user.findFirst({
		where: { username: { equals: username } }
	});
	
	invariantResponse(user, "User not found", { status: 404 });	

	return json({ user: {
		name: user.name,
		username: user.username,
	} });
}

export default function KodyProfileRoute() {
	const data = useLoaderData<typeof loader>();
	console.log(data);
	return (
		<div className="container mb-48 mt-36 border-4 border-green-500">
      <h1 className="text-h1">{data.user.name ?? data?.user.name}</h1>
      <Link to="notes">notes</Link>
		</div>
	)
}
