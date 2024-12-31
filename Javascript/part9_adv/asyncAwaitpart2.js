// function fetchPostData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Post Data fetched");
//     }, 2000);
//   });
// }
//
// function fetchCommentData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Comment data fetched.");
//     }, 3000);
//   });
// }
//
// async function getBlogData() {
//   try {
//     console.log("Fetching blog data");
//     // const postData = await fetchPostData();
//     // const commentData = await fetchCommentData();
//     const [postData, commentData] = await Promise.all([
//       fetchPostData(),
//       fetchCommentData(),
//     ]);
//
//     console.log(postData);
//     console.log(commentData);
//
//     console.log("fetch complete");
//   } catch (error) {
//     console.error("Error fetching blog data", error);
//   }
// }
// getBlogData();




function fetchPostData(){
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve("post data is being fetched")
    }, 3000);
  })
}

function fetchCommentDataFromPost(){
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve("comment data fetched successfully");
    }, 4000);
  })
}



async function getBlogData(){
  try{
    console.log("Fetching blog data");
    const blogData = await (fetchPostData());
    const commentData = await fetchCommentDataFromPost();
    console.log("blogdata");
    console.log("commentdata");
  }
  catch (error){
    console.log("Error fetching blog data ",error);
  }
}

getBlogData();