"use client"

import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });
    const [error,seterror]=useState({});
    const[isSending,setisSending]=useState(false);
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const validate=()=>{
        let error={};
        if(!formData.name) error.name="FORM DATA IS REQUIRED";
        if(!formData.email) {
            error.email="EMAIL DATA IS REQUIRED";
        }
        else if(!/\$+@\$+\.\$+/.test(formData.email)){
            error.email="Email is invalid"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationerror=validate();
        if(Object.keys(validationerror).length>0){
            seterror(validationerror);
        }
        else{
            seterror({});
            setisSending(true);
            emailjs.send(
                "service_dshywea",
                "template_gadmoic",
                formData,
                "ecerWtewt5fcxl6Jl"

            )
            .then((response)=>{
                console.log("SUCCESS",response.status);
                toast.success("message sent❤")
                setFormData({name:"",email:"",message:""})
                
            })
            .catch((error)=>{
                console.log("FAILED");
                toast.error("failed to send message")
                
            })
            .finally(()=>{
                setisSending(false);
            });
        }
    }
  return (
    <div className="mx-auto  max-w-xl p-4">
        <Toaster/>
        <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-800">
          Get in touch
        </h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <input type="text" 
            id="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-slate-700 bg-transparent px-3 py-2 text-sm focus-border-gray-500"/>
              {
                error.name&&(
                    <p className="text-sm text-pink-800">{error.name}</p>
                )
              }
            </div>
        
         <div className="mb-4">
            <input type="text" 
            id="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-slate-700 bg-transparent px-3 py-2 text-sm focus-border-gray-500"/>
              {
                error.name&&(
                    <p className="text-sm text-pink-800">{error.email}</p>
                )
              }
            </div>
            <div className="mb-4">
            <textarea type="text" 
            id="message"
            value={formData.message}
            placeholder="Message"
            rows={4}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-slate-700 bg-transparent px-3 py-2 text-sm focus-border-gray-500"/>
              {
                error.name&&(
                    <p className="text-sm text-pink-800">{error.message}</p>
                )
              }
            </div>
            <button className={`w-full rounded bg-black px-4 py-3 text-2xl font-semibold text-slate-100 ${isSending?"cursor-not-allowed opacity-50":""}`}
            disabled={isSending}>
                {
                    isSending?"Sending.....":""
                }
                 Send✍
            </button>
        </form>

    </div>
  )
}

export default Contact