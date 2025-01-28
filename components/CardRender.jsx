export function CardRender() {
    return <>
    <div className="flex flex-wrap justify-center items-center gap-4">
            <Card title="900+" description="Expert Doctors" />
            <Card title="10000+" description="Beds Available" />
            <Card title="80+" description="Hospitals" />
            <Card title="1000+" description="Trained Staff" />
            <Card title="50+" description="Super Specialities" />
            <Card title="20k+" description="Happy Patients" />
            <Card title="24/7" description="Emergency Services" />
     </div>
     </>
}
function Card({title, description}){
    return <div >
        <h5 className="text-xl text-[#ff0000] text-center mb-2">{title}</h5>
        <h3 >{description}</h3>
    </div>
}