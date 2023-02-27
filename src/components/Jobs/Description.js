import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Description = ({id})=>{
    const [isJob, setJob] = useState('');
    useEffect(() => {
        const url = `http://127.0.0.1:8000/job/${id}/`;
        fetch(url).then(res => res.json()).then(data => {
                setJob(data)
                console.log(data)
        })
    }, [id])

    return (
        <div className="">
        
            <div className="flex gap-3 justify-between ">
                {/* <img className="rounded-full " src={isJob.creator?.photo_url} /> */}
                {/* <img className="rounded-full w-12 h-12" alt="phofile pic" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.befunky.com%2Ffeatures%2Fphoto-editor%2F&psig=AOvVaw1gBYLQW1-uLytrQaoy7qbZ&ust=1677608077780000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCK452ntv0CFQAAAAAdAAAAABAn" /> */}
                
                <div className="ms-4">
                    <h3 className="font-bold text-lg text-left">{isJob.company}</h3>
                    <h4 className="text-left text-sm"><MapPinIcon className="w-3.5 h-3.5 align-middle inline-block" /> {isJob.location}</h4>
                
                    <span className="text-left text-sm block align-middle">
                    <BriefcaseIcon className="w-3.5 h-3.5 mr-2 inline-block" />
                    {isJob.job_type}</span>
        
                </div>
                <button className="btn btn-primary text-white">
                    Apply Now
                </button>
            </div>
            <div className="divider"></div>
            <div className="">
                <h2 className="text-2xl font-bold">{isJob.title}</h2>
                <h3 className="">{isJob.location}</h3>
            </div>
            <div className="text-left mt-16">
                <h3 className="text-lg font-bold">Job Details:</h3>
                <p>
                {isJob.content}
                </p>
                
                <h3 className="text-lg font-bold">Requirements:</h3>
                <p className="">{isJob.skill_requirements}</p>
            </div>
            
        </div>
    )
}

export default Description;