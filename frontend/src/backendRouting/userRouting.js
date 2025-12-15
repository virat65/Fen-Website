const backendpath = import.meta.env.VITE_backendUrl;
console.log(backendpath, "backendpath");
const backendapi = {
  signup: {
    url: `${backendpath}/user/signup`,
    method: "post",
  },
  login: {
    url: `${backendpath}/user/login`,
    method: "post",
  },
  findallusers: {
    url: `${backendpath}/user/findallusers`,
    method: "get",
  },
  finduserbyid: {
    url: `${backendpath}/user/finduserbyid`,
    method: "get",
  },
  deleteuserbyid: {
    url: `${backendpath}/user/deleteuserbyId`,
    method: "delete",
  },
  updateuser: {
    url: `${backendpath}/user/updateuserdetails`,
    method: "put",
  },
};
export default backendapi;
