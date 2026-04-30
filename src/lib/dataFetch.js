export const allBooks=async()=>{
    const res=await fetch('/bookData.json');
    const data=await res.json();
    return data;
}