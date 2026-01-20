export const getPosts = async () =>  {
    const respose =await fetch("", {
        method: "GET",
    });
    return await respose.json();
}