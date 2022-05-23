import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BokkingModal from './BokkingModal';
import Service from './Service';

const AvailableAppointment = ({date,setDate}) => {
    // const [services,setServices]=useState([]);
    const [treatment,setTreatment]=useState({});
    const formattedDate = format(date,'PP');

    const {data: services, isLoading, refetch}= useQuery(['available',formattedDate], ()=> 
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
      res.json()
    ) )

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect( ()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate]);
    console.log(treatment)
    return (
        <div>
               <h4 className='text-xl text-primary text-center'>You have Selected : {format(date, 'PP')}</h4>
               <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 m-5'>
                   {
                       services?.map(service=> <Service
                         key={service._id}
                          setTreatment={setTreatment} 
                          service={service}></Service>)
                   }
               </div>
               {treatment && <BokkingModal 
               date={date}
               setTreatment={setTreatment}
               refetch={refetch}
               key={treatment._id}
                treatment={treatment}>
                    </BokkingModal>}
        </div>
    );
};

export default AvailableAppointment;