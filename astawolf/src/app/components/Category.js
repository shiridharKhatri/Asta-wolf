import React from 'react'

export default function Category() {
    const categorys = [
        {
            name:"Smartwatches",
            src:"cat-asta/smartwatch.png",
            background: "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)"
        },
        {
            name:"Earbuds",
            src:"cat-asta/earbuds.png",
            background: "linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)"
        },
        {
            name:"Earphones",
            src:"cat-asta/earphone.png",
            background: "linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)"
        },
        {
            name:"Powerbank",
            src:"cat-asta/powerbank.png",
            background: "linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)"
        },
        {
            name:"Neckband",
            src:"cat-asta/neckband.png",
            background: "linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%)"
        },
        {
            name:"Speakers",
            src:"cat-asta/speaker.png",
            background: "linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)"
        },
        {
            name:"Datacable",
            src:"cat-asta/cable.png",
            background: "linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%)"
        },
        {
            name:"Power Adapter",
            src:"cat-asta/adapter.png",
            background: "linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%)"
        },
    ]
  return (
    <section className='flex-cat'>
        {categorys.map((e, index)=>{
            return <div className="flex-category-display" key={index}>
                  <div className="image" style={{backgroundImage:`${e.background}`}}>
                    <img src={e.src} alt={e.name} />
                  </div>
                  <h1>{e.name}</h1>
            </div>
        })}
     
    </section>
  )
}
