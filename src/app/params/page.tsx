async function getData() {
  const res = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 3600 },
  });
  console.log('res', res.headers);
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data?.length} </div>;
}
