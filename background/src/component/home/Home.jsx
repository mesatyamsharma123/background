import React from 'react'
import pic from '../../../public/1.avif'
function Home() {
    const states = [
        {
          name: "Andhra Pradesh",
          districts: [
            "Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Krishna",
            "Kurnool",
            "Prakasam",
            "Srikakulam",
            "Sri Potti Sriramulu Nellore",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR Kadapa"
          ]
        },
        {
          name: "Arunachal Pradesh",
          districts: [
            "Anjaw",
            "Changlang",
            "Dibang Valley",
            "East Kameng",
            "East Siang",
            "Kamle",
            "Kra Daadi",
            "Kurung Kumey",
            "Lepa Rada",
            "Lohit",
            "Longding",
            "Lower Dibang Valley",
            "Lower Siang",
            "Lower Subansiri",
            "Namsai",
            "Pakke-Kessang",
            "Papum Pare",
            "Shi-Yomi",
            "Siang",
            "Tawang",
            "Tirap",
            "Upper Siang",
            "Upper Subansiri",
            "West Kameng",
            "West Siang"
          ]
        },
        {
          name: "Assam",
          districts: [
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Dima Hasao",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup",
            "Kamrup Metropolitan",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
          ]
        },
        {
          name: "Bihar",
          districts: [
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
          ]
        },
        {
          name: "Chhattisgarh",
          districts: [
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada",
            "Dhamtari",
            "Durg",
            "Gariaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham",
            "Kanker",
            "Kondagaon",
            "Korba",
            "Koriya",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur",
            "Surguja"
          ]
        }
        // Add other states here
      ]
      console.log(states[0].districts[0])
  return (
    <div className='flex gap-20 flex-col md:flex-row h-screen w-screen items-center justify-center'>
    <div className=' flex flex-col md:flex-row w-xs p-6 md:w-sm  bg-red-100 bg-cover ' style={{backgroundImage:`url(${pic})`}}>
     <div className='flex justify-between gap-4 flex-wrap'>
        <select className='bg-white rounded p-4  '> 
       {
        states.map((i,index)=>(
            <option key={index}>{i.name}</option>


        ))
       }
        </select>

        
        
        <button className='bg-white rounded-2xl p-2 w-20'>Submits</button>
    <div className=''>
    <select className='bg-white rounded p-4  '> 
       {
        states.map((i,index)=>(
            <option key={index}>{i.districts[0]}</option>


        ))
       }
        </select>
    </div>
     </div>
    </div>

    <div className=' flex flex-col md:flex-row w-xs p-6 md:w-sm  bg-red-100 bg-cover ' style={{backgroundImage:`url(${pic})`}}>
       dvzdddddddddd
    </div>  
    <div className=' flex flex-col md:flex-row w-xs p-6 md:w-sm  bg-red-100 bg-cover ' style={{backgroundImage:`url(${pic})`}}>
       x x
    </div>  
    </div>
  )
}

export default Home
