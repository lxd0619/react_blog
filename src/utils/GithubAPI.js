//通过Github API创建文件
// let params = {
//   message: "my commit message",
//   committer: {
//     name: "lixudong",
//     email: "1228372022@qq.com",
//   },
//   content: "bXkgbmV3IGZpbGUgY29udGVudHM=",
// };
// axios
//   .put(
//     "https://api.github.com/repos/lxd0619/react_blog/contents/mmm.md?access_token=c2225ce2220f2bf9641d70025a1e78c7cd194e77",
//     params
//   )
//   .then((res) => {
//     console.log(res);
//   });

axios({
  method: "get",
  url: `https://api.github.com/repos/lxd0619/react_blog/contents/src/blogs/test.md`,
  // data: obj,
  headers: {
    Authorization: "c2225ce2220f2bf9641d70025a1e78c7cd194e77",
  },
}).then(function (res) {
  console.log(res);
});
axios({
  method: "get",
  url: `https://api.github.com/repos/lxd0619/react_blog/contents/src/blogs/test.md?ref=master`,
  // data: obj,
  headers: {
    Authorization: "c2225ce2220f2bf9641d70025a1e78c7cd194e77",
  },
});
// axios.get(
//   "https://api.github.com/repos/lxd0619/react_blog/contents?access_token=c2225ce2220f2bf9641d70025a1e78c7cd194e77"
// );
