const Frouts = Array.from({length:40},(_,index)=>({
  id:index+1,
  Name:`frout ${index+1}`,
}))
 export default async function Home({searchParams}:{searchParams:Promise<{page?:string}>}) {
  const pagenumberInstring = (await searchParams).page;
  const pagenumber= Number(pagenumberInstring) || 1;
  const pagesize = 5;
  const start = (pagenumber - 1) * pagesize;
  const end = start + pagesize; 
  const items = Frouts.slice(start,end);
  return (
    <div className="flex min-h-screen items-center justify-center flex-col bg-zinc-50 font-sans dark:bg-black">
    {items.map((frout)=>(
      <h1 key={frout.id} className="text-4xl font-bold">{frout.Name}</h1>
    ))}
    </div>
  );
}
