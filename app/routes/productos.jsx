import { useLoaderData } from '@remix-run/react';

export default function Productos() {
    const data = useLoaderData();
    console.log('showing data... ', data);
    return (
        <div>
            <h1>Productos</h1>
        </div>
    );
}
