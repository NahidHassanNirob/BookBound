export const allBooks=async()=>{
    const res=await fetch('http://localhost:3000/bookData.json',{cache:"no-store"});
    const data=await res.json();
    return data;
}