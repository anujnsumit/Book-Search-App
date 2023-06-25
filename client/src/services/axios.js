import axios from 'axios';

const axiosInstance=axios.create({
    baseURL:'',
    headers:{Accept: 'application/json'}
});

axiosInstance.interceptors.request.use((request)=>{
request.time={start:new Date()};
return request;
},(err)=>Promise.reject(err));

axiosInstance.interceptors.response.use((response)=>{
response.config.time.endTime=new Date();
response.duration=response.config.time.endTime-response.config.time.startTime;
return response;
},(err)=>Promise.reject(err));

export default axiosInstance;