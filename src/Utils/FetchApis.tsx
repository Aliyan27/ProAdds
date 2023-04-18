export const fetchPostToken = async (apiName: any) => {
  let url = process.env.REACT_APP_Base_URL;
  let response = await fetch(`${url}${apiName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: process.env.REACT_APP_UserName,
      password: process.env.REACT_APP_Password,
    }),
  });

  let jsonResponse = await response.json();

  return jsonResponse;
};

export const fetchPosts = async (apiName: any, data: any, token: string) => {
  let url = process.env.REACT_APP_Base_URL;
  let response = await fetch(`${url}${apiName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  let jsonResponse = await response.json();

  return jsonResponse;
};

export const fetchPostforgetpass = async (apiName: any, data: any, token: string) => {
  let url = process.env.REACT_APP_Base_URL;
  let response = await fetch(`${url}${apiName}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });

  let jsonResponse = await response.json();

  return jsonResponse;
};

export const fetchGetPWKey = async (apiName:any,token:string) => {
  let response = await fetch(`${process.env.REACT_APP_Base_URL}${apiName}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  let jsonResponse = await response.json();
  return jsonResponse;
}