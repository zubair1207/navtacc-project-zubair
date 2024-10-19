import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext"
import axios from "axios";


function Profile() {
  
  const { profile } = useAuth()
  
  console.log(profile);

  return (
    <>
        <section className="text-gray-900 bg-gray-200 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">

            <div className="lg:w-4/5 mx-auto flex flex-wrap">

              <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-32 object-cover object-center rounded" src={profile?.profilePhoto} />
              
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              
                <h1 className="text-gray-900 text-5xl title-font font-medium mb-1">Profile</h1>
                
                <div className=" mt-6 items-center p-5 rounded-lg border-2 border-black mb-5">
                  <h2 className="text-3xl mb-4 text-black">Username: {profile?.username}</h2>
                  <h2 className="text-3xl mb-4 text-black">Email: {profile?.email}</h2>
                  <h2 className="text-3xl mb-4 text-black">Address: {profile?.address}</h2>
                  <h2 className="text-3xl mb-4 text-black">Contact: {profile?.contact}</h2>
                  <h2 className="text-3xl mb-4 text-black">Role: {profile?.role}</h2>
                </div>

                <div className="flex">
                  <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                    Update
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>

    </>
  )
}

export default Profile