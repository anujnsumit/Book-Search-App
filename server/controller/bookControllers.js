
import axios from 'axios';

export const getBooks=async(req,res)=>{
    try {
    const response = await axios.get("http://fakerestapi.azurewebsites.net/api/v1/Books");
    const books = response.data;
    res.status(200).json({success:true,books})
    } catch (error) {
        res.status(500).json({ success:false,error: 'Failed to fetch books' });
    }

}

export const getBookDetail=async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id)
        const response = await axios.get(`http://fakerestapi.azurewebsites.net/api/v1/Books/${id}`);
        const books = response.data;
        res.status(200).json({success:true,books})
    } catch (error) {
        res.status(500).send({success:true})
    }
   
}