const serviceUrl = {
  //for Live Server
  end_user: "http://18.204.139.44:3003",
  company_user: "http://18.204.139.44:3003",
  image_url: "http://18.204.139.44/Yaass/uploads/",
  imageUrl_bucket: "http://18.204.139.44/Yaass/uploads/buckets/",
  method: "POST",
  GetMethod: "GET",
  methods: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifSwiaWF0IjoxNTUyNDczOTQxfQ.RMCTA6kusTuGAmKqN12ByEgAlu0m3Un18NEQejSmFz4'
  },
  headerSprint1: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

};
export default serviceUrl;
