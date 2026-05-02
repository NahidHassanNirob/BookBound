export const allBooks=async()=>{
    const res=await fetch('https://bookbounds.vercel.app/bookData.json',{cache:"no-store"});
    const data=await res.json();
    return data;
}